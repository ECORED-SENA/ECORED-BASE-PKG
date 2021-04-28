<template lang="pug">
.linea-tiempo-c
  .linea-tiempo-c__header.mb-4
    .linea-tiempo-c__header__btn--left(@click="selected = leftBtnId")
      i.fas.fa-angle-left
    .linea-tiempo-c__header__items
      .linea-tiempo-c__header__item(
        v-for="(elm,index) of elements"
        :key="'ltc-header-'+elm.id"
        :class="itemClasses(elm.id)"
        @click="selected = elm.id"
      )
        span.linea-tiempo-c__header__item__year {{elm.titulo}}
        .linea-tiempo-c__header__item__line-container
          .linea-tiempo-c__header__item__dot
    .linea-tiempo-c__header__btn--right(@click="selected = rightBtnId")
      i.fas.fa-angle-right

  .linea-tiempo-c__content
    ScrollHorizontal(
      v-if="elements.length"
      :selectedId="'sl-' + selected"
    )
      .linea-tiempo-c__content__item(
        v-for="item in elements"
        :key="'sl-key-'+item.id"
        :id="'sl-'+item.id"
        v-html="item.html"
      )
    .tabs__slot
      slot
</template>

<script>
import componentSlotMixins from '../mixins/componentSlotMixins'
import ScrollHorizontal from './plantilla/ScrollHorizontal'
export default {
  name: 'LineaTiempoC',
  components: { ScrollHorizontal },
  mixins: [componentSlotMixins],
  computed: {
    leftBtnId() {
      return this.selected - 1 === this.mainId
        ? this.selected
        : this.selected - 1
    },
    rightBtnId() {
      return this.selected + 1 ===
        this.elements[this.elements.length - 1].id + 1
        ? this.selected
        : this.selected + 1
    },
  },
  methods: {
    itemClasses(id) {
      return [
        { 'linea-tiempo-c__header__item--active': id === this.selected },
        { 'linea-tiempo-c__header__item--before': id < this.selected },
      ]
    },
  },
}
</script>

<style lang="sass" scoped></style>
