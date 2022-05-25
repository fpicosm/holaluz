<template>
  <div class="hl-toolbar">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'HlToolbar'
}
</script>

<style lang="scss">
.hl-toolbar {
  display: flex;
  align-items: center;
  padding: 1rem;
  background-color: #fff;
}
</style>
