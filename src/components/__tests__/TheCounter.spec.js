import { mount } from '@vue/test-utils'
import { describe, it, expect, beforeEach } from 'vitest'
import TheCounter from '@/components/TheCounter.vue'

describe('TheCounter.vue', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mountWrapper()
  })
  it('inicializa com valor zero', () => {
    // expect(wrapper.find('').text()).toContain('')
  })

  it('decrementa o valor quando o botão de decrementar é clicado', async () => {})
  it('incrementa o valor quando o botão de incrementar é clicado', async () => {})
  it('não decrementa o valor quando o botão de decrementar é clicado e o contador é 0', async () => {})
})
function mountWrapper() {
  return mount(TheCounter)
}
