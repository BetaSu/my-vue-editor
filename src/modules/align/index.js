import tab from './tab'

export default {
  name: 'align',
  icon: 'iui-icon iui-icon-align',
  tab,
  inspect (add) {
    add('style', {
      'textAlign': ['center', 'right']
    })
  }
}
