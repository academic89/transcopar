<template>
  <div class="action-component">
    <b-row class="justify-content-end">
      <b-col sm="4" md="3">
        <div class="py-2 px-3 bg-black text-white card-action">
          <h2 class="h6 text-center text-warning">
            ¿Deseas cotizar alguno de nuestros servicios?
          </h2>
          <b-button to="/calculator" variant="success" pill block
            >Comenzar ahora</b-button
          >
        </div>
      </b-col>
    </b-row>
  </div>
</template>
<script>
export default {}
</script>
<style scoped>
.action-component {
  width: 100%;
  position: fixed;
  bottom: 0;
  z-index: 3;
}
.action-component .card-action {
  border-top: 3px solid red;
  border-bottom: 3px solid green;
}
@media (min-width: 768px) {
  .action-component {
    padding: 1rem;
    border-radius: 8px;
  }
}
</style>
