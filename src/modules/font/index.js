import tab from './tab'

export default {
  name: 'font',
  icon: 'iui-icon iui-icon-spanner',
  tab,
  inspect (add) {
    add('style', {
      'fontSize': ['xx-large', 'x-large', 'large', 'medium']
    })
  }
}
