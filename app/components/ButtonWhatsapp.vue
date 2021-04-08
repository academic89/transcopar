<template>
  <b-button
    class="whats-button"
    href="https://api.whatsapp.com/send?phone=525545835131&text=Hola%2C%20¿quisiera%20pedir%20informes%20sobre%20una%20cotización?"
    target="_blank"
    variant="success"
    block
    pill
    :size="size"
    ><fa-icon class="fa-fw mr-2" :icon="faWhatsapp"></fa-icon
    >{{ text }}</b-button
  >
</template>
<script>
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
export default {
  props: {
    text: {
      type: String,
      default: 'Contáctanos',
    },
    size: {
      type: String,
      default: 'md',
    },
  },
  computed: {
    faWhatsapp() {
      return faWhatsapp
    },
  },
}
</script>
<style scoped>
.whats-button {
  cursor: pointer;
}
</style>
