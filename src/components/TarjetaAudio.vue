<template lang="pug">
.tarjeta-audio
  .row.align-items-center
    .col
      .tarjeta-audio__texto.h4.fst-italic {{texto}}
      .tarjeta-audio__input
        input( v-model="sliderVal" ref="sliderElement" type="range" max="100" @input="onSliderMove")
    .col-auto
      .tarjeta-audio__btn
        .spinner-border.spinner-border-sm(v-if="!audioCanPlay" role="status")
          span.visually-hidden Loading..
        button.tarjeta-audio__btn__button(v-else-if="state ==='pause'"  @click="play")
          img(src="../assets/template/audio.svg")
        button.tarjeta-audio__btn__button(v-else @click="pause")
          img(src="../assets/template/pause.svg")

</template>

<script>
import audioMixins from '../mixins/audioMixins'
export default {
  name: 'TarjetaAudio',
  mixins: [audioMixins],
  props: {
    texto: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    sliderVal: 0,
  }),
  mounted() {
    this.audioElement.ontimeupdate = () => {
      this.sliderVal =
        (this.audioElement.currentTime / this.audioDuration) * 100
    }
  },
  methods: {
    onSliderMove() {
      this.audioElement.currentTime =
        (this.sliderVal / 100) * this.audioDuration
    },
  },
}
</script>

<style lang="sass" scoped></style>
