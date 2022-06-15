<template lang="pug">
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
}
</script>

<style lang="sass" scoped></style>
