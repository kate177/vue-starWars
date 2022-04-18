<template>
  <div :class="['isSmall' ? 'small' : 'large', 'loader']"></div>
</template>

<script>
export default {
  name: "Loader",
};
</script>

<style lang="scss">
.small {
  width: 64px;
  height: 64px;
  border: 8px solid;
  position: absolute;
  top: 55%;
  left: 45%;
  transform: translate(-50%, -50%);
}

.loader {
  border-top-color: #00644f;
  border-right-color: var(--loader-border-color);
  border-bottom-color: #00644f;
  border-left-color: var(--loader-border-color);
  border-radius: 50%;
  animation: spin 1s linear infinite;
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
