<template>
  <div class="index">
    <section class="intro relative">
      <Navbar />
      <CarouselMobile class="d-block d-sm-none" />
      <Carousel class="d-none d-sm-block" />
      <div class="overlay-intro d-flex align-items-center">
        <div class="w-100 py-5">
          <b-container>
            <b-row class="justify-content-end">
              <transition name="fade-in">
                <b-col v-if="showIntro" class="text-white" sm="4">
                  <h1 class="h2 mb-5">
                    Somos una empresa de transporte 100% mexicana y
                    responseable.
                  </h1>
                  <b-button variant="success" class="px-4" pill
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
    <section class="py-5 bg-gray text-center">
      <b-container>
        <b-row>
          <b-col sm="12">
            <h2 class="my-5">Nuestros servicios</h2>
          </b-col>
        </b-row>
        <b-row class="mt-5 d-flex align-items-stretch">
          <b-col sm="4" class="mb-5">
            <Card>
              <div
                class="box-icon shadow d-flex align-items-center justify-content-center"
              >
                <fa-icon class="fa-2x fa-fw" icon="dolly"></fa-icon>
              </div>

              <h2 class="h3 mt-4"><span class="text-danger">L</span>ocal</h2>
              <p class="small mb-0">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
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
              <h2 class="h3 mt-4"><span class="text-danger">F</span>oráneo</h2>
              <p class="small mb-0">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
            </Card>
          </b-col>
          <b-col sm="4" class="mb-5">
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
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
            </Card>
          </b-col>
        </b-row>
        <b-row class="d-flex align-items-stretch">
          <b-col class="mb-5">
            <Card>
              <div
                class="box-icon shadow d-flex align-items-center justify-content-center"
              >
                <fa-icon class="fa-2x fa-fw" icon="shipping-fast"></fa-icon>
              </div>

              <h2 class="h3 mt-4">
                <span class="text-danger">C</span>onsolidado
              </h2>
              <p class="small mb-0">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
            </Card>
          </b-col>
          <b-col class="mb-5">
            <Card>
              <div
                class="box-icon shadow d-flex align-items-center justify-content-center"
              >
                <fa-icon class="fa-2x fa-fw" icon="dolly"></fa-icon>
              </div>
              <h2 class="h3 mt-5 mt-sm-4">
                <span class="text-danger">C</span>amion completo
              </h2>
              <p class="small mb-0">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
            </Card>
          </b-col>
          <b-col class="mb-5">
            <Card>
              <div
                class="box-icon shadow d-flex align-items-center justify-content-center"
              >
                <fa-icon class="fa-2x fa-fw" icon="shipping-fast"></fa-icon>
              </div>
              <h2 class="h3 mt-4"><span class="text-danger">D</span>edicado</h2>
              <p class="small mb-0">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
            </Card>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section class="py-5 bg-gray">
      <b-container>
        <b-row>
          <b-col sm="12">
            <h2 class="h3 my-5 text-center">
              Contamos con las siguientes unidades
            </h2>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showIntro: false,
    }
  },
  created() {
    setTimeout(() => {
      this.showIntro = true
    }, 100)
  },
}
</script>
<style scoped>
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
</style>
