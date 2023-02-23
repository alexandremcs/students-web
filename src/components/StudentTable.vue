<template>
  <div class="students-list">
    <div class="">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nome</th>
            <th scope="col">Curso</th>
            <th scope="col">Idade</th>
            <th scope="col">Matrícula</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in items">
            <th scope="row">{{ items.indexOf(item) + 1 }}</th>
            <td>{{ item.name }}</td>
            <td>{{ item.course }}</td>
            <td>{{ item.age }}</td>
            <td>{{ item.registration }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          name: "Bob",
          course: "Computer Science",
          age: 35,
          registration: 10050,
        },
        {
          name: "Alice",
          course: "Biology",
          age: 25,
          registration: 10051,
        },
        {
          name: "Mike",
          course: "Astrophysics",
          age: 22,
          registration: 10052,
        },
        {
          name: "Ada",
          course: "Mathematics",
          age: 21,
          registration: 10053,
        },
        {
          name: "John",
          course: "Medicine",
          age: 39,
          registration: 10054,
        },
      ],
    };
  },
};
</script>

<style scoped>
.students-list {
  background-color: blue;
}
</style>