<template>
  <div class="mx-1">
    <div
      class="bt-spinner"
      :class="{
        'bt-spinner--button': variant == 'button',
        'bt-spinner--layout': variant == 'layout',
        'bt-spinner--dark': variant == 'dark',
        'bt-spinner--center': position == 'center',
        'bt-spinner--small': isSmall,
      }"
    ></div>
    <div
      class="mt-4 text-center text--secondary text__body--smaller"
      v-if="hasMessage"
    >
      {{ message }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Spinner",
  props: {
    hasMessage: {
      type: Boolean,
      default: false,
    },
    variant: {
      type: String,
      default: "button",
    },
    isSmall: {
      type: Boolean,
      default: false,
    },
    message: {
      type: String,
      default: "Loading",
    },
    position: {
      type: String,
      default: "center",
    },
  },
};
</script>

<style>
.bt-spinner {
  width: 20px;
  height: 20px;
  border: 1px solid #fff;
  border-radius: 50%;
  animation: spin 0.3s ease-in-out infinite;
}
.bt-spinner.bt-spinner--button {
  border-top: 1px solid transparent;
}
.bt-spinner.bt-spinner--layout {
  width: 40px;
  height: 40px;
  border-top: 1px solid var(--primary-color);
}
.bt-spinner.bt-spinner--dark {
  width: 40px;
  height: 40px;
  border-top: 1px solid #1c1c1c;
}
.bt-spinner.bt-spinner--small {
  width: 20px;
  height: 20px;
}
.bt-spinner.bt-spinner--center {
  margin: 0 auto;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
