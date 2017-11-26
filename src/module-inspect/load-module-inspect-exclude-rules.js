/*
 * load rule keywords of style inspect
 **/

export default function (curModule, modules) {
  let result = []
  let curExclude = curModule.exclude
  if (Array.isArray(curExclude)) return curExclude
  if (typeof curExclude === 'string') {
    let moduleNameList = []
    modules.forEach(m => {
      if (m.name) {
        moduleNameList.push(m.name)
      }
    })
    moduleNameList = Array.from(new Set(moduleNameList))
    switch (curExclude) {
      // exclude all modules
      case 'ALL':
        result = moduleNameList
        break
      // exclude all modules but current module
      case 'ALL_BUT_MYSELF':
        result = moduleNameList
        result.splice(result.indexOf(curModule.name), 1)
        break
    }
  }
  return result
}
