<template>
  <div class="login">
    <div class="login__chip">
      <v-chip class="login__chip__etiqueta" v-if="usuario.length > 0">
        <p>{{ logado }}</p>
      </v-chip>
    </div>

    <Login />
    <div class="login__tabela">
      <div v-if="mostrar" class="login__tabela__let">
        <span>nomes cadastrados</span>
        <div v-for="item in usuario" :key="item.id">
          <p>{{ item.name }}</p>
        </div>
      </div>
      <Table v-if="mostrar" />
    </div>
  </div>
</template>

<script>
import Login from "@/components/Login";

export default {
  components: {
    Login,
  },
  computed: {
    logado() {
      return this.$store.state.usuario;
    },
    chip1() {
      return this.$store.state.chip1;
    },
    mostrar() {
      return this.$store.state.mostrar;
    },
    usuario() {
      return this.$store.state.logado;
    },
  },
};
</script>
<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100%;
  background: #303030;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  &__chip {
    width: 90%;
    height: 3%;
    display: flex;
    justify-content: flex-end;
    &__etiqueta {
      p {
        font-family: sans-serif;
      }
    }
  }
  &__tabela {
    width: 90%;
    height: 40%;
    display: flex;
    justify-content: space-between;
    &__let {
      width: 30%;
      height: 100%;
      background: #fff;
      border-radius: 12px;
      margin-right: 3%;
      box-shadow: 0 12px 15px rgba(238, 30, 30, 0.918);
      display: block;
      overflow-x: scroll;
      scroll-behavior: smooth;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      span {
        font-family: sans-serif;
        font-size: 24px;
        margin: 10px;
        text-align: center;
      }
      p {
        font-family: sans-serif;
      }
    }
  }
}
</style>
