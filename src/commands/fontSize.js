const fontSizeMap = {
  3: 'medium',
  4: 'large',
  5: 'x-large',
  6: 'xx-large'
}


export default function (rh, arg) {
  if (rh.range.collapsed) {
    let node = rh.range.commonAncestorContainer
    let row = rh.getRow(node)
    if (row) {
      let allOffspring = Array.from(row.querySelectorAll('*'))
      allOffspring.forEach(node => {
        node.style.fontSize = ''
      })
      row.style.fontSize = fontSizeMap[arg]
    }
  } else {
    document.execCommand('styleWithCSS', false)
    document.execCommand('fontSize', false, arg)
    document.execCommand('styleWithCSS', true)
  }
}
