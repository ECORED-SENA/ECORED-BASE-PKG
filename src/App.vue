<template lang="pug">
#app.app
  Header
  .contenedor-principal
    AsideMenu
    section.seccion-principal(:class="{'seccion-principal--barra-avance-open' : !menuState}")
      router-view
  BarraAvance
  Accesibilidad

</template>

<script>
import AsideMenu from './components/plantilla/AsideMenu'
import Header from './components/plantilla/Header'
import BarraAvance from './components/plantilla/BarraAvance'
export default {
  name: 'App',
  components: {
    AsideMenu,
    Header,
    BarraAvance,
  },
  computed: {
    menuState() {
      return this.$store.getters.isMenuOpen
    },
  },
}
</script>

<style lang="sass" scoped>
.app

.contenedor-principal
  display: flex
  align-items: flex-start

.seccion-principal
  width: 100%

  &--barra-avance-open
    .curso-main-container
      padding-bottom: 80px !important
</style>
