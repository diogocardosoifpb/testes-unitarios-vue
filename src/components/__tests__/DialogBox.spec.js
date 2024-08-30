import { flushPromises, mount } from '@vue/test-utils'
import { describe, it, expect, beforeEach, vi } from 'vitest'
import DialogBox from '@/components/DialogBox.vue'

describe('DialogBox.vue', () => {
  let wrapper
  const propsData = { isVisible: false }
  const slots = {
    default: '<p>Conteúdo do Slot</p>'
  }
  beforeEach(() => {
    wrapper = mountWrapper(propsData, slots)
    vi.clearAllMocks()
  })
  it('não exibe o diálogo quando isVisible é false', () => {
    expect(wrapper.find('.dialog-overlay').exists()).toBe(false)
  })

  it('exibe o diálogo quando isVisible é true', async () => {
    wrapper.setProps({ isVisible: true })
    await flushPromises()
    expect(wrapper.find('.dialog-overlay').exists()).toBe(true)
  })

  it('emite o evento "close" ao clicar no botão fechar', async () => {
    wrapper.setProps({ isVisible: true })
    await flushPromises()
    await wrapper.find('.close-button').trigger('click')
    expect(wrapper.emitted('close')).toBeTruthy()
  })

  it('exibe o título e a mensagem passados como props', async () => {
    wrapper.setProps({ isVisible: true, title: 'Título Teste', message: 'Mensagem Teste' })
    await flushPromises()
    expect(wrapper.vm.title).toBe('Título Teste')
    expect(wrapper.vm.message).toBe('Mensagem Teste')
  })

  it('exibe o conteúdo passado pelo slot', async () => {
    wrapper.setProps({ isVisible: true })
    await flushPromises()
    expect(wrapper.html()).toContain('<p>Conteúdo do Slot</p>')
  })
})
function mountWrapper(propsData, slots) {
  return mount(DialogBox, {
    slots,
    global: {
      propsData
    }
  })
}
