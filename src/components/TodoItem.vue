<template>
  <li>
    <input type="checkbox" v-bind="{checked : task.completed}" v-on:change="completeTask(task.id)" />
    <strong v-bind:class="{done : task.completed}">{{task.title}}</strong>
    <button v-on:click="deleteTask(task.id)">&times;</button>
  </li>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: ["task"],
  methods: {
    ...mapActions(["deleteTask", "completeTask"])
  }
};
</script>

<style scoped>
li {
  display: flex;
  justify-content: space-between;
  align-self: center;
  width: 60%;
  list-style-type: none;
  padding: 20px;
  margin: 5px 0;
  border: 2px solid #142156;
}

button {
  position: relative;
  background-color: #ff003f;
  border: 0;
  color: #fff;
}

button:hover::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.05;
}

.done {
  text-decoration: line-through;
}
</style>