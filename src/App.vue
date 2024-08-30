<template>
  <v-container class="h-100">
    <v-row>
      <v-col cols="12">
        <h1 class="text-center">Minicurso Introdução a Testes Unitários</h1>
        <h4 class="text-center">Vue.js | Vitest</h4>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-row>
          <v-col cols="12">
            <v-card>
              <v-card-title>TheCounter.vue</v-card-title>
              <v-card-text>
                <TheCounter />
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-card>
              <v-card-title>InputField.vue</v-card-title>
              <v-card-text>
                <InputField />
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12">
            <v-card>
              <v-card-title>ToggleButton.vue</v-card-title>
              <v-card-text>
                <ToggleButton />
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-card>
              <v-card-title>ConditionalMessage.vue</v-card-title>
              <v-card-text>
                <ConditionalMessage />
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-card>
              <v-card-title>DialogBox.vue</v-card-title>
              <v-card-text class="d-flex justify-center">
                <button @click="openDialog" class="button">Abrir Diálogo</button>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="6">
        <v-card class="h-100">
          <v-card-title>TodoList.vue</v-card-title>
          <v-card-text>
            <TodoList />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <DialogBox :isVisible="isDialogVisible" title="Meu Diálogo Personalizado" @close="closeDialog">
      <p class="text-black">Este é um conteúdo personalizado passado através de um slot.</p>
    </DialogBox>
  </v-container>
</template>

<script>
import TheCounter from './components/TheCounter.vue'
import InputField from './components/InputField.vue'
import TodoList from './components/TodoList.vue'
import ToggleButton from './components/ToggleButton.vue'
import ConditionalMessage from './components/ConditionalMessage.vue'
import DialogBox from './components/DialogBox.vue'

export default {
  components: {
    TheCounter,
    InputField,
    TodoList,
    ToggleButton,
    ConditionalMessage,
    DialogBox
  },
  data() {
    return {
      isDialogVisible: false
    }
  },
  methods: {
    openDialog() {
      this.isDialogVisible = true
    },
    closeDialog() {
      this.isDialogVisible = false
    }
  }
}
</script>
<style>
.button {
  padding: 10px 20px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
