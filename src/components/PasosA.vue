<template lang="pug">
.pasos-a
  // first section
  template(v-for="(item, index) in datos")
    template(v-if="index % 2 === 0 ")
      .row.align-items-center.d-flex
        .col-3.col-sm-2.col-lg-1.pasos-a__numero.text-center.d-inline-flex.justify-content-center.align-items-center(
          :class="getClass(index)"
        )
          .pasos-a__circle
            .h4(v-if="tipo === 'n'") {{index + 1}}
            .h4(v-else-if="tipo === 'l'") {{abecedario[index]}}

        .col-8.py-3
          .h5 {{item.titulo}}
          p(v-html="item.texto")

      // path between 1-2
      template(v-if="index + 1 != datos.length")
        .row.pasos-a__linea
          .col-3.col-sm-2.col-lg-1.pasos-a__linea__esquina
            .pasos-a__linea__esquina__linea.top-right
          .col-6.col-sm-8.col-lg-10
            .hor-line
          .col-3.col-sm-2.col-lg-1.pasos-a__linea__esquina
            .pasos-a__linea__esquina__linea.left-bottom

    template(v-else)

      // second section
      .row.align-items-center.justify-content-end.d-flex
        .col-8.text-end.py-3
          .h5 {{item.titulo}}
          p(v-html="item.texto")
        .col-3.col-sm-2.col-lg-1.pasos-a__numero.text-center.d-inline-flex.justify-content-center.align-items-center(
          :class="getClass(index)"
        )
          .pasos-a__circle
            .h4(v-if="tipo === 'n'") {{index + 1}}
            .h4(v-else-if="tipo === 'l'") {{abecedario[index]}}

      // path between 2-3
      template(v-if="index + 1 != datos.length")
        .row.pasos-a__linea
          .col-3.col-sm-2.col-lg-1.pasos-a__linea__esquina
            .pasos-a__linea__esquina__linea.right-bottom
          .col-6.col-sm-8.col-lg-10
            .hor-line
          .col-3.col-sm-2.col-lg-1.pasos-a__linea__esquina
            .pasos-a__linea__esquina__linea.top-left

</template>

<script>
export default {
  name: 'PasosA',
  props: {
    datos: {
      type: Array,
      default: () => [],
    },
    tipo: {
      type: String,
      default: 'n',
    },
  },
  data: () => ({
    abecedario: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  }),
  methods: {
    getClass(idx) {
      return idx === 0
        ? 'bottom'
        : idx + 1 === this.datos.length
        ? 'top'
        : 'full'
    },
  },
}
</script>

<style lang="sass" scoped></style>
