<template>
  
</template>

<script>
export default {
    name: "get-all-students",
    data() {
        return {
            students: []
        }
    },
    async created() {
        const response = await fetch("http://localhost:3000/student")
        const data = await response.json()
        this.students = data
    }
}
</script>

<style>

</style>