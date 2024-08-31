import { mount } from '@vue/test-utils'
import { describe, it, expect, beforeEach } from 'vitest'
import InputField from '@/components/InputField.vue'

describe('InputField.vue', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mountWrapper()
  })
  it('inicializa com input vazio', () => {})

  it.skip('atualiza o valor do input quando o usuário digita', async () => {
    const input = wrapper.find('input')
    await input.setValue('Teste')
    // expect(input.element.value).toBe()
    // expect(wrapper.find().text()).toContain()
  })

  it('emite o evento "input" com o valor correto', async () => {})
})
function mountWrapper() {
  return mount(InputField)
}
