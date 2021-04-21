export default {
  computed: {
    menuData() {
      return this.$config.menuPrincipal.menu
    },
    iniciarLnk() {
      const lnk = this.menuData.find(item => item.nombreRuta === 'introduccion')
      const tema1 = this.menuData.find(item => item.nombreRuta === 'tema1')
      return lnk || tema1
    },
  },
}
