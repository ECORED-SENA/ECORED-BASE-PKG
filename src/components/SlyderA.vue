<template lang="pug">
.slyder-a
  .slyder-a__btn--sigt(
    v-if="navObj.next"
    @click="selected = navObj.next" 
    @mouseover="mostrarIndicador = false"
  )
    .indicador__container.indicador--left(v-if="mostrarIndicador")
      .indicador--click
  .slyder-a__btn--atrs(v-if="navObj.back" @click="selected = navObj.back")
  .slyder-a__bullets
    .slyder-a__bullets__item(
      v-for="bullet in elements"
      :key="'sl-blt-key-'+bullet.id"
      :class="{'slyder-a__bullets__item--active' : selected === bullet.id}"
      @click="selected = bullet.id"
    )
  ScrollHorizontal(v-if="elements.length && rendered" :selectedId="'sl-' + selected" item-full-width)
    .slyder-a__item(
      v-for="item in elements"
      :key="'sl-key-'+item.id"
      :id="'sl-'+item.id"
      v-child="item.elm"
    )
  .hidden-slot
    slot
</template>

<script>
import ScrollHorizontal from './plantilla/ScrollHorizontal'
import componentSlotMixins from '../mixins/componentSlotMixins'
export default {
  name: 'SlyderA',
  components: { ScrollHorizontal },
  mixins: [componentSlotMixins],
  data: () => ({
    mostrarIndicador: true,
    secuencial: true,
  }),
}
</script>

<style lang="sass"></style>
