<template>
  <div>
    <ul v-if="allTasks.length">
      <TodoItem v-for="task of allTasks" v-bind:key="task.id" v-bind:task="task"></TodoItem>
    </ul>
    <h3 v-else>Tasks not found</h3>
  </div>
</template>

<script>
import TodoItem from "./TodoItem";
import { mapGetters, mapActions } from "vuex";

export default {
  components: { TodoItem },
  computed: {
    ...mapGetters(["allTasks"])
  },
  methods: {
    ...mapActions(["fetchTasks"]),
    removeTask(id) {
      this.$emit("remove-task", id);
    },
    completedTask(id) {
      this.$emit("completed-task", id);
    }
  },
  async mounted() {
    this.fetchTasks(4);
  }
};
</script>

<style scoped>
ul {
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
}
</style>