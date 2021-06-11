<template lang="pug">
.separador-container
  .separador
</template>

<script>
export default {
  name: 'Separador',
}
</script>

<style lang="sass" scoped>
.separador-container
  padding: 45px 0
.separador
  height: 15px
  overflow: hidden
  position: relative
  &:after
    content: ''
    position: absolute
    top: 0
    left: 50%
    display: block
    background-color: $lighter-gray
    width: 40%
    height: 15px
    filter: blur(5px)
    transform: translate(-50%, -50%)
    border-radius: 50%
</style>
