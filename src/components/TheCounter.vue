<template>
  <div class="counter-container d-flex align-center justify-space-between">
    <button @click="decrement" class="button bg-error" :class="count > 0 ? '' : 'disabled'">
      Decrementar
    </button>
    <p class="text-h5">Contador: {{ count }}</p>
    <button @click="increment" class="button bg-success">Incrementar</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const count = ref(0)
function increment() {
  count.value++
}
function decrement() {
  if (count.value > 0) {
    count.value--
  }
}
</script>

<style scoped>
.counter-container {
  text-align: center;
  font-family: Arial, sans-serif;
}

.button {
  margin: 5px;
  padding: 10px 20px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.button:hover {
  background-color: #2980b9;
}
</style>
