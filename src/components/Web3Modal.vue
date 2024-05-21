<template>
  <div>
    <button type="button" @click="modal.open()" class="bt-button bt-button--primary w-100"
      v-if="!connectionData.connected">
      Connect Wallet
    </button>
  </div>
</template>

<script setup>
import { reactive, watch } from "vue";
import { projectId, config, chains } from "@/helpers/wagmiConfig";
import {
  createWeb3Modal,
  useWeb3Modal,
  useWeb3ModalEvents,
} from "@web3modal/wagmi/vue";
import { reconnect } from "@wagmi/core";
const emit = defineEmits(["walletConnected", "walletDisconnected"]);
const connectionData = reactive({
  connected: false,
});
try {
  // console.log(connectionData)
  // reconnect(config);
} catch (error) {

}
createWeb3Modal({
  wagmiConfig: config,
  projectId,
  chains,
  themeMode: "dark",
  themeVariables: {
    "--w3m-color-mix": "#1e65aa",
    "--w3m-color-mix-strength": 20,
  },
});
const modal = useWeb3Modal();
const events = useWeb3ModalEvents();
const handleWalletConnected = () => {
  connectionData.connected = true;
  emit("walletConnected", "Event payload");
};
const handleWalletDisconnected = () => {
  connectionData.connected = false;
  emit("walletConnected", "Event payload");
};
watch(
  events,
  (newValue, oldValue) => {
    const EVENT = newValue.data.event;
    switch (EVENT) {
      case "CONNECT_SUCCESS":
        return handleWalletConnected();
        break;
      case "DISCONNECT_SUCCESS":
        return handleWalletDisconnected();
        break;

      default:
        break;
    }
  },
  { deep: true }
);
</script>
