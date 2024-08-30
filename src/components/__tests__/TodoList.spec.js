import { mount } from '@vue/test-utils'
import { describe, it, expect, beforeEach } from 'vitest'
import TodoList from '@/components/TodoList.vue'

describe('TodoList.vue', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mountWrapper()
  })
  it('inicializa com uma lista vazia', () => {
    expect(wrapper.findAll('li')).toHaveLength(0)
  })

  it('adiciona uma nova tarefa à lista', async () => {
    const input = wrapper.find('input')
    const addButton = wrapper.find('button')

    await input.setValue('Nova Tarefa')
    await addButton.trigger('click')

    expect(wrapper.findAll('li')).toHaveLength(1)
    expect(wrapper.text()).toContain('Nova Tarefa')
  })

  it('não adiciona tarefa se o input estiver vazio', async () => {
    const addButton = wrapper.find('button')

    await addButton.trigger('click')

    expect(wrapper.findAll('li')).toHaveLength(0)
  })
})
function mountWrapper() {
  return mount(TodoList)
}
