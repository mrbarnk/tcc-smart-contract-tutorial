<template>
  <div>
    <div class="form-group my-3">
      <label for="" class="small text-white opacity-50 d-block mb-2"
        >Transfer From</label
      >
      <CryptoDropdown :excludedCoin="transferTo" @coinChanged="setTransferTo" />
    </div>
    <div class="form-group my-3">
      <label for="" class="small text-white opacity-50 d-block mb-2"
        >Transfer to</label
      >
      <CryptoDropdown
        :excludedCoin="transferFrom"
        @coinChanged="setTransferTo"
      />
    </div>
    <div class="form-group my-3">
      <label for="" class="small text-white opacity-50 d-block mb-2"
        >Amount</label
      >
      <div class="input-group bt-input-group mb-3">
        <input type="number" class="form-control" v-model="payload.amount" />
      </div>
    </div>
    <div class="mt-5">
      <Web3Modal
        v-if="!walletConnected"
        @walletConnected="handleWalletConnected"
        @walletDisconnected="handleWalletDisconnected"
      />
      <button
        type="submit"
        class="bt-button bt-button--primary w-100"
        :disabled="isLoading"
        v-else
      >
        Swap Tokens <span class="material-symbols-outlined"> swap_vert </span>
        <Spinner v-if="isLoading" />
      </button>
    </div>
  </div>
</template>

<script>
import { ref, reactive } from "vue";
import Web3Modal from "./Web3Modal.vue";
export default {
  name: "TransferCoins",
  components: {
    Web3Modal,
  },
  setup() {
    const transferTo = ref(null);
    const transferFrom = ref(null);
    const payload = reactive({
      amount: "",
    });
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
    return {
      isLoading,
      transferTo,
      transferFrom,
      walletConnected,
      payload,
      setTransferTo,
      setTransferFrom,
      handleWalletConnected,
      handleWalletDisconnected,
    };
  },
};
</script>

<style></style>
