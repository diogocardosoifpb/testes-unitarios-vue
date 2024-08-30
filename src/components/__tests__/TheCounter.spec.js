import { mount } from '@vue/test-utils'
import { describe, it, expect, beforeEach } from 'vitest'
import TheCounter from '@/components/TheCounter.vue'

describe('TheCounter.vue', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mountWrapper()
  })
  it('inicializa com valor zero', () => {
    expect(wrapper.text()).toContain('Contador: 0')
  })

  it('decrementa o valor quando o botão de decrementar é clicado', async () => {
    const decrementButton = wrapper.find('button:nth-of-type(1)')
    await decrementButton.trigger('click')
    expect(wrapper.text()).toContain('Contador: 0')
  })
  it('incrementa o valor quando o botão de incrementar é clicado', async () => {
    const incrementButton = wrapper.find('button:nth-of-type(2)')
    await incrementButton.trigger('click')
    expect(wrapper.text()).toContain('Contador: 1')
  })
})
function mountWrapper() {
  return mount(TheCounter)
}
