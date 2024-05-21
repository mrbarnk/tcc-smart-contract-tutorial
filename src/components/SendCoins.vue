<template>
  <div>
    <div class="form-group my-3">
      <label for="" class="small text-white opacity-50 d-block mb-2"
        >Transfer From</label
      >
      <CryptoDropdown @coinChanged="setTransferFrom" />
    </div>
    <div class="form-group my-3">
      <label for="" class="small text-white opacity-50 d-block mb-2"
        >Destination Address</label
      >
      <div class="input-group bt-input-group mb-3">
        <input
          type="text"
          class="form-control"
          v-model="payload.walletAddress"
        />
      </div>
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
        Send <span class="material-symbols-outlined ms-2"> send_money </span>
        <Spinner v-if="isLoading" />
      </button>
    </div>
  </div>
</template>

<script>
import { ref, reactive } from "vue";
import Web3Modal from "./Web3Modal.vue";
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
      walletAddress: "",
      amount: "",
    });
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
      setTransferFrom,
      handleWalletConnected,
      handleWalletDisconnected,
    };
  },
};
</script>

<style></style>
