export default {
  install(Vue) {
    Vue.prototype.$load = async (action) => {
      try {
        await action();
      } catch (error) {
        alert("данные с сревера не поступили");
      }
    };
  },
};
