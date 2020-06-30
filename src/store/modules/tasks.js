export default {
  actions: {
    async fetchTasks(ctx, limit = 5) {
      const res = await fetch(`https://jsonplaceholder.typicode.com/todos/?_limit=${limit}`)
      const tasks = await res.json()

      ctx.commit('updateTasks', tasks)
    },

    deleteTask(ctx, id) {
      const newTasks = ctx.state.tasks.filter(task => task.id != id);

      ctx.commit('updateTasks', newTasks)
    },

    completeTask(ctx, id) {
      const indexTask = ctx.state.tasks.findIndex(task => task.id == id);
      const completeTask = ctx.state.tasks[indexTask];
      completeTask.completed = !completeTask.completed;

      const newTasks = [
        ...ctx.state.tasks.slice(0, indexTask),
        completeTask,
        ...ctx.state.tasks.slice(indexTask + 1)
      ];

      ctx.commit('updateTasks', newTasks)
    },

    createTask(ctx, task) {
      const tasks = [...ctx.state.tasks];
      tasks.unshift(task);

      ctx.commit("updateTasks", tasks)
    }
  },
  mutations: {
    updateTasks(state, tasks) {
      state.tasks = tasks
    }
  },
  state: {
    tasks: []
  },
  getters: {
    allTasks(state) {
      return state.tasks
    }
  }
}
