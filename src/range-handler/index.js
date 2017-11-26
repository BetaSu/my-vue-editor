import Instance from './instance'
import hMethods from './handle-methods'
import aMethods from './assist-methods'
Object.assign(Instance.prototype, hMethods, aMethods)
export default Instance
