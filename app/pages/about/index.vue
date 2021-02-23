<template>
  <div class="about-view">
    <section ref="intro" class="relative bg-about">
      <div class="overlay-section"></div>
      <b-container class="h40 d-flex align-items-center">
        <b-row class="mt-5 text-white">
          <b-col>
            <h1 class="h2">Quienes somos...</h1>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section ref="mision" class="bg-white h100 py-5">
      <b-container>
        <b-row class="justify-content-center">
          <transition name="fade-in" appear>
            <b-col v-if="showIntro" sm="10" md="5">
              <h2 class="mt-5 d-flex align-items-center">
                <Pulse />
                <span class="text-danger">M</span>isión
              </h2>
              <p>
                Transcopar es único e inigualable; considerando la gama enorme
                que tenemos como competencia en el servicio del transporte,
                transcopar y sus colaboradores día con día presentan una
                experiencia nueva la cual nos acompaña a nuestros destinos
                contar con cada uno de nuestros clientes es lo fundamental ya
                que gracias a ellos podemos seguir formando más experiencia y
                dedicación. Innovando programas administrativos, de organización
                flexible , enfocada al cliente y de servicio que fomente el
                crecimiento de nuestra empresa.
              </p>
            </b-col>
          </transition>
          <b-col sm="10" offset-md="1" md="6">
            <transition name="slide-fade">
              <div v-if="showImageOne" class="w-100">
                <img
                  class="right-img shadow"
                  src="../../assets/img/index3.jpg"
                  alt="Transcopar"
                />
              </div>
            </transition>
          </b-col>
        </b-row>
        <b-row class="justify-content-center d-flex align-items-end">
          <b-col sm="10" md="5">
            <transition name="fade-in">
              <div v-if="showVision" class="w-100">
                <h2 class="mt-5 d-flex align-items-center">
                  <Pulse />
                  <span class="text-danger">V</span>isión
                </h2>
                <p>
                  Ser la empresa líder a nivel nacional en el sector transporte
                  brindando un servicio de calidad, manteniéndonos dentro del
                  mercado en el margen de rentabilidad de la empresa solicitado.
                  Siempre teniendo en primer término el cliente y su
                  satisfacción.
                </p>
              </div>
            </transition>
            <transition name="slide-fade-left">
              <img
                v-if="showImageTwo"
                class="left-img shadow"
                src="../../assets/img/index2.jpg"
                alt="Transcopar"
              />
            </transition>
          </b-col>
          <b-col sm="10" offset-md="1" md="6" class="my-3 my-sm-5">
            <transition name="fade-in">
              <div v-if="showTranscopar" class="w-100">
                <h2 class="mt-5 d-flex align-items-center">
                  <Pulse />
                  <span class="text-danger">T</span>ranscopar
                </h2>
                <p>
                  Consideramos indispensable contar con un sistema operativo que
                  garantice la satisfacción de nuestro cliente innovando y
                  renovando cada segmento que forma la empresa. Realizar fletes
                  es nuestra labor más grande pero culminarla es nuestro éxito
                  porque servirte queda reflejado en tu satisfacción total. Se
                  cuenta con rastreo satelital en cada una de las unidades que
                  contamos, las 24hrs del día y los 365 días del año,
                  complementado con teléfono móvil para mantenernos comunicados
                  a nuestros clientes y ofrecer mejor servicio.
                </p>
              </div>
            </transition>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section class="py-5 bg-gray h80 d-flex align-items-center">
      <b-container>
        <b-row class="mt-5">
          <b-col>
            <transition name="fade-in">
              <div v-if="showBanner" class="box-banner shadow mb-5">
                <b-row class="justify-content-center">
                  <b-col sm="8" md="6" class="box-img shadow">
                    <img src="../../assets/img/logo.png" alt="transcopar" />
                  </b-col>
                  <b-col sm="10">
                    <h3 class="font-weight-normal">
                      "Generación tras generación manteniendo los mismos valores
                      que son los que los caracterizan siempre teniendo como
                      primer término el mejor servicio para nuestros
                      clientes..."
                    </h3>
                    <h4 class="h6 mt-4">
                      Giovanni Paredes
                      <span class="font-weight-normal"
                        >| Director General de Transcopar S.A. de C.V.</span
                      >
                    </h4>
                  </b-col>
                </b-row>
              </div>
            </transition>
          </b-col>
        </b-row>
        <transition name="fade-in">
          <b-row v-if="showBanner" class="justify-content-center my-4">
            <b-col sm="6">
              <h6 class="mb-4 text-center">
                ¿Estás interesado en nuestros servicios o deseas más
                información?
              </h6>
              <ButtonWhatsapp />
            </b-col>
          </b-row>
        </transition>
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
      showImageOne: false,
      showVision: false,
      showImageTwo: false,
      showTranscopar: false,
      showBanner: false,
    }
  },
  computed: {
    faWhatsapp() {
      return faWhatsapp
    },
  },
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.addEventListener('scroll', this.handleScroll)
  },
  created() {
    setTimeout(() => {
      this.showIntro = true
      setTimeout(() => {
        this.showImageOne = true
      }, 300)
    }, 400)
  },
  methods: {
    handleScroll() {
      const intro = this.$refs.intro.clientHeight
      const mision = this.$refs.mision.clientHeight

      if (window.scrollY > intro + 200) {
        this.showVision = true
      }

      if (window.scrollY > intro + 400) {
        this.showImageTwo = true
      }

      if (window.scrollY > intro + 450) {
        this.showTranscopar = true
      }

      if (window.scrollY > intro + (mision / 5) * 4) {
        this.showBanner = true
      }
    },
  },
}
</script>
<style scoped>
.about-view {
  overflow-x: hidden;
}
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

.right-img {
  max-width: 140%;
  margin-top: 20px;
  border-radius: 15px;
}

.left-img {
  max-width: 140%;
  margin-top: 20px;
  margin-left: -100px;
  border-radius: 15px;
}
.box-banner {
  background: #000;
  padding: 2rem;
  border-radius: 15px;
  color: white;
  text-align: center;
}

.box-img {
  background: white;
  padding: 1.5rem;
  border-radius: 15px;
  margin-bottom: 40px;
  margin-top: -80px;
}

@media (min-width: 992px) {
  .right-img {
    margin-top: 200px;
  }
  .left-img {
    margin-top: 30px;
  }
}
</style>
