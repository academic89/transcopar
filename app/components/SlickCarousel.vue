<template>
  <div class="carousel-wrapper mb-5">
    <VueSlickCarousel v-bind="slickOptions">
      <Card padding="p-1 card-slick" align="center">
        <img
          class="img-slick"
          src="../assets/img/camioneta.png"
          alt="camioneta"
        />
        <h2 class="h4 text-danger mb-2">Camioneta</h2>
        <p>
          <small>Capacidad de carga:</small> <br />
          <span class="font-weight-bold">3 1/2 toneladas</span>
        </p>
      </Card>
      <Card padding="p-1 card-slick" align="center">
        <img
          class="img-slick mb-2"
          src="../assets/img/torton2.png"
          alt="torton"
        />
        <h2 class="h4 text-danger mb-2">Torton</h2>
        <p>
          <small>Capacidad de carga:</small> <br />
          <span class="font-weight-bold">12 toneladas</span>
        </p>
      </Card>
      <Card padding="p-1 card-slick" align="center">
        <img class="img-slick" src="../assets/img/trailer.png" alt="trailer" />
        <h2 class="h4 text-danger mb-2">Trailer</h2>
        <p>
          <small>Capacidad de carga:</small> <br />
          <span class="font-weight-bold">22 toneladas</span>
        </p>
      </Card>
    </VueSlickCarousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slickOptions: {
        slidesToShow: 3,
        arrows: true,
        dots: false,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      },
    }
  },
}
</script>

<style>
.img-slick {
  margin-top: -90px;
}
</style>
