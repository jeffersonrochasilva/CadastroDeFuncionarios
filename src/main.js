import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import TableFuncionarios from "@/components/commom/TableFuncionarios.vue";
import Footer from "@/components/commom/Footer";
import ModalCadastro from "@/components/commom/ModalCadastro";

Vue.config.productionTip = false;
Vue.component("Table", TableFuncionarios);
Vue.component("Footer", Footer);
Vue.component("ModalCadastro", ModalCadastro);

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
