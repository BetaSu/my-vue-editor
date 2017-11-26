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
        const existCommand = commands[command]
        const customCommand = this.editor.commands ? this.editor.commands[command] : null
        if (existCommand) {
          return existCommand(this, arg)
        }
        if (customCommand) {
          return customCommand(this, arg)
        }
        document.execCommand(command, false, arg)
    }
}
