import { mount } from '@vue/test-utils'
import { describe, it, expect, beforeEach } from 'vitest'
import TheCounter from '@/components/TheCounter.vue'

describe('TheCounter.vue', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mountWrapper()
  })
  it('inicializa com valor zero', () => {
    expect(wrapper.find('.text-h5').text()).toContain('Contador: 0')
  })

  it('decrementa o valor quando o botão de decrementar é clicado', async () => {
    await wrapper.setData({ count: 1 })
    const decrementButton = wrapper.find('.bg-error')
    await decrementButton.trigger('click')
    expect(wrapper.find('.text-h5').text()).toContain('Contador: 0')
  })
  it('incrementa o valor quando o botão de incrementar é clicado', async () => {
    const incrementButton = wrapper.find('.bg-success')
    await incrementButton.trigger('click')
    expect(wrapper.find('.text-h5').text()).toContain('Contador: 1')
  })
  it('não decrementa o valor quando o botão de decrementar é clicado e o contador é 0', async () => {
    await wrapper.setData({ count: 0 })
    const decrementButton = wrapper.find('.bg-error')
    expect(wrapper.find('.text-h5').text()).toContain('Contador: 0')
    await decrementButton.trigger('click')
    expect(wrapper.find('.text-h5').text()).toContain('Contador: 0')
  })
})
function mountWrapper() {
  return mount(TheCounter)
}
