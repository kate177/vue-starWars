<template v-model="darkMode">
  <div class="header-switch" @click="onclickSwitch()">
    <img class="header-switch__moon" src="../assets/img/moon.png" />
    <img class="header-switch__sun" src="../assets/img/sun.png" />
    <div
      class="header-switch__circle"
      v-bind:class="{ 'active-switch': darkMode }"
    ></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      darkMode: false,
    };
  },
  methods: {
    onclickSwitch() {
      this.darkMode = !this.darkMode;
    },
  },
  mounted() {
    let htmlElement = document.documentElement;
    let theme = localStorage.getItem("theme");

    if (theme === "dark") {
      htmlElement.setAttribute("theme", "dark");
      this.darkMode = true;
    } else {
      htmlElement.setAttribute("theme", "light");
      this.darkMode = false;
    }
  },
  watch: {
    darkMode: function () {
      let htmlElement = document.documentElement;
      if (this.darkMode) {
        localStorage.setItem("theme", "dark");
        htmlElement.setAttribute("theme", "dark");
      } else {
        localStorage.setItem("theme", "light");
        htmlElement.setAttribute("theme", "light");
      }
    },
  },
};
</script>

<style lang="scss">
.header-switch {
  width: 51px;
  height: 28px;
  border: 1px solid #1e705f;
  border-radius: 70px;
  margin-right: 30px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  &__moon {
    width: 18px;
    height: 18px;
    margin: 5px 0px 5px 5px;
  }
  &__sun {
    width: 18px;
    height: 18px;
    margin: 5px 5px 5px 0px;
  }
  &__circle {
    position: absolute;
    margin-left: 0px;
    width: 25px;
    height: 26px;
    border-radius: 100px;
    background: #c4c4c4;
  }
}
.active-switch {
  margin-left: 26px;
}
@media screen and (max-width: 576px) {
  .header-switch {
    width: 41px;
    height: 20px;
    &__moon {
      width: 14px;
      height: 14px;
      margin: 3px 0px 3px 4px;
    }
    &__sun {
      width: 14px;
      height: 14px;
      margin: 3px 4px 3px 0px;
    }
    &__circle {
      width: 18.5px;
      height: 18.5px;
    }
    .active-switch {
      margin-left: 20.5px;
    }
  }
}
</style>
