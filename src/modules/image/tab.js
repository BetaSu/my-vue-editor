import lrz from 'lrz'
import template from './tab.html'

export default {
  template,
  data() {
    return {
      name: 'tab-image',
      curModule: null
    }
  },
  methods: {
    pick() {
      if (this.forbidden) return
      this.$refs.file.click()
    },
    process(e) {
      const file = this.$refs.file.files[0]
      this.$parent.execCommand('insertImage', file)
      if (this.curModule.canUploadSameImage) {
        e.target.value = ''
      }
    }
  },
  mounted () {
    this.curModule = this.$parent.modulesMap['image']
  }
}
