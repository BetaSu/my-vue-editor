import tab from './tab'
import config from './config'

export default {
  name: 'font',
  tab,
  config,
  inspect (add) {
    add('style', {
      fontSize: ['xx-large', 'x-large', 'large', 'medium', 'small']
    })
  }
}
