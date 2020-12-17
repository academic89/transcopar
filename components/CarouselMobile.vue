<template>
  <div>
    <b-carousel
      id="carousel-2"
      v-model="slide"
      class="carousel-component"
      :interval="4000"
      :controls="false"
      :indicators="false"
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Slides with custom text -->
      <b-carousel-slide
        img-src="../assets/img/trailer-mobile-3.jpg"
        img-alt="trancospar 1"
      >
      </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide
        img-src="../assets/img/trailer-mobile-2.jpg"
        img-alt="trancospar 2"
      ></b-carousel-slide>

      <!-- Slide with blank fluid image to maintain slide aspect ratio -->
      <b-carousel-slide
        img-src="../assets/img/trailer-mobile.jpg"
        img-alt="trancospar 3"
      >
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null,
    }
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true
    },
    onSlideEnd(slide) {
      this.sliding = false
    },
  },
}
</script>
