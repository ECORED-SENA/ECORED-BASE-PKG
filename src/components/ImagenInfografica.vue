<template lang="pug">
.img-infografica
  .img-infografica__img(:ref="'img-ref-'+mainId")
    slot(name="imagen")
  .img-infografica__content(v-if="elements.length")
    .img-infografica__item(
        v-for="(item, index) in elements"
        :key="'img-infografica-btn-'+item.id"
        :style="[{top: item.y},{left: item.x}]"
        @mouseover="selected = item.id"
        @mouseleave="selected = 0"
      )
      .img-infografica__item__dot
      .indicador--hover(v-if="index === 0 && showIndicator")
    .img-infografica__card(
      v-for="item in elements"
      :key="'img-infografica-card-'+item.id"
      :ref="'card-ref-'+item.id"
      :style="getCardCords(item.id)"
      :class="{'img-infografica__card--selected' : selected === item.id}"
      @mouseover="selected = item.id"
      @mouseleave="selected = 0"
      v-html="item.html"
    )

  .hidden-slot
    slot
</template>

<script>
import componentSlotMixins from '../mixins/componentSlotMixins'
export default {
  name: 'ImagenInfografica',
  mixins: [componentSlotMixins],
  data: () => ({
    firstSelection: false,
    showIndicator: true,
  }),
  watch: {
    selected() {
      if (this.showIndicator) {
        this.showIndicator = false
      }
    },
  },
  methods: {
    getCardCords(cardId) {
      const ref = 'card-ref-' + cardId
      if (!(ref in this.$refs)) return [{ top: 0 }, { left: 0 }]

      const currentCard = this.elements.find(card => card.id === cardId)
      const imgElement = this.$refs['img-ref-' + this.mainId]
      const imgObj = {
        w: imgElement.clientWidth,
        h: imgElement.clientHeight,
      }
      const cardElement = this.$refs[ref][0]
      const cardObj = {
        x: parseInt(currentCard.x, 10),
        y: parseInt(currentCard.y, 10),
        w: cardElement.clientWidth,
        h: cardElement.clientHeight,
      }

      const cardPosY = (cardObj.y / 100) * imgObj.h
      const cardPosX = (cardObj.x / 100) * imgObj.w
      return [
        {
          top:
            cardPosY + cardObj.h > imgObj.h
              ? imgObj.h - cardObj.h + 'px'
              : currentCard.y,
        },
        {
          left:
            cardPosX + cardObj.w > imgObj.w
              ? imgObj.w - cardObj.w + 'px'
              : currentCard.x,
        },
      ]
    },
  },
}
</script>

<style lang="sass"></style>
