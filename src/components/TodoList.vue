<template>
  <div class="todo-container">
    <input v-model="newTask" class="input mr-3" placeholder="Nova tarefa" @keyup.enter="addTask" />
    <button @click="addTask" class="button rounded">
      <v-icon>mdi-plus</v-icon>
    </button>
    <ul class="task-list">
      <li v-for="(task, index) in tasks" :key="index" class="task-item">{{ task }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTask: '',
      tasks: []
    }
  },
  methods: {
    addTask() {
      if (this.newTask.trim()) {
        this.tasks.push(this.newTask)
        this.newTask = ''
      }
    }
  }
}
</script>

<style scoped>
.rounded {
  border-radius: 100% !important;
}
.todo-container {
  text-align: center;
  font-family: Arial, sans-serif;
}

.input {
  padding: 10px;
  width: 100%;
  max-width: 300px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
}

.button {
  padding: 10px;
  background-color: #2ecc71;
  color: white;
  border: none;
  cursor: pointer;
  margin-bottom: 15px;
}

.button:hover {
  background-color: #27ae60;
}

.task-list {
  list-style-type: none;
  padding: 0;
}

.task-item {
  padding: 10px;
  background-color: #ecf0f1;
  border-radius: 5px;
  margin-bottom: 5px;
}
</style>
