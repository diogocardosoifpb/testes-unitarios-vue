import { mount } from '@vue/test-utils'
import { describe, it, expect, beforeEach } from 'vitest'
import ConditionalMessage from '@/components/ConditionalMessage.vue'

describe('ConditionalMessage.vue', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mountWrapper()
  })
  it('não mostra a mensagem inicialmente', () => {})
})
function mountWrapper() {
  return mount(ConditionalMessage)
}
