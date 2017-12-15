import template from './tab.html'
import './style.styl'

export default {
  template,
  watch: {
    activeItem (n) {
      n = n || this.curModule.default
      this.choosed = n
    }
  },
  data () {
    return {
      colors: [],
      curModule: null,
      choosed: {},
      showList: false
    }
  },
  methods: {
    showListFn () {
      if (this.$refs.tab.classList.contains('forbidden')) return
      this.showList = true
    },
    changeColor (color) {
      this.choosed = color
      this.$parent.execCommand('foreColor', color)
      this.showList = false
    }
  },
  mounted () {
    this.curModule = this.$parent.modulesMap['foreColor']
    this.colors = this.curModule.colors
    this.choosed = this.curModule.default
  }
}
