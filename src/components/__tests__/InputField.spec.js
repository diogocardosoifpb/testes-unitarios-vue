import { mount } from '@vue/test-utils'
import { describe, it, expect, beforeEach } from 'vitest'
import InputField from '@/components/InputField.vue'

describe('InputField.vue', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mountWrapper()
  })
  it('inicializa com input vazio', () => {
    expect(wrapper.find('input').element.value).toBe('')
  })

  it('atualiza o valor do input quando o usuário digita', async () => {
    const input = wrapper.find('input')
    await input.setValue('Teste')
    expect(input.element.value).toBe('Teste')
    expect(wrapper.find('p').text()).toContain('Você digitou: Teste')
  })

  it('emite o evento "input" com o valor correto', async () => {
    const input = wrapper.find('input')
    await input.setValue('Evento')
    expect(wrapper.emitted('input')[0]).toEqual(['Evento'])
  })
})
function mountWrapper() {
  return mount(InputField)
}
