<template>
  <div class="message-container">
    <button @click="toggleMessage" class="button">
      {{ showMessage ? 'Ocultar Mensagem' : 'Mostrar Mensagem' }}
    </button>
    <p v-if="showMessage" class="message py-2">Esta é uma mensagem condicional!</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showMessage: false
    }
  },
  methods: {
    toggleMessage() {
      this.showMessage = !this.showMessage
    }
  }
}
</script>

<style scoped>
.message-container {
  text-align: center;
  font-family: Arial, sans-serif;
}

.message {
  background-color: #3498db;
  color: #fff;
  border-radius: 5px;
  margin-bottom: 15px;
  margin-top: 15px;
}

.button {
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
