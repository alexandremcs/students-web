<template>
  <div class="side-bar">
    <nav>
      <RouterLink to="/">
        <button class="btn btn-primary">Home</button>
      </RouterLink>
      <RouterLink to="/addstudent">
        <button class="btn btn-primary">Adicionar Estudante</button>
      </RouterLink>
    </nav>

    <footer v-if="this.$cookies.get('accessToken') == null">
      <div class="footer-content">
        <RouterLink to="/signup">
          <button class="btn btn-primary btn-sm sign">Cadastrar</button>
        </RouterLink>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="#FFF"
          class="bi bi-person-bounding-box user-svg"
          viewBox="0 0 16 16"
        >
          <path
            d="M1.5 1a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-1 0v-3A1.5 1.5 0 0 1 1.5 0h3a.5.5 0 0 1 0 1h-3zM11 .5a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 1 16 1.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5zM.5 11a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 1 0 1h-3A1.5 1.5 0 0 1 0 14.5v-3a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 .5-.5z"
          />
          <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
        </svg>
        <RouterLink to="/signin">
          <button type="button" class="btn btn-success btn-sm sign">Acessar</button>
        </RouterLink>
      </div>
    </footer>
    <footer v-else>
      <div class="footer-content">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="#FFF"
          class="bi bi-person-bounding-box user-svg"
          viewBox="0 0 16 16"
        >
          <path
            d="M1.5 1a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-1 0v-3A1.5 1.5 0 0 1 1.5 0h3a.5.5 0 0 1 0 1h-3zM11 .5a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 1 16 1.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5zM.5 11a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 1 0 1h-3A1.5 1.5 0 0 1 0 14.5v-3a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 .5-.5z"
          />
          <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
        </svg>
        <p>Olá, usuário!</p>
        <a v-on:click="signOut()" class="signout">Sair</a>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  methods: {
    signOut() {
      this.$cookies.remove("accessToken");
      this.$cookies.remove("refreshToken");
      window.location.href = "http://127.0.0.1:5173/"
    },
  },
};
</script>

<style scoped>
.side-bar {
  position: absolute;
  width: 240px;
  background-color: #003663;
  box-shadow: 0 12px 24px 0 rgba(16, 16, 16, 0.5);
}

nav {
  display: flex;
  flex-direction: column;
  text-align: center;
  padding-top: 20px;
}

button {
  margin-bottom: 10px;
  width: 140px;
}

.sign {
  width: 80px;
}

footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 70px;
  background-color: #002241;
}

.footer-content {
  display: flex;
  padding-top: 20px;
  justify-content: space-around;
  height: 100%;
  width: 220px;
  margin-left: 10px;
}

.user-svg {
  margin-top: 5px;
}

.signout{
  cursor: pointer;
  text-decoration: none;
  color: #fff;
}

.signout:hover{
  color: #00ccff;
}

</style>