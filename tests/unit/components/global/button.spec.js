import { shallowMount } from '@vue/test-utils'
import HlButton from '@/components/global/Button.vue'

describe('HlButton.vue', () => {
  it('renders props.label when passed', () => {
    const label = 'Hello World!'
    const wrapper = shallowMount(HlButton, {
      props: { label }
    })

    expect(wrapper.text()).toMatch(label)
  })

  it('renders props.color when passed', () => {
    const color = 'secondary'
    const wrapper = shallowMount(HlButton, {
      props: { color }
    })

    expect(wrapper.classes(`bg-${color}`)).toBeTruthy()
  })

  it('renders props.textColor when passed', () => {
    const textColor = 'primary'
    const wrapper = shallowMount(HlButton, {
      props: { textColor }
    })

    expect(wrapper.classes(`text-${textColor}`)).toBeTruthy()
  })

  it('renders props.type when passed', async () => {
    const type = 'submit'
    const wrapper = shallowMount(HlButton, {
      props: { type }
    })

    expect(wrapper.attributes('type')).toMatch(type)

    await wrapper.setProps({ type: 'reset' })
    expect(wrapper.attributes('type')).toMatch('reset')
  })

  it('validates props.type properly', async () => {
    const wrapper = shallowMount(HlButton, {})
    const { validator } = wrapper.vm.$options.props.type

    expect(validator('button')).toBeTruthy()
    expect(validator('reset')).toBeTruthy()
    expect(validator('submit')).toBeTruthy()
    expect(validator('invalid')).toBeFalsy()
  })
})
