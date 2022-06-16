<template lang="pug">
div
  .dialogo
    .row
      .col
        .row.mb-2(v-for="(line, lineIdx) in dialogoComputed")
          .col-auto
            img(:src="line.personaje.img")
            span {{line.personaje.nombre}}
          .col
            .row
              .col-9
                template(v-for="phrase in line.textoIng")
                  .d-inline.bordered(
                    v-if="phrase === '*'"
                    @drop.prevent="onDrop(lineIdx)" 
                    @dragenter.prevent="onDragEnter(lineIdx)"
                    @dragleave.prevent="onDragLeave()"
                    @dragover.prevent
                    :class="{'active': dropId === lineIdx}"
                  )
                    span.response(v-if="answers[lineIdx]") {{answers[lineIdx].palabra}}
                    span.no-response(v-else)
                  span(v-else v-html="phrase")
              .col-3
                Audio.color-acento-contenido.mx-3(:audio="line.audio")
      .col-2
        .palabra(
          v-for="word in wordsToShow"
          @dragstart="onStartDrag(word.id)"
          @dragend="onEndDrag()"
          draggable 
        ) {{word.palabra}}

  .dialogo
    .tarjeta-dialogo.color-primario.mb-4
      .tarjeta-dialogo__cabecera
        p.mb-1 Tipo de actividad
        h3.mb-0 Titulo de actividad - Completa la conversación
      .p-5
        .row
          .col-lg-6
            .container-dialogos
              .dialogo__personajes.mb-3
                .dialogo__personajes--personaje1
                  img(src="../assets/componentes/ej-05.svg").me-3
                  p.mb-0 Hanna
                .dialogo
                  .dialogo__bocadillo

                  .dialogo__texto
                    .dialogo__texto--tarjeta
                      h5.mb-0 I need the biology book and the sheets.
                      Audio.mx-3(
                        :audio="require('../assets/componentes/audios/audio-ej.mp3')"
                        @audio-hover="mostrarIndicadorAudio = false"
                      )
                    button.dialogo__texto--traduccion.py-2.px-3.me-3
                      p.mb-0 Traduccion
              .dialogo__personajes.mb-3
                .dialogo
                  .dialogo__bocadillo

                  .dialogo__texto
                    .dialogo__texto--tarjeta
                      h5.mb-0 I need the biology book and the sheets.
                      Audio.mx-3(
                        :audio="require('../assets/componentes/audios/audio-ej.mp3')"
                        @audio-hover="mostrarIndicadorAudio = false"
                      )
                    button.dialogo__texto--traduccion.py-2.px-3.ms-3
                      p.mb-0 Traduccion
                .dialogo__personajes--personaje2
                  img(src="../assets/componentes/ej-05.svg").ms-3
                  p.mb-0.text-end Hanna
                
</template>

<script>
import Audio from '../components/Audio.vue'
export default {
  name: 'Dialogo',
  components: {
    Audio,
  },
  data: () => ({
    dragId: null,
    dropId: null,
    answers: {},
    dialogo: {
      personajes: [
        {
          nombre: 'Hanna',
          img: require('@/assets/componentes/ej-05.svg'),
        },
        {
          nombre: 'Jhon',
          img: require('@/assets/componentes/ej-05.svg'),
        },
      ],
      dialogo: [
        {
          personaje: 'Hanna',
          textoIng: 'I need the biology book and the sheets.',
          textoEsp: 'Necesito el libro de biologia y las diapositivas',
          audio: require('@/assets/componentes/audios/audio-ej.mp3'),
        },
        {
          personaje: 'Jhon',
          textoIng: 'I need the *** book and the sheets.',
          textoEsp: 'Necesito el libro de *** y las diapositivas',
          audio: require('@/assets/componentes/audios/audio-ej.mp3'),
          palabra: 'Biology',
        },
        {
          personaje: 'Hanna',
          textoIng: 'I need the biology books and the ***.',
          textoEsp: 'Necesito el libro de biologia y las ***',
          audio: require('@/assets/componentes/audios/audio-ej.mp3'),
          palabra: 'sheets',
        },
        {
          personaje: 'Hanna',
          textoIng: 'I *** the biology books and the sheets',
          textoEsp: '*** el libro de biologia y las diapositivas',
          audio: require('@/assets/componentes/audios/audio-ej.mp3'),
          palabra: 'need',
        },
      ],
    },
  }),
  computed: {
    dialogoComputed() {
      if (!this.dialogo.dialogo) return

      return this.dialogo.dialogo.map(line => ({
        ...line,
        textoIng: this.splitPhrase(line.textoIng),
        textoEsp: this.splitPhrase(line.textoEsp),
        personaje: this.dialogo.personajes.find(
          personaje => personaje.nombre === line.personaje,
        ),
      }))
    },
    words() {
      return this.shuffle(
        this.dialogoComputed
          .map((line, lineIdx) => ({ palabra: line.palabra, id: lineIdx }))
          .filter(line => line.palabra),
      )
    },
    answerWordsIds() {
      return Object.values(this.answers).map(answer => answer.dragId)
    },
    wordsToShow() {
      return this.words.filter(word => !this.answerWordsIds.includes(word.id))
    },
  },
  methods: {
    onStartDrag(idx) {
      // console.log('START')
      this.dragId = idx
    },
    onEndDrag() {
      // console.log('END')
      this.dragId = null
    },
    onDrop(idx) {
      // console.log('DROP')
      if (!this.dragId) return

      this.$set(this.answers, idx, {
        dragId: this.dragId,
        dropId: idx,
        palabra: this.dialogoComputed[this.dragId].palabra,
      })
    },
    onDragEnter(idx) {
      // console.log('DRAG ENTER')
      this.dropId = idx
    },
    onDragLeave() {
      // console.log('DRAG LEAVE')
      this.dropId = null
    },
    shuffle(array) {
      for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1))
        ;[array[i], array[j]] = [array[j], array[i]]
      }
      return array
    },
    splitPhrase(phrase) {
      return phrase
        .replace(/^\s+|\s+$/g, '&nbsp;')
        .replace('***', '___*___')
        .split('___')
        .filter(Boolean)
    },
  },
}
</script>

<style lang="sass">
.dialogo
  &__drop
    width: 100%
    height: 25px
    border: 1px solid #ccc

.bordered
  border: 2px solid red
  min-height: 1.8em
  vertical-align: baseline
  text-align: center
.response
  padding: 0 .2em
.no-response
  display: inline-block
  min-width: 50px
.active
  border-color: green
</style>
