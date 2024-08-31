import { mount } from '@vue/test-utils'
import { describe, it, expect, beforeEach } from 'vitest'
import ToggleButton from '@/components/ToggleButton.vue'

describe('ToggleButton.vue', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mountWrapper()
  })
  it('inicializa como "Inativo"', () => {
    expect(wrapper.find('button').text()).toBe('Inativo')
  })

  it('alterna para "Ativo" quando clicado', async () => {})

  it('alterna para "Inativo" quando clicado novamente', async () => {})
})
function mountWrapper() {
  return mount(ToggleButton)
}
