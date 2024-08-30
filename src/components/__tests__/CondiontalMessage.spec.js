import { mount } from '@vue/test-utils'
import { describe, it, expect, beforeEach } from 'vitest'
import ConditionalMessage from '@/components/ConditionalMessage.vue'

describe('ConditionalMessage.vue', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mountWrapper()
  })
  it('não mostra a mensagem inicialmente', () => {
    expect(wrapper.text()).not.toContain('Esta é uma mensagem condicional!')
  })

  it('mostra a mensagem quando o botão é clicado', async () => {
    const button = wrapper.find('button')

    await button.trigger('click')
    expect(wrapper.find('p').text()).toContain('Esta é uma mensagem condicional!')
  })

  it('oculta a mensagem quando o botão é clicado novamente', async () => {
    const button = wrapper.find('button')

    await button.trigger('click')
    await button.trigger('click')
    expect(wrapper.text()).not.toContain('Esta é uma mensagem condicional!')
  })
})
function mountWrapper() {
  return mount(ConditionalMessage)
}
