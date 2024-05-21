<template>
  <div>
    <div class="dropdown bt-dropdown">
      <a
        class="bt-dropdown-input dropdown-toggle d-flex justify-content-between"
        href="#"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <div class="d-flex align-items-center">
          <div class="me-3" v-if="activeCoin">
            <img :src="activeCoin.iconUri" class="bt-coin-logo" alt="" />
          </div>
          {{ activeCoin ? activeCoin.name : "Select Coin" }}
        </div>
        <span class="material-symbols-outlined"> expand_more </span>
      </a>

      <ul class="dropdown-menu">
        <li
          v-for="coin in cryptoList"
          :key="coin.symbol"
          @click="setActiveCoin(coin)"
        >
          <a
            class="dropdown-item d-flex align-items-center"
            href="javascript:void(0)"
            :class="{
              'is--active': activeCoin && activeCoin.symbol == coin.symbol,
            }"
          >
            <div class="me-3">
              <img :src="coin.iconUri" class="bt-coin-logo" alt="" />
            </div>
            <div>
              <span class="d-block">{{ coin.name }}</span>
              <span class="d-block">{{ coin.symbol }}</span>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import coinList from "@/helpers/coinList";
import { ref, reactive, computed } from "vue";
export default {
  name: "CryptoDropdown",
  props: {
    excludedCoin: {
      type: Object,
    },
  },
  setup(props, { emit }) {
    const cryptoList = ref(coinList);
    const activeCoin = ref(null);
    const setActiveCoin = (coin) => {
      activeCoin.value = coin;
      emit("coinChanged", coin);
    };
    const filteredCryptoList = computed(() => {
      return cryptoList.value.filter(
        (coin) => coin.symbol !== props.excludedCoin?.symbol
      );
    });

    return {
      cryptoList: filteredCryptoList,
      activeCoin,
      setActiveCoin,
    };
  },
};
</script>

<style></style>
