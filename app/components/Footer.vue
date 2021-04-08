<template>
  <section id="footer" class="pt-5 pb-2 bg-black text-white small">
    <b-container>
      <b-row class="d-flex align-items-end">
        <b-col sm="4">
          <h6>Localizanos</h6>
          <p class="mb-4">
            Contáctanos para mayor información e informarte como es el proceso
            de transporte.
          </p>
          <b-row class="d-flex align-items-center mb-4">
            <b-col cols="auto">
              <h6 class="h4">
                <fa-icon class="fa-2x fa-fw" icon="map-marked-alt"></fa-icon>
              </h6>
            </b-col>
            <b-col class="pl-0">
              <p class="mb-0">
                <a href="https://shorturl.at/ckwH1" target="_blank"
                  ><span class="font-weight-bold">Direccion: </span> Catarino
                  Benavides #208 ampliación san Pedro Xalpa Azcapotzalco C.P.
                  02719</a
                >
              </p>
            </b-col>
          </b-row>
        </b-col>
        <b-col sm="3">
          <b-row class="d-flex align-items-center mb-4">
            <b-col cols="auto">
              <h6 class="h4">
                <fa-icon class="fa-2x fa-fw" icon="mobile-alt"></fa-icon>
              </h6>
            </b-col>
            <b-col class="pl-0">
              <p class="mb-0">
                <span class="font-weight-bold">Contacto:</span><br /><br />
                <ButtonWhatsapp text="5545835131" size="sm" /><br />
                Tel.
                <a href="tel:5581139489">01 (55) 8113 9489</a>
                <br />
                Tel. <a href="tel:5581135873">01 (55) 8113 5873</a>
              </p>
            </b-col>
          </b-row>
        </b-col>
        <b-col sm="3">
          <b-row class="d-flex align-items-center mb-4">
            <b-col cols="auto">
              <h6 class="h4">
                <fa-icon
                  class="fa-2x fa-fw"
                  icon="envelope-open-text"
                ></fa-icon>
              </h6>
            </b-col>
            <b-col class="pl-0">
              <p>
                <span class="font-weight-bold">Correo electrónico:</span><br />
                transcopar@hotmail.com
              </p>
            </b-col>
          </b-row>
        </b-col>
        <b-col sm="2">
          <h6>Síguenos en:</h6>
          <p class="lead mb-4">
            <a href="https://www.facebook.com/transcopar" target="_blank">
              <fa-icon class="mr-2" :icon="faFacebookSquare"></fa-icon>
            </a>
            <a href="https://www.instagram.com/transcopar_/" target="_blank">
              <fa-icon class="mr-2" :icon="faInstagram"></fa-icon>
            </a>
          </p>
        </b-col>
      </b-row>
      <b-row>
        <b-col sm="12">
          <p class="small text-white text-center mt-5 mb-3">
            2021 Transcopar<br />
            Todos los derechos reservados.
          </p>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
<script>
import {
  faFacebookSquare,
  faLinkedin,
  faInstagram,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons'
export default {
  computed: {
    faFacebookSquare() {
      return faFacebookSquare
    },
    faLinkedin() {
      return faLinkedin
    },
    faInstagram() {
      return faInstagram
    },
    faWhatsapp() {
      return faWhatsapp
    },
  },
}
</script>
