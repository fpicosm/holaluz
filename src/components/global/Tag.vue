<template>
  <span
    class="hl-tag"
    :class="[
      color && `bg-${color}`,
      textColor && `text-${textColor}`
    ]"
  >
    <slot>{{ text }}</slot>
  </span>
</template>

<script>
export default {
  name: 'HlTag',

  props: {
    text: {
      type: String,
      default: ''
    },

    color: {
      type: String,
      default: 'primary'
    },

    textColor: {
      type: String,
      default: 'white'
    }
  }
}
</script>

<style lang="scss">
.hl-tag {
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  font-size: 0.75rem;
}
</style>
