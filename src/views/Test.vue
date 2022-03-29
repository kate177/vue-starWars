<template>
  <div></div>
</template>

<script>
export default {
  name: "Test",
  created() {
    this.$emit("pageNotFound", true);
  },
};
</script>
