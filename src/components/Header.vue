<template>
  <div class="bt-header-nav d-flex align-items-center">
    <router-link to="/swap" class="bt-header-nav__link"
      >Swap
      <span class="material-symbols-outlined ms-2">
        swap_vert
      </span></router-link
    >
    <div class="mx-2"></div>
    <router-link to="/send" class="bt-header-nav__link"
      >Send
      <span class="material-symbols-outlined ms-2">
        send_money
      </span></router-link
    >
  </div>
</template>

<script>
export default {};
</script>

<style>
.bt-header-nav {
  border-bottom: 2px solid rgba(255, 255, 255, 0.1);
  margin-bottom: 2rem;
}
.bt-header-nav .bt-header-nav__link {
  font-size: 1rem;
  color: var(--primary-white);
  display: flex;
  align-items: center;
  text-decoration: none;
  opacity: 0.5;
  padding: 1rem 0;
  border-bottom: 2px solid transparent;
}
.bt-header-nav .bt-header-nav__link.router-link-exact-active {
  opacity: 1;
  color: var(--primary-color);
  border-color: var(--primary-color);
}
</style>
