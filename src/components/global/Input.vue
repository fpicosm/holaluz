<template>
  <label
    class="hl-input"
    :class="focused && ['hl-input--focused', color && `text-${color}`]"
  >
    <input
      v-model="value"
      ref="input"
      v-bind="{ ...$attrs, ...$props }"
      @focus="focused = true"
      @blur="focused = false"
    />

    <slot name="after" />
  </label>
</template>

<script>
export default {
  name: 'HlInput',

  inheritAttrs: false,

  props: {
    modelValue: {
      type: [String, Number],
      required: true
    },
    type: {
      type: String,
      default: 'text',
      validator: val => ['email', 'number', 'password', 'search', 'tel', 'text', 'url'].includes(val)
    },
    color: {
      type: String,
      default: 'primary'
    }
  },

  data () {
    return {
      focused: this.$attrs.autofocus,
      value: this.modelValue
    }
  }
}
</script>

<style lang="scss">
.hl-input {
  display: inline-flex;
  outline: 2px solid transparent;
  transition: outline-color 0.3s;

  &--focused {
    outline-color: inherit;
  }

  input {
    padding: 0.5rem;
    outline: 0;
    border-width: 1px;
    color: initial;
    transition: border-color 0.3s;

    &:hover { border-color: initial; }
    &:focus {
      border-color: transparent;
    }
  }
}
</style>
