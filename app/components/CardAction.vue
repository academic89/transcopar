<template>
  <div class="action-component">
    <b-row class="justify-content-end">
      <b-col sm="4" md="3">
        <div class="py-2 px-3 bg-black text-white card-action">
          <h2 class="h6 text-center text-warning">
            ¿Te interesan contratar nuestros servicios?
          </h2>
          <b-button
            href="https://api.whatsapp.com/send?phone=525543816903&text=Hola%2C%20¿quisiera%20pedir%20informes%20sobre%20sus%20servicios%20de%20transporte?"
            target="_blank"
            variant="success"
            block
            pill
            ><fa-icon class="fa-fw mr-2" :icon="faWhatsapp"></fa-icon
            >Contáctanos</b-button
          >
        </div>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
export default {
  computed: {
    faWhatsapp() {
      return faWhatsapp
    },
  },
}
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
