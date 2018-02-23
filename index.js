import forEachSeries from 'async'

export default (data, applyFunction) => {
  return new Promise((resolve, reject) => {
    forEachSeries(data, async (item, callback) => {
      try {
        await applyFunction(item)
        callback()
      }
      catch (e) {
        callback(e)
      }
    }, (e) => {
      if (e) {
        reject(e)
      }
      else {
        resolve()
      }
    })
  })
}
