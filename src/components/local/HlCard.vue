<template>
  <div class="hl-card">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'HlCard'
}
</script>

<style lang="scss">
.hl-card {
  background: white;
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 3px 17px 0 rgba(33,33,33,0.1);
}
</style>
