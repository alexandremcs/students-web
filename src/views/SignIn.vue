<template>
  <div class="form-container">
    <h3>Identificação do usuário</h3>
    <form @submit.prevent="signIn">
      <div class="mb-3">
        <label for="inputUsername" class="form-label">Username</label>
        <input type="text" class="form-control" id="inputUsername" v-model="username" required />
      </div>
      <div class="mb-3">
        <label for="inputPassword" class="form-label">Password</label>
        <input type="password" class="form-control" id="inputPassword" v-model="password" required />
      </div>
      <button type="submit" class="btn btn-primary">Acessar</button>
    </form>
  </div>
</template>

<script>
export default {
 
  data() {
    return {
      username: null,
      password: null,
    };
  },
  methods: {
    signIn() {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: this.username,
          password: this.password,
        }),
      };

      fetch("http://localhost:3000/user/signin", requestOptions)
        .then((response) => response.json())
        .then((data) => { 
          this.$cookies.set('accessToken', data.accessToken)
          this.$cookies.set('refreshToken', data.refreshToken)
          this.username = ''
          this.password = ''
          window.location.href = "http://127.0.0.1:5173/"
        })
        .catch(error => {
          console.log(error)
        })
    },
  },
};
</script>

<style scoped>
.form-container {
  position: absolute;
  top: calc(50% - 150px);
  left: calc(50%);
  text-align: center;
  width: 300px;
}
</style>