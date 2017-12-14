import template from './tab.html'
export default {
  template,
  watch: {
    activeItem (n) {
      n = n || 'left'
      let map = {
        'left': 2,
        'center': 0,
        'right': 1
      }
      let index = map[n]
      let options = Object.keys(this.alignMap)
      let key = options[index]
      this.choosed = {
        icon: 'align-' + n,
        index,
        key,
        type: this.alignMap[key]
      }
    }
  },
  data () {
    return {
      alignMap: {
        '居中': 'justifyCenter',
        '居右': 'justifyRight',
        '居左': 'justifyLeft'
      },
      choosed: {}
    }
  },
  methods: {
    setAlign (index) {
      let options = Object.keys(this.alignMap)
      let key = options[index]
      this.$parent.execCommand(this.alignMap[key])
      this.$parent.saveCurrentRange()
      this.$parent.moduleInspect()
    },
    changeAlign () {
      if (this.forbidden) return
      let pre_index = !isNaN(this.choosed.index) ? this.choosed.index : -1
      let len = Object.keys(this.alignMap).length
      let target_index
      if (pre_index + 1 === len) {
        target_index = 0
      } else {
        target_index = ++pre_index
      }
      this.setAlign(target_index)
    }
  }
}


