import tab from './tab'

const foreColorConfig = {
  name: 'foreColor',
  // color bust be lowercase
  colors: ['#000000', '#000033', '#000066', '#000099', '#003300', '#003333', '#003366',
    '#003399', '#006600', '#006633', '#009900', '#330000', '#330033', '#330066',
    '#333300', '#333366', '#660000', '#660033', '#663300', '#666600', '#666633',
    '#666666', '#666699', '#990000', '#990033', '#9900cc', '#996600', '#ffcc00',
    '#ffcccc', '#ffcc99', '#ffff00', '#fa8919', '#ed6c00', '#ccffff', '#ccff99', '#ffffff'],
  default: '#000000',
  tab,
  inspect (add) {
    add('attribute', {
      color: foreColorConfig.colors
    })
  }
}

export default foreColorConfig