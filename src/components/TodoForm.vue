<template>
  <form action v-on:submit.prevent="onSubmit">
    <input type="text" v-model="title" />
    <input type="submit" />
  </form>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      title: ""
    };
  },
  methods: {
    ...mapActions(["createTask"]),
    onSubmit() {
      if (this.title.trim()) {
        const newTask = {
          id: Date.now(),
          title: this.title,
          completed: false
        };
        this.createTask(newTask);
      }
      console.log(this.title);
      this.title = "";
    }
  }
};
</script>

<style>
input[type="text"] {
  width: 40%;
  font-size: 20px;
  margin: 10px 20px;
}
</style>