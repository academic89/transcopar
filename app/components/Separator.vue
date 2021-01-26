<template>
  <div class="path"></div>
</template>
<script>
export default {}
</script>
<style scoped>
.path {
  background: rgb(47, 47, 63);
  background: linear-gradient(
    0deg,
    rgba(193, 56, 110, 1) 0%,
    rgba(168, 211, 228, 1) 0%,
    rgba(255, 255, 255, 1) 0%,
    rgba(244, 244, 244, 1) 0%,
    rgba(255, 255, 255, 1) 0%,
    rgba(245, 245, 245, 1) 0%,
    rgba(245, 245, 245, 0.6329306722689075) 6%,
    rgba(151, 151, 151, 0.5937149859943977) 15%,
    rgba(57, 57, 57, 0.7172443977591037) 26%,
    rgba(0, 0, 0, 0.8032387955182073) 100%
  );
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100vh;
  clip-path: polygon(54% 77%, 72% 0, 100% 0, 100% 100%, 0 100%, 0 90%);
  z-index: 2;
}
@media (max-width: 665px) {
  .path {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    background: linear-gradient(
      0deg,
      rgba(193, 56, 110, 1) 0%,
      rgba(168, 211, 228, 1) 0%,
      rgba(255, 255, 255, 1) 0%,
      rgba(244, 244, 244, 1) 0%,
      rgba(255, 255, 255, 1) 0%,
      rgba(245, 245, 245, 1) 0%,
      rgba(245, 245, 245, 0.6329306722689075) 6%,
      rgba(151, 151, 151, 0.4937149859943977) 15%,
      rgba(57, 57, 57, 0.3172443977591037) 26%,
      rgba(0, 0, 0, 0.3032387955182073) 100%
    );
  }
}
</style>
