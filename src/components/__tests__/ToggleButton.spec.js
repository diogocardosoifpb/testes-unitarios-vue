import { mount } from '@vue/test-utils'
import { describe, it, expect, beforeEach } from 'vitest'
import ToggleButton from '@/components/ToggleButton.vue'

describe('ToggleButton.vue', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mountWrapper()
  })
  it('inicializa como "Inativo"', () => {
    expect(wrapper.text()).toBe('Inativo')
  })

  it('alterna para "Ativo" quando clicado', async () => {
    const button = wrapper.find('button')

    await button.trigger('click')
    expect(wrapper.text()).toBe('Ativo')
  })

  it('alterna para "Inativo" quando clicado novamente', async () => {
    const button = wrapper.find('button')

    await button.trigger('click')
    await button.trigger('click')
    expect(wrapper.text()).toBe('Inativo')
  })
})
function mountWrapper() {
  return mount(ToggleButton)
}
