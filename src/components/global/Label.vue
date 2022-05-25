<template>
  <component class="hl-label" :is="tag">
    <slot />
  </component>
</template>

<script>
export default {
  name: 'HlLabel',

  props: {
    tag: {
      type: String,
      default: 'span'
    }
  }
}
</script>

<style lang="scss" scoped>
h1,
h2,
h3,
h4,
h5,
h6 { font-weight: 700; }

h1 { font-size: 3rem; }
h2 { font-size: 2.25rem; }
h3 { font-size: 1.875rem; }
h4 { font-size: 1.5rem; }
h5 { font-size: 1.25rem; }
h6 { font-size: 1rem; }
</style>
