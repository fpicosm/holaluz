<template>
  <button
    class="hl-button"
    :class="[
      color && `bg-${color}`,
      textColor && `text-${textColor}`
    ]"
    v-bind="{ ...$attrs, type }"
  >
    <span>
      <slot>
        {{ label }}
      </slot>
    </span>
  </button>
</template>

<script>
export default {
  name: 'HlButton',
  props: {
    type: {
      type: String,
      default: 'button',
      validator: val => ['button', 'reset', 'submit'].includes(val)
    },
    color: {
      type: String,
      default: 'primary'
    },
    textColor: {
      type: String,
      default: 'white'
    },
    label: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss">
.hl-button {
  padding: 0.5rem 1rem;
  outline: 0;
  position: relative;
  z-index: 0;

  &:before {
    content: "";
    position: absolute;
    inset: 0;
    background: black;
    opacity: 0;
    transition: opacity 0.3s;
    z-index: -1;
  }

  &:hover:before { opacity: 0.15; }
  &:focus:before { opacity: 0.2; }
  &:active:before { opacity: 0.3; }

  &:after {
    content: "";
    position: absolute;
    inset: 0;
  }
}
</style>
