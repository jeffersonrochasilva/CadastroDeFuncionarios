<template>
  <div class="tabela">
    <div class="tabela__center">
      <div class="tabela__center__header">
        <p>nome</p>
        <p style="margin-left: 0px;">numOs</p>
        <p style="margin-left: 0px;">E-mail</p>
        <p style="margin-left: 0px;">ontratação</p>
        <p style="margin-left: 0px;">Funçao</p>
        <p style="justify-content: flex-start; width: 5%">id</p>
      </div>
      <div
        v-for="(item, i) in dados"
        :key="i"
        class="tabela__center__funcionarios"
      >
        <div style="justify-content: flex-start;">
          <p>{{ item.nome }}</p>
        </div>
        <div>
          <p>{{ item.numOs }}</p>
        </div>
        <div>
          <p>{{ item.email }}</p>
        </div>
        <div>
          <p>{{ item.contratacao }}</p>
        </div>
        <div>
          <p>{{ item.funcao }}</p>
        </div>
        <div style="width: 200px;">
          <p>{{ item.id }}</p>
        </div>
        <img src="@/assets/excluir.svg" @click="apagar($event, item.id)" />
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      dados: [],
      dialog: false,
    };
  },

  mounted() {
    this.carregarDados();
  },
  methods: {
    async carregarDados() {
      const { data } = await axios.get("http://localhost:3000/clientes");
      this.dados = data;
    },
    async apagar(e, id) {
      e.preventDefault();
      const { data } = await axios.delete(
        `http://localhost:3000/clientes/${id}`
      );
      this.carregarDados();
    },
    deslogar() {
      this.$router.push("/table");
    },
  },
};
</script>

<style lang="scss" scoped>
.tabela {
  width: 1140px;
  max-width: 1140px;
  background: #fff;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0px 12px 15px rgba(238, 30, 30, 0.918);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  /* display: block; */
  overflow-y: scroll;
  scroll-behavior: smooth;
  &__center {
    width: 100%;
    &__header {
      width: 100%;
      min-height: 35px;
      margin-bottom: 20px;
      /* padding-right: 40px;
    padding-left: 70px; */
      display: flex;
      justify-content: space-between;
      align-items: center;
      p {
        width: 16.66%;
        font-family: sans-serif;
        display: flex;
        justify-content: center;

        font-size: 24px;
        text-align: center;
      }
    }
    &__funcionarios {
      width: 100%;
      display: flex;
      align-items: center;
      background: #fff;
      border-radius: 12px;
      margin: 10px 5px;
      box-shadow: 0px 12px 15px rgba(151, 163, 193, 0.1);
      justify-content: space-around;
      div {
        width: 70%;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        p {
          font-family: sans-serif;
        }
      }
      button {
        /* width: 10px; */
        border: 1px solid #303030;
      }
    }
    button {
      width: 30%;
      height: 30px;
      border-radius: 4px;
      margin-top: 20px;
      border: 2px solid #e72020;
      color: #e72020;
    }
  }
}
</style>
