<template>
  <div class="cadastro">
    <span>Login de funcionario</span>
    <div class="cadastro__filtro">
      <input type="e-mail" v-model="email" placeholder="Digite seu E-mail" />
      <input type="taxt" v-model="funcao" placeholder="Digite sua função" />
      <input type="password" v-model="senha" placeholder="Digite seu senha" />
    </div>
    <div class="cadastro__button">
      <button @click="cadastrar">Enttrar</button
      ><button @click="cada">Cadastrar</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      nome: "",
      email: "",
      senha: "",
      funcao: "",
    };
  },

  methods: {
    async cadastrar() {
      const { data } = await axios.get("http://localhost:3000/clientes", {
        params: {
          email: this.email,
          senha: this.senha,
          funcao: this.funcao,
        },
      });
      console.log(data);
      const num = data.map((i) => i.nome);
      const etiqueta = num.join("");
      await this.$store.commit("usuario", etiqueta);
      if (data.length > 0) {
        await this.$store.commit("mutMessaSnackbar", "Logando !");
        await this.$store.commit("mutStatusSnackbar", true);
        await this.$store.commit("mostrarTable", true);
      } else {
        await this.$store.commit("mutMessaSnackbar", "Dados não são corretos!");
        await this.$store.commit("mutStatusSnackbar", true);
      }
      this.funcao = "";
      this.email = "";
      this.senha = "";
    },
    cada() {
      this.$router.push("/home");
    },
  },
};
</script>

<style lang="scss">
.cadastro {
  width: 90%;
  min-height: 200px;
  border-radius: 5px;
  padding: 1% 5% 1% 5%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  background: #fff;
  box-shadow: 0 4px 15px rgba(238, 30, 30, 0.918);
  &__filtro {
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    input {
      width: 30%;
      height: 40%;
      border: 1px solid #303030;
      text-align: center;
      border-radius: 4px;
      font-family: sans-serif;
    }
  }
  &__button {
    width: 30%;
    height: 20%;
    display: flex;
    justify-content: space-between;
    button {
      width: 40%;
      height: 100%;
      border-radius: 4px;
      box-shadow: 0 4px 5px rgba(238, 30, 30, 0.918);
      color: rgba(238, 30, 30, 0.918);
      border: 1px solid rgba(238, 30, 30, 0.918);
    }
  }
  span {
    color: #000;
    font-size: 22px;
    font-family: sans-serif;
    margin-left: 40%;
  }
}
</style>
