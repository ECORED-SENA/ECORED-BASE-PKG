<template lang="pug">
  .dialogo
</template>

<script>
export default {
  name: 'Dialogo',
  data: () => ({
    dialogo: {
      personajes: [
        {
          nombre: 'Hanna',
          img: require('../assets/template/ecopetrol.jpg'),
        },
        {
          nombre: 'Jhon',
          img: require('../assets/template/ecopetrol.jpg'),
        },
      ],
      dialogo: [
        {
          personaje: 'Hanna',
          textoIng: 'I need the biology book and the sheets.',
          textoEsp: 'Necesito el libro de biologia y las diapositivas',
          audio: require(''),
        },
        {
          personaje: 'Jhon',
          textoIng: 'I need the *** book and the sheets.',
          textoEsp: 'Necesito el libro de *** y las diapositivas',
          audio: require(''),
          palabras: ['Biologia'],
        },
      ],
    },
  }),
}
</script>

<style lang="sass" scoped></style>
