import Comp from './index.vue'

import { mount } from 'vue-test-utils'
import { expect } from 'chai'

describe('Radio', () => {
  it('basic', () => {
    const wrapper = mount(Comp)
    expect(wrapper.name()).to.equal('radio')
  })
})
