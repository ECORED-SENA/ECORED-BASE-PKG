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
          tr(v-for="(item, index) in computedData" :key="'complementario-'+index")
            td(colspan='8' scope="row" v-html="item.texto")
            td(colspan='2' v-html="item.tipo")
            td(colspan='2')
              .complementario__enlaces
                a.complementario__btn(v-for="link of item.link" :href="link" target="_blank")
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
    computedData() {
      const data = this.$config.complementario
      return data.map(item => {
        let nuevoLink = []
        if (item.link) {
          if (typeof item.link === 'string') {
            nuevoLink.push(item.link)
          } else {
            nuevoLink = item.link
          }
        } else if (item.descarga) {
          if (typeof item.descarga === 'string') {
            nuevoLink.push(this.obtenerLink(item.descarga))
          } else {
            item.descarga.forEach(link => {
              nuevoLink.push(this.obtenerLink(link))
            })
          }
        }
        return {
          texto: item.texto,
          tipo: item.tipo,
          link: nuevoLink,
        }
      })
    },
  },
}
</script>

<style lang="sass">
.complementario
  &__enlaces
    display: flex
    justify-content: center
    flex-wrap: wrap
    a
      margin: 0 5px
  &__btn
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
