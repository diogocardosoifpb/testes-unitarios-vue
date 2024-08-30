import { mount } from '@vue/test-utils'
import { describe, it, expect, beforeEach, vi } from 'vitest'
import InputField from '@/components/InputField.vue'

describe('InputField.vue', () => {
  beforeEach(() => {
    vi.resetAllMocks()
  })
  it('inicializa com input vazio', () => {
    const wrapper = mount(InputField)
    expect(wrapper.find('input').element.value).toBe('')
  })

  it('atualiza o valor do input quando o usuário digita', async () => {
    const wrapper = mount(InputField)
    const input = wrapper.find('input')
    await input.setValue('Teste')
    expect(input.element.value).toBe('Teste')
    expect(wrapper.text()).toContain('Você digitou: Teste')
  })

  it('emite o evento "input" com o valor correto', async () => {
    const wrapper = mount(InputField)
    const input = wrapper.find('input')
    await input.setValue('Evento')
    expect(wrapper.emitted('input')[0]).toEqual(['Evento'])
  })
})
