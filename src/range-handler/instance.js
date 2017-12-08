import commands from '../commands'

// for IE 11
if (!Text.prototype.contains) {
  Text.prototype.contains = function contains(otherNode) {
    return this === otherNode
  }
}

export default class RangeHandler {
  /**
   * build range handler
   * @param {Range} range
   * @param {editor} current editor
   */
  constructor(range, editor) {
    if (!range || !(range instanceof Range)) {
      throw new TypeError('cant\'t resolve range')
    }
    this.range = range
    this.editor = editor
  }

  /**
   * execute edit command
   * @param {String} command
   * @param arg
   */
  execCommand(command, arg) {
    RangeHandler.beforeList.forEach(fn => {
      fn.call(this, command, this, arg)
    })
    const existCommand = commands[command]
    const customCommand = this.editor.commands ? this.editor.commands[command] : null
    if (existCommand) {
      existCommand(this, arg)
    }
    else if (customCommand) {
       customCommand(this, arg)
    } else {
      document.execCommand(command, false, arg)
    }
    RangeHandler.afterList.forEach(fn => {
      fn.call(this, command, this, arg)
    })
  }

  /*
   * run fn before exec command  
   **/
  before (fn) {
    if (typeof fn === 'function') {
      RangeHandler.beforeList.push(fn)
    }
  }

  clearBeforeList () {
    RangeHandler.beforeList = []
  }

  /*
   * run fn after exec command  
   **/
  after (fn) {
    if (typeof fn === 'function') {
      RangeHandler.afterList.push(fn)
    }
  }

  clearAfterList () {
    RangeHandler.afterList = []
  }
}

RangeHandler.beforeList = []
RangeHandler.afterList = []
