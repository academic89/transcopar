<template>
  <b-button
    href="https://api.whatsapp.com/send?phone=525545835131&text=Hola%2C%20¿quisiera%20pedir%20informes%20sobre%20una%20cotización?"
    target="_blank"
    variant="success"
    block
    pill
    ><fa-icon class="fa-fw mr-2" :icon="faWhatsapp"></fa-icon
    >Contáctanos</b-button
  >
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
