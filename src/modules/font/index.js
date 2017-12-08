import tab from './tab'
import config from './config'

export default {
  name: 'font',
  icon: 'iui-icon iui-icon-spanner',
  tab,
  config,
  inspect (add) {
    add('style', {
      fontSize: ['xx-large', 'x-large', 'large', 'medium', 'small']
    })
  }
}
