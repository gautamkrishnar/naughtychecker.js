import { expect } from 'chai'
import NaughtyChecker from '../src/naughtychecker'
import c from '../src/constants'

let nc = null

describe('Naughty Checker', () => {

  beforeEach(() => {
    nc = new NaughtyChecker()
  })

  it('should find a naughty string', async () => {
    try {
      await nc.validate('COM1')
      expect(false).to.be.true // should not pass
    } catch (e) {
      expect(e.message).to.equal(c.ERROR.FOUND_NAUGHTY_STRING)
    }
  })

  it('should not find any naughty string', async () => {
    const result = await nc.validate('a good string')
    expect(result).to.be.true
  })

  it('should skip online and use local copy to find a naughty string', async () => {
    try {
      const result = await nc.validate('COM1', {useLocal: true})
      expect(result).to.be.false // should not pass
    } catch (e) {
      expect(e.message).to.equal(c.ERROR.FOUND_NAUGHTY_STRING)
    }
  })

  it('should find naught string from array of string', async () => {
    try {
      const result = await nc.validateAll(['good string', 'COM1', 'another good string'])
      expect(result).to.be.false // should not pass
    } catch (e) {
      expect(e.message).to.equal(c.ERROR.FOUND_NAUGHTY_STRING)
    }
  })

})
