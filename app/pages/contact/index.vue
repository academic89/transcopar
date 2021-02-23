<template>
  <div class="about-view">
    <section ref="intro" class="relative bg-about">
      <div class="overlay-section"></div>
      <b-container class="h40 d-flex align-items-center">
        <b-row class="mt-5 text-white">
          <b-col>
            <h1 class="h2">Contacto</h1>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section ref="mision" class="bg-white h80 py-5">
      <b-container>
        <b-row class="justify-content-center text-center">
          <b-col sm="10" md="7">
            <h1 class="h5 mt-5">
              ¿Tienes alguna duda o requieres más información sobre nuestros
              servicios?
            </h1>
            <p class="mt-4">
              Puedes comunicarte con nosotros a los siguientes teléfonos:
            </p>
            <b-row class="justify-content-center">
              <b-col sm="6">
                <p class="lead d-flex align-items-center pl-4">
                  <Pulse />
                  <fa-icon
                    class="fa-fw text-success mr-2"
                    icon="phone-square-alt"
                  ></fa-icon>
                  <span>(55) 8113 9489</span>
                </p>
                <p class="lead d-flex align-items-center pl-4">
                  <Pulse />
                  <fa-icon
                    class="fa-fw text-success mr-2"
                    icon="phone-square-alt"
                  ></fa-icon>
                  <span>(55) 8113 5873</span>
                </p>
              </b-col>
            </b-row>

            <p class="mt-4">
              O puedes también mandarnos un
              <span class="text-success">whatsapp</span>
            </p>
            <b-row class="justify-content-center">
              <b-col sm="6">
                <ButtonWhatsapp />
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>
<script>
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
export default {
  data() {
    return {
      showIntro: false,
    }
  },
  computed: {
    faWhatsapp() {
      return faWhatsapp
    },
  },
}
</script>
<style scoped>
.overlay-section {
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
  height: 40vh;
  clip-path: polygon(0 0, 70% 42%, 100% 100%, 0% 100%);
}
</style>
