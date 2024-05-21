<template>
  <div class="container py-5">
    <div class="row">
      <div class="col-lg-6">
        <div class="mb-4">
          <img src="@/assets/images/logo.png" class="bt-brand-logo" alt="" />
        </div>
        <h1 class="bt-h4 text-white">
          Swap coins with ease or send
          <span class="opacity-50"
            >between your favourite crypto currencies</span
          >
        </h1>
        <div class="bt-form-wrapper my-4 p-4">
          <Header />
          <router-view v-slot="{ Component }">
            <transition name="fade" mode="out-in">
              <component :is="Component" />
            </transition>
          </router-view>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
export default {
  components: {
    Header,
  },
};
</script>
