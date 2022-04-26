<template>
  <div class="cadastro">
    <span>Cadastro de funcionarios</span>
    <input type="text" v-model="nome" placeholder="Digite seu nome" />
    <input type="e-mail" v-model="email" placeholder="Digite seu E-mail" />
    <input
      type="text"
      v-model="contratacao"
      placeholder="Digite seu ano de contratação"
    />
    <input type="password" v-model="senha" placeholder="Digite seu senha" />
    <button @click="cadastrar">Enttrar</button>
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
      contratacao: "",
    };
  },

  methods: {
    async cadastrar() {
      const arr = await axios.post("http://localhost:3000/clientes", {
        nome: this.nome,
        email: this.email,
        senha: this.senha,
        contratacao: this.contratacao,
      });
      alert("Funcionario cadastrado !");
      this.nome = "";
      this.email = "";
      this.senha = "";
      this.$router.push("/");
    },
  },
};
</script>

<style lang="scss">
.cadastro {
  width: 600px;
  height: 300px;
  border-radius: 5px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  background: #fff;
  span {
    color: #000;
    font-size: 22px;
    font-style: sans-serif;
  }
  input {
    width: 80%;
    height: 10%;
    border: 1px solid #303030;
    text-align: center;
    border-radius: 4px;
  }
  button {
    width: 30%;
    height: 10%;
    border-radius: 4px;
    border: 1px solid #462e2e;
  }
}
</style>
