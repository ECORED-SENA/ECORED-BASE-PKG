<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5    
    //- El componente "Muestras" tiene las aplicaciones de todos los componentes de la base
    //- se encuentra en src/components/Muestras.vue
    //- Una vez el componente "Muestras" no se necesite 
    //- Se debe borrar el "import Muestras from '../components/Muestras'" y en "components" en "<script"
    //- esto evitará que se compile en la carpeta final de distribución

    div(style="width: 50%")
      TarjetaAudio.color-primario.mb-3(
        texto="Texto de muestra  "
        :audio="require('../../assets/componentes/audios/audio-ej.mp3')"
        tiempo
        @audio-hover="mostrarIndicadorTarjetaAudio = false"
      )
    //- Muestras
  
</template>

<script>
import Muestras from '../../components/muestras/Muestras' // borrar una vez el componente "Muestras" no se necesite
export default {
  name: 'Tema1',
  components: {
    Muestras, // borrar una vez el componente "Muestras" no se necesite
  },
  data: () => ({
    traduccionAudio: [
      {
        textoIng: '(To forget / olvidar) - She is forgetting the keys.',
        textoEsp: 'Ella está olvidando las llaves.',
        audio: require('@/assets/componentes/audios/audio-ej.mp3'),
      },
    ],
    traduccion: {
      dialogo: [
        {
          textoIng: 'Charles drinks a soda.',
          textoEsp: 'Charles bebe un refresco.',
        },
      ],
    },
    dialogoChat: {
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
          audio: require('@/assets/componentes/audios/audio-ej.mp3'),
        },
        {
          personaje: 'Jhon',
          textoIng:
            'I need the book and the sheets book and the sheets book and the sheets book and the sheets.',
          audio: require('@/assets/componentes/audios/audio-ej.mp3'),
        },
        {
          personaje: 'Hanna',
          textoIng: 'I need the biology books and the.',
          audio: require('@/assets/componentes/audios/audio-ej.mp3'),
        },
        {
          personaje: 'Jhon',
          textoIng: 'I the biology books and the sheets',
          audio: require('@/assets/componentes/audios/audio-ej.mp3'),
        },
        {
          personaje: 'Hanna',
          textoIng: 'I need the biology books and the.',
          audio: require('@/assets/componentes/audios/audio-ej.mp3'),
        },
      ],
    },
    traduccionChat: {
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
          textoEsp: 'Yo necesito el libro de biologia y las diapositivas.',
          audio: require('@/assets/componentes/audios/audio-ej.mp3'),
        },
        {
          personaje: 'Jhon',
          textoIng:
            'I need the book and the sheets book and the sheets book and the sheets book and the sheets.',
          textoEsp:
            'Yo necesito el libro de y las diapositivas Yo necesito el libro de Yo necesito el libro de Yo necesito el libro de .',
          audio: require('@/assets/componentes/audios/audio-ej.mp3'),
          palabra: 'Biology1',
        },
        {
          personaje: 'Hanna',
          textoIng: 'I need the biology books and the ***.',
          textoEsp: 'Yo necesito el libro de biologia y las ***.',
          audio: require('@/assets/componentes/audios/audio-ej.mp3'),
          palabra: 'sheets2',
        },
        {
          personaje: 'Jhon',
          textoIng: 'I the biology books and the sheets',
          textoEsp: 'Yo el libro de biologia y las diapositivas.',
          audio: require('@/assets/componentes/audios/audio-ej.mp3'),
          palabra: 'need3',
        },
        {
          personaje: 'Hanna',
          textoIng: 'I need the biology books and the ***.',
          textoEsp: 'Yo necesito el libro de biologia y las ***.',
          audio: require('@/assets/componentes/audios/audio-ej.mp3'),
          palabra: 'sheets4',
        },
      ],
    },
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
