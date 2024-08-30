<template>
  <div v-if="isVisible" class="dialog-overlay" @click.self="close">
    <div class="dialog-box">
      <header class="dialog-header">
        <h2>{{ title }}</h2>
        <button @click="close" class="close-button">&times;</button>
      </header>
      <section class="dialog-body">
        <slot class="message">{{ message }}</slot>
      </section>
      <footer class="dialog-footer">
        <button @click="close" class="button">Fechar</button>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DialogBox',
  props: {
    isVisible: {
      type: Boolean,
      required: true
    },
    title: {
      type: String,
      default: 'Título do Diálogo'
    },
    message: {
      type: String,
      default: 'Conteúdo do diálogo aqui.'
    }
  },
  methods: {
    close() {
      this.$emit('close')
    }
  }
}
</script>

<style scoped>
.dialog-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.dialog-box {
  background-color: white;
  width: 80%;
  max-width: 500px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}

.dialog-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #3498db;
  color: white;
}

.close-button {
  background: none;
  border: none;
  font-size: 1.5rem;
  color: white;
  cursor: pointer;
}

.dialog-body {
  padding: 20px;
}

.dialog-footer {
  padding: 10px;
  text-align: right;
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
