<template>
  <div id="app">
    <router-view />
    <v-snackbar v-model="statusSnackbar">
      {{ messaSnackbar }}
    </v-snackbar>
    <ModalCadastro v-if="modal" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      mostrar: true,
      modal: true,
    };
  },
  computed: {
    statusSnackbar() {
      return this.$store.state.statusSnackbar;
    },
    messaSnackbar() {
      return this.$store.state.messaSnackbar;
    },
  },
};
</script>

<style scoped>
#app {
  background: #eaeaea;
  width: 100%;
  height: 100%;
}
</style>
