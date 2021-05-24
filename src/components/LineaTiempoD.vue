<template lang="pug">
.linea-tiempo-d
  .linea-tiempo-d__item.row(
    v-for="(item, index) in elements"
    :key="'linea-tiempo-d-key-'+item.id"
    :class="{'linea-tiempo-d__item--selected' : selected === item.id}"
  )
    .col-auto.linea-tiempo-d__item__col-number
      .linea-tiempo-d__item__number.tarjeta.tarjeta--gris(
        :class="[,{'px-3' : item.numero.length > 1}]"
         @click="selected = item.id"
      )
        span {{item.numero}}
      .linea-tiempo-d__item__dots(
        v-if="index < elements.length -1"
      )

    .col(:class="{'mb-4' : index < elements.length -1}")
      .linea-tiempo-d__item__content.tarjeta.tarjeta--gris
        .linea-tiempo-d__item__content__title.px-3(
          @click="selected = item.id"
        )
          span {{item.titulo}}
        .linea-tiempo-d__item__content__slot(
          :style="{ height: rendered && selected === item.id ? getActiveHeight(item.id) : 0 } "
        )
          .p-3.pt-0(:ref="item.id" v-html="item.html" )

  .hidden-slot
    slot
</template>

<script>
import componentSlotMixins from '../mixins/componentSlotMixins'
export default {
  name: 'LineaTiempoD',
  mixins: [componentSlotMixins],
  data: () => ({}),
  computed: {},
  watch: {},
  methods: {},
}
</script>

<style lang="sass"></style>
