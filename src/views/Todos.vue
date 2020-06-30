<template>
  <div>
    <router-link to="/">Home</router-link>
    <TodoForm />
    <TodoManager />
  </div>
</template>

<script>
import TodoManager from "../components/TodoManager";
import TodoForm from "../components/TodoForm";

export default {
  components: {
    TodoManager,
    TodoForm
  }
};
</script>