import { mount } from '@vue/test-utils'
import { describe, it, expect, beforeEach } from 'vitest'
import TodoList from '@/components/TodoList.vue'

describe('TodoList.vue', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mountWrapper()
  })
  it('inicializa com uma lista vazia', () => {})

  it.skip('adiciona uma nova tarefa à lista', async () => {
    const input = wrapper.find('')
    const addButton = wrapper.find('')
  })

  it('não adiciona tarefa se o input estiver vazio', async () => {})
})
function mountWrapper() {
  return mount(TodoList)
}
