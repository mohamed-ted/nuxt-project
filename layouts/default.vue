<template>
  <div class="layout">
    <Header />
    <Nuxt />
  </div>
</template>
<script>
import Header from '@/components/Header'
export default {
  components: { Header },
}
</script>
<style>
@import url('~/styles/reset.css');
@import url('~/styles/global.css');

.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
}
</style>
