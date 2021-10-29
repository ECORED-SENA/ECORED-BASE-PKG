<template lang="pug">
.zoom
  .zoom__img(
    ref="img" 
    @mouseover="enter = true" 
    @mouseleave="enter = false" 
    @mousemove.prevent="move"
    @touchstart="enter = true" 
    @touchend="enter = false" 
    @touchmove.prevent="move"
  )
    img(:src="bajaResolucion")
  .zoom__lens(ref="zoom" :style="[lensObj,extraLensObj]" :class="{show:enter}")
    img(ref="zoomImg" :src="altaResolucion" :style="zoomObj")

  slot

</template>

<script>
export default {
  name: 'Zoom',
  props: {
    lente: {
      type: String,
      default: '150',
    },
    bajaResolucion: {
      type: String,
      default: '',
    },
    altaResolucion: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      zoomLevel: 1,
      enter: false,
      lensObj: {
        top: 0,
        left: 0,
      },
      zoomObj: {
        top: 0,
        left: 0,
      },
    }
  },
  computed: {
    extraLensObj() {
      return {
        width: this.lente + 'px',
        height: this.lente + 'px',
        transform: `scale(${this.enter ? this.zoomLevel : 0})`,
      }
    },
  },
  watch: {
    enter(newVal) {
      if (!newVal) {
        this.zoomLevel = 1
      }
    },
  },
  mounted() {
    this.$refs.img.addEventListener('wheel', e => {
      e.preventDefault()
      e.deltaY > 0 ? this.zoomLevel++ : this.zoomLevel--
      if (this.zoomLevel < 1) this.zoomLevel = 1
      if (this.zoomLevel > 5) this.zoomLevel = 5
    })
  },
  methods: {
    move(e) {
      const zoom = this.$refs.zoom
      const zoomImg = this.$refs.zoomImg

      let posX, posY, offset, percX, percY

      if (e.touches) {
        const imgCords = e.target.getBoundingClientRect()
        posX = e.touches[0].clientX - imgCords.x
        posY = e.touches[0].clientY - imgCords.y
        offset = 1.1
      } else {
        posX = e.offsetX
        posY = e.offsetY
        offset = 2
      }

      this.lensObj.top = `${posY - zoom.offsetHeight / offset}px`
      this.lensObj.left = `${posX - zoom.offsetWidth / offset}px`
      percX = (posX - e.srcElement.offsetLeft) / e.srcElement.offsetWidth
      percY = (posY - e.srcElement.offsetTop) / e.srcElement.offsetHeight

      let zoomLeft = -percX * zoomImg.offsetWidth + zoom.offsetWidth / 2
      let zoomTop = -percY * zoomImg.offsetHeight + zoom.offsetHeight / 2

      this.zoomObj.left = `${zoomLeft}px`
      this.zoomObj.top = `${zoomTop}px`
    },
  },
}
</script>

<style lang="sass"></style>
