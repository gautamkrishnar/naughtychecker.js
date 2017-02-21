require('babel-polyfill')

import axios from 'axios'
import * as fs from 'async-file'
import moment from 'moment'
import path from 'path'
import c from './constants'

let cachedLocalCopy = null
let cachedOnlineCopy = null
let cachedOnlineTimestamp = null

const getLocal = async () => {
  if (!cachedLocalCopy) {
    cachedLocalCopy = await fs.readFile(path.resolve(__dirname, 'vendor/blns.json'))
  }
  return cachedLocalCopy
}

const getOnline = async () => {
  if (cachedOnlineTimestamp && cachedOnlineTimestamp.diff(moment, 'seconds') > c.CONFIG.CACHE_LIFETIME) {
    cachedOnlineCopy = null
  }
  if (!cachedOnlineCopy) {
    try {
      const result = await axios.get(c.BLNS_URL)
      cachedOnlineCopy = result.data
      cachedOnlineTimestamp = moment()
    } catch (e) {
      cachedOnlineCopy = await getLocal()
    }
  }
  return cachedOnlineCopy
}

class NaughtyChecker {

  async validate (text = '', options = {useLocal: false}) {
    let result = null
    if (options.useLocal) {
      result = await getLocal()
    } else {
      result = await getOnline()
    }
    if (result.includes(text)) {
      throw new Error(c.ERROR.FOUND_NAUGHTY_STRING)
    } else {
      return true
    }
  }

  async validateAll (texts = [], options = {useLocal: false}) {
    if (!cachedOnlineCopy && !options.useLocal) { await getOnline() }
    let requests = []
    for (const text of texts) {
      requests.push(this.validate(text, options))
    }
    const results = await Promise.all(requests)
    return results.length === requests.length
  }

}

export default NaughtyChecker
