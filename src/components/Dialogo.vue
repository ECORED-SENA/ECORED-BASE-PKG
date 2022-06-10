<template lang="pug">
.dialogo
  //- .dialogo__drop(
  //-   @drop="onDrop($event, 1)" 
  //-   @dragenter.prevent="onDragEnter"
  //-   @dragleave.prevent="onDragLeave" 
  //-   @dragover.prevent
  //- )
  //- .dialogo__drag(draggable @dragstart="startDrag")
  //-   span Hello

  .row
    .col
      .row.mb-2(v-for="(line, index) in dialogoComputed")
        .col-auto
          img(:src="line.personaje.img")
          span {{line.personaje.nombre}}
        .col
          .row
            .col
              template(v-for="phrase in line.textoIng")
                .d-inline.bordered(
                  v-if="phrase === '*'"
                  @drop="onDrop($event, 1)" 
                  @dragenter.prevent="onDragEnter"
                  @dragleave.prevent="onDragLeave" 
                  @dragover.prevent
                )
                span(v-else v-html="phrase")
            .col-auto
              Audio.color-acento-contenido.mx-3(:audio="line.audio")
    .col-auto
      .palabra(v-for="(palabra, index) in palabras" draggable @dragstart="startDrag") {{palabra.palabra}}


</template>

<script>
export default {
  name: 'Dialogo',
  data: () => ({
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
    palabras() {
      return this.dialogoComputed
        .map((line, lineIdx) => ({ palabra: line.palabra, idx: lineIdx }))
        .filter(line => line.palabra)
    },
  },
  methods: {
    startDrag(e) {
      console.log(e)
      // e.dataTransfer.setData('text/plain', e.target.id)
    },
    onDrop(e, index) {
      console.log(e)
      console.log(index)
    },
    onDragEnter(e) {
      console.log('drag ENTER')
      // console.log(e)
    },
    onDragLeave(e) {
      console.log('drag LEAVE')
      // console.log(e)
    },
    splitPhrase(phrase) {
      console.log(phrase.replace(' ', '&nbsp;'))
      return phrase
        .replace(/ /g, '&nbsp;')
        .replace('***', '___*___')
        .split('___')
        .filter(phrase => phrase.length)
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
  padding:  0 15px
</style>
