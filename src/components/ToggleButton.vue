<template>
  <div class="toggle-container">
    <button
      @click="toggle"
      :class="{ 'bg-success': isActive, 'bg-error': !isActive }"
      class="toggle-button"
    >
      {{ isActive ? 'Ativo' : 'Inativo' }}
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: false
    }
  },
  methods: {
    toggle() {
      this.isActive = !this.isActive
    }
  }
}
</script>

<style scoped>
.toggle-container {
  text-align: center;
  font-family: Arial, sans-serif;
}

.toggle-button {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: white;
  font-weight: bold;
}

.toggle-button:hover {
  opacity: 0.8;
}
</style>
