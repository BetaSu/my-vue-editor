/*
 * wrapper means module which add a wrapper tag around target
 * like bold,italic...
 **/
const wrapperTag = {
  'STRIKE': 'linethrough',
  'U': 'underline',
  'UL': 'ul',
  'LI': 'ul',
  'I': 'italic',
  'B': 'bold',
  'STRONG': 'bold'
}

export default function (node) {
  let result = []
  while (node && ((node.dataset && node.dataset.editor !== 'content') || !node.dataset)) {
    let inspectResult = wrapperTag[node.nodeName]
    if (inspectResult) {
      result.push(inspectResult)
    }
    node = node.parentNode
  }
  return result
}
