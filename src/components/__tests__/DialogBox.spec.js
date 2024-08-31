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
})
function mountWrapper(propsData, slots) {
  return mount(DialogBox, {
    slots,
    global: {
      propsData
    }
  })
}
