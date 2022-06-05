<template lang="pug">
.texto-audio
  .texto-audio__btn
    .spinner-border.spinner-border-sm(v-if="!audioCanPlay" role="status")
      span.visually-hidden Loading..
    button.texto-audio__btn__button(v-else-if="state ==='pause'"  @click="play")
      img(src="../assets/template/audio.svg")
    button.texto-audio__btn__button(v-else @click="pause")
      img(src="../assets/template/pause.svg")

  input( v-model="sliderVal" ref="sliderElement" type="range" max="100" @input="onSliderMove")
</template>

<script>
import audioMixins from '../mixins/audioMixins'
export default {
  name: 'TextoAudio',
  mixins: [audioMixins],
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

<style lang="sass" scoped>
.texto-audio
  &__btn
    &__button
      padding: 0
      background-color: transparent
</style>
