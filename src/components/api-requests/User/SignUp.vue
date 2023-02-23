<template>
  <div class="form-container">
    <form @submit.prevent="signUp">
      <div class="mb-3">
        <label for="inputUsername" class="form-label">Username</label>
        <input type="text" class="form-control" id="inputUsername" v-model="username" required />
      </div>
      <div class="mb-3">
        <label for="inputPassword" class="form-label">Password</label>
        <input type="password" class="form-control" id="inputPassword" v-model="password" required />
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: null,
      password: null
    };
  },
  methods: {
    signUp() {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: this.username, password: this.password }),
      };

      fetch("http://localhost:3000/user/signup", requestOptions)
        .then((response) => response.json())
        .then((data) => console.log(data));
    },
  },
};
</script>

<style>
.form-container {
  width: 300px;
}
</style>