<template lang="pug">
.curso-main-container.complementario
  BannerInterno(icono="far fa-folder-open" titulo="Material complementario")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .table-responsive
      table
        thead
          tr
            th(colspan='8' scope="col") Autor, (año del documento o material), Nombre del documento o material
            th(colspan='2' scope="col") Tipo de material
            th(colspan='2' scope="col") Enlace
        tbody
          tr(v-for="(item, index) in complementarioData" :key="'complementario-'+index")
            td(colspan='8' scope="row") {{item.texto}}
            td(colspan='2') {{item.tipo}}
            td(colspan='2')
              .complementario__btn
                a(:href="item.descarga ? obtenerLink(item.descarga) : item.link" target="_blank")
                  i.fas.fa-external-link-alt

</template>
<script>
import BannerInterno from '../components/plantilla/BannerInterno'
export default {
  name: 'MaterialComplementario',
  components: {
    BannerInterno,
  },
  computed: {
    complementarioData() {
      return this.$config.complementario
    },
  },
}
</script>

<style lang="sass">
.complementario
  &__btn
    a
      font-size: 1.5em
      line-height: 1em
table
  width: calc(100% - 1px)
  min-width: 800px
  thead
    background-color: $color-sistema-e
    th
      border-color: $color-sistema-e
  th, td
    padding: 25px 20px
    text-align: center
    &:first-child
      text-align: left
</style>
