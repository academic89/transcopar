<template>
  <div class="about-view">
    <section class="relative bg-about">
      <div class="overlay-section"></div>
      <b-container class="h40 d-flex align-items-center">
        <b-row class="mt-5 text-white">
          <b-col>
            <h1>Quienes somos</h1>
            <p class="lead">Conoce más acerca de nosotros...</p>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section class="bg-white h100 py-5">
      <b-container>
        <b-row class="justify-content-center">
          <b-col sm="8" md="5">
            <h2 class="mt-5"><span class="text-danger">M</span>isión</h2>
            <p>
              Transcopar es único e inigualable; considerando la gama enorme que
              tenemos como competencia en el servicio del transporte, transcopar
              y sus colaboradores día con día presentan una experiencia nueva la
              cual nos acompaña a nuestros destinos contar con cada uno de
              nuestros clientes es lo fundamental ya que gracias a ellos podemos
              seguir formando más experiencia y dedicación. Innovando programas
              administrativos, de organización flexible , enfocada al cliente y
              de servicio que fomente el crecimiento de nuestra empresa.
            </p>
          </b-col>
          <b-col sm="8" offset-md="1" md="6">
            <img
              class="right-img shadow"
              src="../../assets/img/index3.jpg"
              alt="Transcopar"
            />
          </b-col>
        </b-row>
        <b-row class="justify-content-center">
          <b-col sm="8" md="5">
            <h2><span class="text-danger mt-5">V</span>isión</h2>
            <p>
              Ser la empresa líder a nivel nacional en el sector transporte
              brindando un servicio de calidad, manteniéndonos dentro del
              mercado en el margen de rentabilidad de la empresa solicitado.
              Siempre teniendo en primer término el cliente y su satisfacción.
            </p>
            <img
              class="left-img shadow"
              src="../../assets/img/index2.jpg"
              alt="Transcopar"
            />
          </b-col>
          <b-col sm="8" offset-md="1" md="6" class="mt-5"> </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>
<script>
export default {}
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
  margin-top: 200px;
  border-radius: 15px;
}

.left-img {
  max-width: 140%;
  margin-top: 30px;
  margin-left: -100px;
  border-radius: 15px;
}
</style>
