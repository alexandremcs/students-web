<template>
  <div class="form-container">
    <h3>Adicionar Estudante</h3>
    <form @submit.prevent="addStudent">
      <div class="mb-3">
        <label for="inputName" class="form-label">Nome</label>
        <input type="text" class="form-control" id="inputName" v-model="studentName" required />
      </div>
      <div class="mb-3">
        <label for="inputCourse" class="form-label">Curso</label>
        <input type="text" class="form-control" id="inputCourse" v-model="studentCourse" required />
      </div>
      <div class="mb-3">
        <label for="inputAge" class="form-label">Idade</label>
        <input type="text" class="form-control" id="inputAge" v-model="studentAge" required />
      </div>
      <div class="mb-3">
        <label for="inputRegistration" class="form-label">Matrícula</label>
        <input
          type="text"
          class="form-control"
          id="inputRegistration"
          v-model="studentRegistration"
          required
        />
      </div>
      <button type="submit" class="btn btn-primary">Adicionar</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      studentName: null,
      studentCourse: null,
      studentAge: null,
      studentRegistration: null,
    };
  },
  methods: {
    addStudent() {
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.$cookies.get("accessToken")}`,
        },
        body: JSON.stringify({
          name: this.studentName,
          course: this.studentCourse,
          age: this.studentAge,
          registration: this.studentRegistration,
        }),
      };

      fetch("http://localhost:3000/student", requestOptions)
        .then((response) => {
          response.json();
          alert("Estudante adicionado com sucesso!")
          this.studentName = null;
          this.studentCourse = null;
          this.studentAge = null;
          this.studentRegistration = null;
        })
        .catch((error) => console.log(error));
    },
  },
};
</script>

<style scoped>
.form-container {
  position: relative;
  margin-top: 10%;
  margin-left: 30%;
  width: 600px;
}
</style>