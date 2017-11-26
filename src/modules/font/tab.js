import config from './config'
import template from './tab.html'
import './style.styl'
export default {
  template,
  props: {
    activeItem: ''
  },
  watch: {
    activeItem (n) {
      let val = this.fontAttrMap[n]
      if (val) {
        this.choosed = val
      } else {
        this.choosed = this.fontAttrMap.medium
      }
    }
  },
  data () {
    return {
      fontAttrMap: config,
      choosed: {},
      showList: false
    }
  },
  methods: {
    showListFn () {
      if (this.$refs.tab.classList.contains('forbidden')) return
      this.showList = true
    },
    changeAttr (val) {
      this.choosed = val
      this.$parent.execCommand('lineHeight', val.lineHeight)
      this.$parent.execCommand('fontSize', val.fontSize)
      this.showList = false
    },
    setFontName (name) {
      this.$parent.execCommand('fontName', name)
    },
    setHeading (heading) {
      this.$parent.execCommand('formatBlock', heading)
    }
  },
  mounted () {
    this.choosed = this.fontAttrMap.medium
  }
}
