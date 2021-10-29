<template lang="pug">
.slyder-f
  
  .slyder-f__btn.pe-3(@click="clickAnterior")
    i.fas.fa-chevron-left
  #slyderY.slyder-f__main
    ScrollHorizontal(
      v-if="elements.length && rendered" 
      :selectedId="'sl-' + selected"
      row
    )
      .slyder-f__slyde(
        v-for="(item, index) in elements"
        :key="'sl-key-'+item.id"
        :id="'sl-'+item.id"
        :class="columnas"
        v-child="item.elm"
      )
  .slyder-f__btn.ps-3(@click="clickSiguiente")
    i.fas.fa-chevron-right

  .hidden-slot
    slot
</template>

<script>
import ScrollHorizontal from './plantilla/ScrollHorizontal'
import componentSlotMixins from '../mixins/componentSlotMixins'
import slyderMixins from '../mixins/slyderMixins'
export default {
  name: 'SlyderF',
  components: { ScrollHorizontal },
  mixins: [componentSlotMixins, slyderMixins],
  props: {
    columnas: {
      type: String,
      default: '',
    },
  },
  methods: {
    clickAnterior() {
      const ids = this.elements.map(element => element.id)
      const idxOfSelected = ids.indexOf(this.selected)
      if (idxOfSelected > 0) {
        this.selected = ids[idxOfSelected - 1]
      }
    },
    clickSiguiente() {
      const ids = this.elements.map(element => element.id)
      const container = document.querySelector('#slyderY')
      const elm = document.querySelector(`#sl-${this.elements[0].id}`)
      const elmComputedStyles = elm.currentStyle || window.getComputedStyle(elm)
      const elmPaddingLeft = parseInt(elmComputedStyles.paddingLeft)
      const elmtsPerContainer = parseInt(
        (container.offsetWidth + elmPaddingLeft * 2) / elm.offsetWidth,
      )
      const newIds =
        elmtsPerContainer > 1
          ? ids.splice(0, ids.length - elmtsPerContainer)
          : ids
      const idxOfSelected = newIds.indexOf(this.selected)
      if (idxOfSelected < newIds.length - 1) {
        this.selected = newIds[idxOfSelected + 1]
      }
    },
  },
}
</script>

<style lang="sass"></style>
