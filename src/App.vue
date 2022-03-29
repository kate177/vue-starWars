<template>
  <PageNotFound v-model="isNotFound">
    <div id="app" class="wrapper">
      <router-view />
    </div>
  </PageNotFound>
</template>

<script>
import PageNotFound from "@/views/404.vue";
export default {
  components: {
    PageNotFound,
  },
  data() {
    return {
      isNotFound: false,
    };
  },
};
</script>

<style lang="scss">
.wrapper {
  width: 1110px;
  height: 100%;
  margin: 0 auto;
  padding-bottom: 60px;
}
</style>
