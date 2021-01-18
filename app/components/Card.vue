<template>
  <div :class="'card-component shadow' + ' text-' + align + ' ' + padding">
    <div class="card-content">
      <slot />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    padding: {
      type: String,
      default: 'p-3 p-sm-5',
    },
    align: {
      type: String,
      default: 'left',
    },
  },
}
</script>
<style scoped>
.card-component {
  background: #fff;
  border-radius: 10px;
  position: relative;
  height: 100%;
}
</style>
