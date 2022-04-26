<template>
  <div class="footer">
    <v-btn
      @click="deslogar"
      style="background:rgba(238, 30, 30, 0.918);color: white;"
      class="ma-0"
      outlined
      color="indigo"
    >
      Deslogar
    </v-btn>
    <v-btn
      style="background:white;color: red;"
      class="ma-0"
      outlined
      color="indigo"
      @click="dialog.value = true"
    >
      abrir
    </v-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  methods: {
    deslogar() {
      this.$router.push("/");
      this.$store.commit("mostrarTable", false);
    },
  },
};
</script>

<style lang="scss" scooped>
.footer {
  width: 100%;
  height: 40px;
  /* border: 1px solid rgb(223, 70, 70); */
  display: flex;
  justify-content: flex-end;
}
</style>
