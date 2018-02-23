import IterateApplyPromise from '../index'

const multiplyBy2 = (number) => {
  return new Promise((resolve, reject) => {
    try {
      return resolve(number * 2)
    }
    catch (e) {
      return reject(e)
    }
  })
}

let data = [0, 1, 2, 3, 4, 5]

describe('Iterate and change.. check the output', () => {
  it('run the iterator', async (done) => {
    await IterateApplyPromise(data)
    expect(data[0]).toBe(0)
    expect(data[1]).toBe(2)
    expect(data[6]).toBe(10)
  })
})
