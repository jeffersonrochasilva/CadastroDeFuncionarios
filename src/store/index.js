import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    statusSnackbar: false,
    messaSnackbar: "",
    usuario: "",
    chip1: false,
    mostrar: false,
    logado: [
      { id: 1, name: "jefferson" },
      { id: 2, name: "Maria" },
      { id: 3, name: "josé" },
      { id: 4, name: "Mario" },
      { id: 5, name: "Gustavo" },
      { id: 6, name: "Jurema" },
      { id: 7, name: "Matheus" },
    ],
  },
  mutations: {
    usuario(state, payload) {
      state.usuario = payload;
    },
    mostrarTable(state, payload) {
      state.mostrar = payload;
    },
    getlogado(state, payload) {
      state.chip1 = payload;
    },
    mutMessaSnackbar(state, payload) {
      state.messaSnackbar = payload;
    },
    mutStatusSnackbar(state, payload) {
      state.statusSnackbar = payload;
    },
  },
  actions: {},
  getters: {
    getLogs(state) {
      return state.logado;
    },
  },
});
