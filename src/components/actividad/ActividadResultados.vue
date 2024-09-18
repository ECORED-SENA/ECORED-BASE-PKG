<template>
  <div class="row align-items-center justify-content-around">
    <div class="col-5">
      <img v-if="aprobado" src="" alt="" />
      <img v-else src="" alt="" />
    </div>
    <div class="col-4">
      <div class="d-flex align-items-center flex-column">
        <div
          class="resultados__icono mb-4"
          :class="[
            `resultados__icono--${aprobado ? 'correcto' : 'incorrecto'}`,
          ]"
        />
        <template v-if="aprobado">
          <h3>¡BUEN TRABAJO!</h3>
          <p class="mb-0 text-center">
            Se evidencia un buen manejo de los conceptos estudiados en esta
            unidad.
          </p>
        </template>
        <template v-else>
          <h3>VUELVE A INTENTARLO</h3>
          <p class="mb-0 text-center">
            Se recomienda revisar el contenido de la unidad para clarificar
            conceptos.
          </p>
        </template>
        <hr class="w-100" />
        <p class="mb-0">Aciertos: {{ rtas.correctas }} / {{ rtas.total }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ActividadResultados',
  props: {
    respuestas: {
      type: Array,
      required: true,
    },
  },
  computed: {
    rtas() {
      const respuestas = {
        correctas: 0,
        incorrectas: 0,
        total: this.respuestas.length,
        porcentaje: 0,
      }
      this.respuestas.forEach(r => {
        if (r.esCorrecta) {
          respuestas.correctas++
        } else {
          respuestas.incorrectas++
        }
      })
      respuestas.porcentaje = (respuestas.correctas / respuestas.total) * 100
      return respuestas
    },
    aprobado() {
      return this.rtas.porcentaje >= 70
    },
  },
}
</script>

<style lang="sass" scoped>
.resultados
  &__icono
    width: 150px
    height: 150px
    background-size: cover
    background-repeat: no-repeat
    &--correcto
      background-image: url('~@/assets/actividad/correcto.svg')
    &--incorrecto
      background-image: url('~@/assets/actividad/incorrecto.svg')
</style>
