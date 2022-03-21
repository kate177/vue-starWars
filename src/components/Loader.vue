<template>
  <div :class="[isSmall ? 'small' : 'large', 'loader']"></div>
</template>

<script>
export default {
  name: 'Loader',
};
</script>


<style lang="scss">
.large {
  width: 64px;
  height: 64px;
  border: 8px solid;
  position: absolute;
  top: 55%;
  left: 45%;
  transform: translate(-50%, -50%);
}

.small {
  width: 16px;
  height: 16px;
  border: 2px solid;
  margin: 5px;
}

.loader {
  border-top-color: #00644F;
  border-right-color: #383838;
  border-bottom-color: #00644F;
  border-left-color: #383838;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>