<template>
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: 'Quicksand', sans-serif;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  z-index: 0;

  &::before {
    content: "";
    position: fixed;
    inset: 0;
    background-image: url('assets/bg.jpg');
    background-size: cover;
    opacity: 0.7;
    z-index: -1;
  }
}
</style>
