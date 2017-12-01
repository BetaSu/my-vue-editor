import commands from './index'
import constant from '../constant-config'

export default function (rh, e) {
  let node = rh.range.commonAncestorContainer
  if (node.nodeType === Node.TEXT_NODE) {

    // to keep text wrap by a row
    if (node.parentNode === rh.editZone()) {
      commands.formatBlock(rh, constant.ROW_TAG)
      return
    }
  }
}
