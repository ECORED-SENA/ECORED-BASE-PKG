<template lang="pug">
.tarjeta-audio
  .row.align-items-center
    .col
      .tarjeta-audio__texto.h5.fst-italic.mb-2 {{texto}}
      .tarjeta-audio__input
        input(
          v-model="sliderVal",
          ref="sliderElement",
          type="range" max="100", 
          :style="{'background-size': `${this.sliderVal}% 100%`}",
          @input="onSliderMove"
        )
    .col-auto.ps-0
      .audio.position-relative(@mouseover.once="$emit('audio-hover')")
        slot
        .spinner-border.spinner-border-sm(v-if="!audioCanPlay" role="status")
          span.visually-hidden Loading..
        button.audio__btn(v-else-if="state ==='pause'"  @click="play" @mouseover="mostrarIndicador = false")
          img(src="../assets/template/audio.svg")
        button.audio__btn(v-else @click="pause")
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

<style lang="sass"></style>
