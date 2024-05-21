<template>
  <div>
    <div class="form-group my-3">
      <label for="" class="small text-white opacity-50 d-block mb-2">Transfer Token</label>
      <CryptoDropdown @coinChanged="setTransferFrom" />
    </div>
    <div class="form-group my-3">
      <label for="" class="small text-white opacity-50 d-block mb-2">Destination Address</label>
      <div class="input-group bt-input-group mb-3">
        <input type="text" class="form-control" v-model="payload.walletAddress" />
      </div>
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
      <button type="submit" class="bt-button bt-button--primary w-100" :disabled="isLoading" @click="transferToken"
        v-else>
        Send <span class="material-symbols-outlined ms-2"> send_money </span>
        <Spinner v-if="isLoading" />
      </button>
    </div>
  </div>
</template>

<script>
import { ref, reactive } from "vue";
import Web3Modal from "./Web3Modal.vue";
import { sendTransaction, waitForTransactionReceipt, readContract } from '@wagmi/core'
import { config } from "@/helpers/wagmiConfig";
import { toast } from 'vue3-toastify';

export default {
  name: "SendCoins",
  components: {
    Web3Modal,
  },
  setup() {
    const transferFrom = ref(null);
    const walletAddress = ref("");
    const setTransferFrom = (coin) => {
      transferFrom.value = coin;
    };
    const isLoading = ref(false);
    const walletConnected = ref(false);
    const payload = reactive({
      walletAddress: "0xd6bad0F747eA8DEf7Ea3f36af047Ed0E81ED9533",
      amount: "",
    });


    const readTokenInfo = async (smartContract) => {
      const info = await readContract(config, { abi, address: smartContract, functionName: 'decimals' })
      console.log(info)
    }


    const transferToken = async () => {
      try {

        const result = await sendTransaction(config, {
          to: payload.walletAddress,
          value: `${payload.amount * (10 ** 18)}`
        })
        const wait = waitForTransactionReceipt(config, { hash: result })

        toast.info('Waiting for transaction to complete!')
        // alert('Waiting for transaction to complete!')
        console.log({ result })
        await wait
        toast.success(`Transction sent successfully!: ${result}`)
        // alert('Transction sent successfully!')
        console.log({ result })
      } catch (error) {
        toast.error(error.message)
      }
    }
    const handleWalletConnected = (data) => {
      walletConnected.value = true;
    };
    const handleWalletDisconnected = (data) => {
      walletConnected.value = false;
    };
    return {
      isLoading,
      walletConnected,
      payload,
      transferToken,
      setTransferFrom,
      handleWalletConnected,
      handleWalletDisconnected,
    };
  },
};
</script>

<style></style>
