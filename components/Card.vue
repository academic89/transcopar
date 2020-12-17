<template>
  <div class="card-component p-3 p-sm-5 shadow">
    <div class="card-content">
      <slot />
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style scoped>
.card-component {
  background: #fff;
  border-radius: 10px;
  position: relative;
  height: 100%;
}
</style>
