<template lang="pug">
.audio
  button.audio__btn( v-if="state ==='pause'"  @click="play")
    img(src="../assets/template/audio.svg")
  button.audio__btn(v-else @click="pause")
    img(src="../assets/template/pause.svg")
</template>

<script>
import audioMixins from '../mixins/audioMixins'
export default {
  name: 'Audio',
  mixins: [audioMixins],
}
</script>

<style lang="sass" scoped></style>
