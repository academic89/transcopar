<template>
  <div class="index">
    <transition name="slide-fade">
      <CardAction v-if="showAction" />
    </transition>
    <section ref="home" class="intro relative">
      <CarouselMobile class="d-block d-sm-none" />
      <Carousel class="d-none d-sm-block" />
      <div class="overlay-intro d-flex align-items-center">
        <div class="w-100 py-5">
          <b-container>
            <b-row class="justify-content-end">
              <transition name="fade-in">
                <b-col v-if="showIntro" class="text-white" sm="4">
                  <h1 class="mb-4 font-weight-normal text-title text-warning">
                    Transcopar
                  </h1>
                  <h2 class="h4 mb-5">
                    Somos líderes en el servicio de transporte en México.
                  </h2>
                  <b-button
                    v-scroll-to="{
                      el: '#services',
                      duration: 800,
                    }"
                    variant="success"
                    class="px-4"
                    size="lg"
                    pill
                    >Conoce nuestros servicios</b-button
                  >
                </b-col>
              </transition>
            </b-row>
          </b-container>
        </div>
      </div>
      <Separator />
    </section>
    <section
      id="services"
      ref="services"
      class="py-5 bg-services text-center h100"
    >
      <b-container>
        <b-row>
          <transition name="fade-in">
            <b-col v-if="showTitleServices" sm="12">
              <h2 class="my-5">Nuestros servicios</h2>
            </b-col>
          </transition>
        </b-row>
        <transition name="fade-in">
          <b-row
            v-if="showServices"
            class="mt-3 mt-sm-5 d-flex align-items-stretch"
          >
            <b-col sm="4" class="mb-5">
              <Card>
                <div
                  class="box-icon shadow d-flex align-items-center justify-content-center"
                >
                  <fa-icon class="fa-2x fa-fw" icon="dolly"></fa-icon>
                </div>

                <h2 class="h3 mt-5 mt-md-4">
                  <span class="text-danger">L</span>ocal
                </h2>
                <p class="small mb-0">
                  Transportamos tu mercancía dentro de tu misma localidad o
                  estado en donde te encuentres.
                </p>
              </Card>
            </b-col>
            <b-col sm="4" class="mb-5">
              <Card>
                <div
                  class="box-icon shadow d-flex align-items-center justify-content-center"
                >
                  <fa-icon class="fa-2x fa-fw" icon="shipping-fast"></fa-icon>
                </div>
                <h2 class="h3 mt-5 mt-md-4">
                  <span class="text-danger">F</span>oráneo
                </h2>
                <p class="small mb-0">
                  Ofrecemos el servicio de transporte de mercancía a todos los
                  estados de la republica mexicana con la logística más rápida
                  del mercado.
                </p>
              </Card>
            </b-col>
            <!-- <b-col sm="4" class="mb-5">
              <Card>
                <div
                  class="box-icon shadow d-flex align-items-center justify-content-center"
                >
                  <fa-icon class="fa-2x fa-fw" icon="dolly"></fa-icon>
                </div>
                <h2 class="h4 mt-5 mt-sm-4">
                  <span class="text-danger">C</span>olecta "Door to door"
                </h2>
                <p class="small mb-0">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s
                </p>
              </Card>
            </b-col> -->
          </b-row>
        </transition>
        <transition name="fade-in">
          <b-row v-if="showServices" class="d-flex align-items-stretch">
            <!-- <b-col class="mb-5">
              <Card>
                <div
                  class="box-icon shadow d-flex align-items-center justify-content-center"
                >
                  <fa-icon class="fa-2x fa-fw" icon="shipping-fast"></fa-icon>
                </div>

                <h2 class="h3 mt-5 mt-md-4">
                  <span class="text-danger">C</span>onsolidado
                </h2>
                <p class="small mb-0">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s
                </p>
              </Card>
            </b-col> -->
            <b-col sm="4" offset-sm="4" class="mb-5">
              <Card>
                <div
                  class="box-icon shadow d-flex align-items-center justify-content-center"
                >
                  <fa-icon class="fa-2x fa-fw" icon="truck-moving"></fa-icon>
                </div>
                <h2 class="h3 mt-5 mt-sm-4">
                  <span class="text-danger">C</span>amión completo
                </h2>
                <p class="small mb-0">
                  ¿Necesitas un camión ahora mismo? Nosotros ponemos a tu
                  disposición la renta de un camión completo para transportar tu
                  mercancía de manera segura, rápida y eficaz.
                </p>
              </Card>
            </b-col>
            <b-col sm="4" class="mb-5">
              <Card>
                <div
                  class="box-icon shadow d-flex align-items-center justify-content-center"
                >
                  <fa-icon class="fa-2x fa-fw" icon="truck-loading"></fa-icon>
                </div>
                <h2 class="h3 mt-5 mt-md-4">
                  <span class="text-danger">D</span>edicado
                </h2>
                <p class="small mb-0">
                  El servicio dedicado garantiza que las unidades solamente
                  serán utilizadas por tu empresa, por lo que no habrá
                  sorpresas, para contratar el servicio es necesario indicar qué
                  tipo de unidades requieres para el transporte de mercancía.
                </p>
              </Card>
            </b-col>
          </b-row>
        </transition>
      </b-container>
    </section>
    <section ref="units" class="py-5 bg-white h80">
      <b-container>
        <b-row>
          <transition name="fade-in">
            <b-col v-if="showTitleUnits" sm="12">
              <h2 class="h3 mt-3 text-center">
                Contamos con las siguientes unidades
              </h2>
            </b-col>
          </transition>
        </b-row>
        <transition name="fade-in">
          <SlickCarousel v-if="showUnits" />
        </transition>
      </b-container>
    </section>
    <section ref="banner" class="py-5 d-flex align-items-center h60 bg-banner">
      <b-container>
        <b-row>
          <transition name="slide-fade">
            <b-col v-if="showBanner">
              <h2 class="h1 text-center text-white">
                33 años de experiencia nos respaldan
              </h2>
            </b-col>
          </transition>
        </b-row>
      </b-container>
    </section>
    <section ref="clients" class="py-5 h60">
      <b-container>
        <b-row class="justify-content-center">
          <b-col sm="12">
            <h2 class="h3 my-5 text-center">Clientes satisfechos</h2>
          </b-col>
        </b-row>
        <b-row>
          <transition name="fade-in">
            <b-col v-if="showClients" sm="12">
              <b-row class="d-flex align-items-stretch">
                <b-col cols="6" sm="4" md class="mb-4">
                  <Card padding="p-3 d-flex align-items-center">
                    <img src="../assets/img/dipak.png" alt="dipak" />
                  </Card>
                </b-col>
                <b-col cols="6" sm="4" md class="mb-4">
                  <Card padding="p-3 d-flex align-items-center">
                    <img src="../assets/img/cvdirecto.png" alt="cv directo" />
                  </Card>
                </b-col>
                <b-col cols="6" sm="4" md class="mb-4">
                  <Card padding="p-3 d-flex align-items-center">
                    <img src="../assets/img/femsa.png" alt="femsa" />
                  </Card>
                </b-col>
                <b-col cols="6" sm="4" md class="mb-4">
                  <Card padding="p-3 d-flex align-items-center">
                    <img src="../assets/img/pepsico.png" alt="pepsico" />
                  </Card>
                </b-col>
                <b-col cols="6" sm="4" md class="mb-4">
                  <Card padding="p-3 d-flex align-items-center">
                    <img src="../assets/img/urbania.png" alt="urbania" />
                  </Card>
                </b-col>
              </b-row>
            </b-col>
          </transition>
        </b-row>
      </b-container>
    </section>
    <section ref="stats" class="py-5 bg-gray h60 d-flex align-items-center">
      <b-container>
        <b-row class="text-center">
          <transition name="fade-in">
            <b-col v-if="showStatsOne" cols="12" sm="4" class="mb-4">
              <h2>
                <fa-icon class="fa-2x fa-fw" icon="truck-moving"></fa-icon>
              </h2>
              <h2 class="h1 mb-0 text-success">+ 1000 viajes</h2>
              <p class="">
                completados a lo largo y ancho del territorio mexicano.
              </p>
            </b-col>
          </transition>
          <transition name="fade-in">
            <b-col v-if="showStatsTwo" cols="12" sm="4" class="mb-4">
              <h2>
                <fa-icon class="fa-2x fa-fw" icon="map-marked-alt"></fa-icon>
              </h2>
              <h2 class="h1 mb-0 text-success">32 estados</h2>
              <p class="">Corbertura nacional.</p>
            </b-col>
          </transition>
          <transition name="fade-in">
            <b-col v-if="showStatsThree" cols="12" sm="4" class="mb-4">
              <h2><fa-icon class="fa-2x fa-fw" icon="medal"></fa-icon></h2>
              <h2 class="h1 mb-0 text-success">30 años</h2>
              <p class="">de experiencianos nos respaldan.</p>
            </b-col>
          </transition>
        </b-row>
      </b-container>
    </section>
    <section ref="faq" class="py-5 h80 bg-pattern">
      <b-container class="mt-0 mt-sm-5">
        <b-row class="justify-content-center">
          <transition name="fade-in">
            <b-col v-if="showFaq" sm="8">
              <Card>
                <h2 class="h3 mt-4 mb-3 text-center">Preguntas Frecuentes</h2>
                <Accordeon />
              </Card>
            </b-col>
          </transition>
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showAction: false,
      showIntro: false,
      showTitleServices: false,
      showServices: false,
      showTitleUnits: false,
      showUnits: false,
      showBanner: false,
      showClients: false,
      showStatsOne: false,
      showStatsTwo: false,
      showStatsThree: false,
      showFaq: false,
    }
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
    }, 300)
  },
  methods: {
    handleScroll() {
      const home = this.$refs.home.clientHeight
      const services = this.$refs.services.clientHeight
      const units = this.$refs.units.clientHeight
      const banner = this.$refs.banner.clientHeight
      const clients = this.$refs.clients.clientHeight
      const stats = this.$refs.stats.clientHeight

      if (window.scrollY > (home / 5) * 3) {
        this.showTitleServices = true
      }

      if (window.scrollY > (home / 5) * 4) {
        this.showServices = true
      } else {
        this.showAction = false
      }

      if (window.scrollY > home + (services / 5) * 3) {
        this.showTitleUnits = true
        this.showAction = true
      }

      if (window.scrollY > home + (services / 5) * 4) {
        this.showUnits = true
      }

      if (window.scrollY > home + services + (units / 3) * 2) {
        this.showBanner = true
      }

      if (window.scrollY > home + services + units + banner / 3) {
        this.showClients = true
      }

      if (window.scrollY > home + services + units + banner) {
        this.showStatsOne = true
        setTimeout(() => {
          this.showStatsTwo = true
          setTimeout(() => {
            this.showStatsThree = true
          }, 300)
        }, 300)
      }

      if (
        window.scrollY >
        home + services + units + banner + clients + stats / 2
      ) {
        this.showFaq = true
      }
    },
  },
}
</script>
<style scoped>
.text-title {
  text-transform: uppercase;
  background-color: #000;
  padding: 0.5rem;
  border-top: 3px solid red;
  border-bottom: 3px solid green;
}
.overlay-intro {
  position: absolute;
  top: 0;
  width: 100%;
  min-height: 100vh;
  z-index: 3;
  opacity: 1;
  text-align: center;
  transition: all ease 2s;
  -webkit-transition: all ease 2s;
}
body.nav-active .overlay-intro {
  z-index: -1;
  opacity: 0;
}

.box-icon {
  width: 70px;
  height: 70px;
  border-radius: 10px;
  background: crimson;
  color: white;
  position: absolute;
  left: 15px;
  top: -25px;
}

.bg-banner {
  background: url('../assets/img/banner.png') no-repeat center;
  background-size: cover;
}

@media (min-width: 1200px) {
  .bg-banner {
    background: url('../assets/img/banner.png') no-repeat center;
    background-size: cover;
    background-attachment: fixed;
  }
}
</style>
