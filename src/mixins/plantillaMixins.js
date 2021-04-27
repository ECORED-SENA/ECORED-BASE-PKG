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
  methods: {
    quitarAcentos(str) {
      const acentos = {
        á: 'a',
        é: 'e',
        í: 'i',
        ó: 'o',
        ú: 'u',
        Á: 'A',
        É: 'E',
        Í: 'I',
        Ó: 'O',
        Ú: 'U',
      }
      return str
        .split('')
        .map(letra => acentos[letra] || letra)
        .join('')
        .toString()
    },
  },
}
