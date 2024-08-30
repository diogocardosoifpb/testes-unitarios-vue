<template>
  <div class="input-container">
    <input v-model="inputValue" @input="emitInput" class="input" placeholder="Digite algo" />
    <p>Você digitou: {{ inputValue }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputValue: ''
    }
  },
  methods: {
    emitInput() {
      this.$emit('input', this.inputValue)
    }
  }
}
</script>

<style scoped>
.input-container {
  text-align: center;
  font-family: Arial, sans-serif;
}

.input {
  padding: 10px;
  width: 80%;
  max-width: 300px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
}

.input:focus {
  outline: none;
  border-color: #3498db;
}
</style>
