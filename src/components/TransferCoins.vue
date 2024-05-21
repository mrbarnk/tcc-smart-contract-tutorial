<template>
  <div>
    <div class="form-group my-3">
      <label for="" class="small text-white opacity-50 d-block mb-2">Transfer From</label>
      <CryptoDropdown :excludedCoin="transferFrom" @coinChanged="setTransferFrom" />
    </div>
    <div class="form-group my-3">
      <label for="" class="small text-white opacity-50 d-block mb-2">Transfer to</label>
      <CryptoDropdown :excludedCoin="transferTo" @coinChanged="setTransferTo" />
    </div>
    <div class="form-group my-3">
      <label for="" class="small text-white opacity-50 d-block mb-2">Amount</label>
      <div class="input-group bt-input-group mb-3">
        <input type="number" class="form-control" v-model="payload.amount" />
      </div>
    </div>
    <div class="mt-5">
      <Web3Modal v-if="!walletConnected" @walletConnected="handleWalletConnected"
        @walletDisconnected="handleWalletDisconnected" />
      <button type="submit" class="bt-button bt-button--primary w-100" :disabled="isLoading" @click="swapToken" v-else>
        Swap Tokens <span class="material-symbols-outlined"> swap_vert </span>
        <Spinner v-if="isLoading" />
      </button>
    </div>
  </div>
</template>

<script>
import { ref, reactive } from "vue";
import Web3Modal from "./Web3Modal.vue";
import { sendTransaction, writeContract, readContract, getAccount, waitForTransactionReceipt } from '@wagmi/core'
import { config } from "@/helpers/wagmiConfig";
import UNISWAP_ROUTER_ABI from '@/helpers/UNISWAP_ROUTER_ABI'
import tokenAbi from "@/helpers/tokenAbi"
import { toast } from 'vue3-toastify';

export default {
  name: "TransferCoins",
  components: {
    Web3Modal,
  },
  setup() {
    const transferTo = ref(null);
    const transferFrom = ref(null);
    const account = ref(getAccount(config))
    const payload = reactive({
      amount: "",
    });

    console.log({ account: account.value })
    // if (!account.value.isConnected) {
    //   // alert(`not connected: ${getAccount(config).address}`)
    //   setTimeout(() => {

    //   }, 3000);
    // }
    const swapToken = async () => {
      try {

        if (!account.value.address) {
          account.value = getAccount(config)
        }
        const panckageSwapRouterv2 = '0x10ed43c718714eb63d5aa57b78b54704e256024e'

        const {
          amountIn,
          amountOutMin,
          path,
          to,
          deadline } = {
          amountIn: `${Number(payload.amount) * (10 ** transferFrom.value.decimals)}`,
          amountOutMin: 0,
          path: [transferFrom.value.address, transferTo.value.address],
          to: panckageSwapRouterv2,
          deadline: Math.floor(Date.now() / 1000) + 60 * 20
        }


        let approved = await readContract(config, {
          abi: tokenAbi,
          address: transferFrom.value.address,
          functionName: 'allowance',
          args: [account.value.address, panckageSwapRouterv2]
        })

        console.log({ approved }, { addres: account.address, panckageSwapRouterv2, amountIn })

        if (approved < Number(amountIn)) {
          toast.info(`Token requires approval! Approved ${approved} Approving ${amountIn}`);//
          // Approve the Uniswap router to spend the token
          const approveTxn = await writeContract(config, {
            abi: tokenAbi,
            address: transferFrom.value.address,
            functionName: 'approve',
            args: [panckageSwapRouterv2, amountIn]
          })
          const waitForApproval = waitForTransactionReceipt(config, { hash: approveTxn })

          // alert('Transfer token is ongoing!')
          await waitForApproval;
          // await approveTxn.wait();
          // approved = Number(ethers.BigNumber.from(await tokenA.allowance(to, routerAddress)).toString())
        }

        // console.log({
        //   abi: UNISWAP_ROUTER_ABI,
        //   address: panckageSwapRouterv2,
        //   amountIn,
        //   amountOutMin,
        //   path,
        //   to,
        //   deadline
        // })

        const result = await writeContract(config, {
          chainId: account.value.chainId,
          abi: UNISWAP_ROUTER_ABI,
          address: panckageSwapRouterv2,
          functionName: 'swapExactTokensForTokens',
          args: [
            amountIn,
            amountOutMin,
            path,
            to,
            deadline
          ]
        })
        const wait = waitForTransactionReceipt(config, { hash: result })

        toast.info('Transfer token is ongoing!')
        await wait;
        // const result = await sendTransaction(config, {
        //   to: '0x857c723921a799BC86437B9366602a38A44529dF',
        //   value: `${Number(payload.amount) * (10 ** 18)}`,
        // })

        toast.success('Token swapped successfully!', {})
        console.log({ result })
      } catch (error) {
        console.error(error.stack)
        toast.error(`Error: ${error.message}`)
      }
    }
    const setTransferFrom = (coin) => {
      transferFrom.value = coin;
    };
    const setTransferTo = (coin) => {
      transferTo.value = coin;
    };
    const isLoading = ref(false);
    const walletConnected = ref(false);
    const handleWalletConnected = (data) => {
      walletConnected.value = true;
    };
    const handleWalletDisconnected = (data) => {
      walletConnected.value = false;
    };
    if (account.value.isConnected) {
      handleWalletConnected('concted')
    }
    return {
      isLoading,
      transferTo,
      transferFrom,
      walletConnected,
      payload, swapToken,
      setTransferTo,
      setTransferFrom,
      handleWalletConnected,
      handleWalletDisconnected,
    };
  },
};
</script>

<style></style>
