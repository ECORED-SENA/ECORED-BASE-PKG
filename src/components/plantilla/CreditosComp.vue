<template lang="pug">
.creditos
  .mb-3
    .text-bold ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES

  template(v-if="creditosData.liderEquipo")
    .mb-4
      CreditosItem(:item="creditosData.liderEquipo")

  template(v-if="creditosData.contenidoInstruccional.length")
    .creditos__titulo.mb-4 CONTENIDO INSTRUCCIONAL
    .row.mb-4
      .col-md-6.col-lg-4(
        v-for="(item, idx) of creditosData.contenidoInstruccional" 
        :key="'contenido-'+idx"
      )
        CreditosItem(:item="item")

  template(v-if="creditosData.desarrolloProducto.length")
    .creditos__titulo.mb-4 DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES
    .row.mb-4
      .col-md-6.col-lg-4(
        v-for="(item, idx) of creditosData.desarrolloProducto"
        :key="'desarrollo-'+idx"
      )
        CreditosItem(:item="item")

  template(v-if="creditosData.gestoresRepositorio.length")
    .creditos__titulo.mb-4 GESTORES DE REPOSITORIO
    .row
      .col-md-6.col-lg-4(
        v-for="(item, idx) of creditosData.gestoresRepositorio"
        :key="'gestores-'+idx"
      )
        CreditosItem(:item="item")
</template>

<script>
import CreditosItem from './CreditosItem'
export default {
  name: 'CreditosComp',
  components: {
    CreditosItem,
  },
  computed: {
    creditosData() {
      return this.$config.creditos
    },
  },
}
</script>

<style lang="sass">
.creditos
  color: $color-sistema-b

  p
    line-height: 1.3em
    margin-bottom: 0
    color: $color-sistema-b

  &__titulo
    font-weight: $base-bold-font-weight
    background-color: $color-sistema-d
    padding: 5px 10px
    border-radius: $base-border-radius
</style>
