import * as R from 'ramda'

describe('Functional Programming', () => {
  it('should is super cool', () => {
    expect(true).toEqual(true)
  })

  describe('#map', () => {
    it('should uppercase all the words in the array', () => {
      const arr = ['foo', 'bar', 'baz']
      const uppercase = (x) => { /* */ }
      expect(arr.map(uppercase)).toEqual(['FOO', 'BAR', 'BAZ'])
    })

    it('should hydrate an array of object IDs with their object v1', () => {
      const data = {
        1: { id: 1, name: 'Alice' },
        2: { id: 2, name: 'Bob' },
        3: { id: 3, name: 'Charlie' },
      }
      const ids = [1, 3]
      const hydrate = (personsById, ids) => { /* */ }
      expect(hydrate(data, ids)).toEqual([{ id: 1, name: 'Alice' }, { id: 3, name: 'Charlie' }])
    })

    it('should hydrate an array of object IDs with their object v2', () => {
      const data = {
        1: { id: 1, name: 'Alice' },
        2: { id: 2, name: 'Bob' },
        3: { id: 3, name: 'Charlie' },
      }
      const ids = [1, 3]
      const lookup = (personsById) => { /* */ }
      const lookupPerson = lookup(data)
      expect(ids.map(lookupPerson)).toEqual([{ id: 1, name: 'Alice' }, { id: 3, name: 'Charlie' }])
    })

    it('should extract a property from an array of objects', () => {
      const pick = (key, xs) => { /* */ }
      const data = {
        1: { id: 1, name: 'Alice' },
        2: { id: 2, name: 'Bob' },
        3: { id: 3, name: 'Charlie' },
      }
      expect(pick('name', data)).toEqual([{ name: 'Alice' }, { name: 'Charlie' }])
    })

    it('should load all the URLs and then return', async () => {
      const fakeGet = (x) => Promise.resolve(x.substring(1))
      const urls = ['/foo.img', '/bar.img', '/baz.img']
      const loadImages = (imageUrls) => { /* simulate server calls with fakeGet */ }
      expect(await Promise.all(loadImages(urls))).toEqual(['foo.img', 'bar.img', 'baz.img'])
    })
  })

  describe('#filter', () => {
    it('should return an array with only four-letter words', () => {
      const data = ['aba', 'abba', 'abcd', 'abcde', 'abbad']
      const findFourLetterWords = () => { /* */ }
      expect(findFourLetterWords(data)).toEqual(['abba', 'abcd'])
    })

    it('should filter out objects that do not have an avatar', () => {
      const data = [
        { id: 1, name: 'Alice', profilePhoto: 'alice.img' },
        { id: 2, name: 'Bob', profilePhoto: 'bob.img' },
        { id: 3, name: 'Charlie' },
      ]
      const missingProfilePhoto = () => { /* */ }
      expect(missingProfilePhoto(data)).toEqual(
        [{ id: 1, name: 'Alice', profilePhoto: 'alice.img' }, { id: 2, name: 'Bob', profilePhoto: 'bob.img' }],
      )
    })
  })

  describe('#reduce', () => {
    it('should index by id', () => {
      const data = [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }, { id: 3, name: 'Charlie' }]
      const indexById = (data) => { /* */ }
      expect(indexById(data)).toEqual({
        1: { id: 1, name: 'Alice' },
        2: { id: 2, name: 'Bob' },
        3: { id: 3, name: 'Charlie' },
      })
    })

    it('should transform a set of normalized tags into human-readable names', () => {
      const data = {
        1: { id: 1, name: 'Alice' },
        2: { id: 2, name: 'Bob' },
        3: { id: 3, name: 'Charlie' },
      }
      const transform = (data, str) => {
        // tip: use str.match(/@\d/g) to collect all the tags in the string
      }
      expect(transform(data, '@1 and @3 had fun working together'))
        .toEqual('Alice and Charlie had fun working together')
    })

    it('CHALLENGE MODE: should collect all the IDs that are the children', () => {
      const data = {
        1: { id: 1, children: [2, 6] },
        2: { id: 2, children: [4] },
        3: { id: 3, children: [] },
        4: { id: 4, children: [7] },
        5: { id: 5, children: [] },
        6: { id: 6, children: [] },
        7: { id: 7, children: [] },
      }
      // tip: use recursion
      const getChildrenIds = (byId, id) => { /* */ }
      expect(getChildrenIds(data, 1)).toEqual([2, 4, 7, 6])
    })
  })

  describe('#currying', () => {
    it('should implement pluck using map and prop', () => {
      // prop usage:  R.prop('a', { a: 1, b: 2 }) => 1
      // map usage: R.map(someFn, xs)
      const data = [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }, { id: 3, name: 'Charlie' }]
      const pluck = undefined // implement, and don't use any anonymous functions
      expect(pluck('name', data)).toEqual(['Alice', 'Bob', 'Charlie'])
    })

    it('should implement indexBy', () => {
      const data = [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }, { id: 3, name: 'Charlie' }]
      const indexBy = R.curry((fn, data) => { /* */ })
      expect(indexBy(R.prop('id'), data)).toEqual({
        1: { id: 1, name: 'Alice' },
        2: { id: 2, name: 'Bob' },
        3: { id: 3, name: 'Charlie' },
      })
      const indexById = undefined // use the indexBy definition and don't use anonymous functions
      expect(indexById(data)).toEqual({
        1: { id: 1, name: 'Alice' },
        2: { id: 2, name: 'Bob' },
        3: { id: 3, name: 'Charlie' },
      })
    })
  })

  describe('#assoc', () => {
    it('should update the key of an object', () => {
      const obj1 = { done: false }
      const markDone = undefined // no anonymous functions!
      const result = markDone(obj1)
      expect(result).toEqual({ done: true })
      expect(obj1 === result).toEqual(false)
    })

    it('should be usable with other utility functions', () => {
      const data = [{ id: 1 }, { id: 2 }, { id: 3 }]
      const addFoo = undefined // no anonymous functions!
      expect(addFoo(data)).toEqual([{ id: 1, foo: 'bar' }, { id: 2, foo: 'bar' }, { id: 3, foo: 'bar' }])
    })

    it('should be usable with indexes', () => {
      const data = {
        1: { id: 1, name: 'Alice' },
        2: { id: 2, name: 'Bob' },
        3: { id: 3, name: 'Charlie' },
      }
      // tip: use R.map, it works on objects
      const addFoo = undefined // no anonymous functions!
      expect(addFoo(data)).toEqual({
        1: { id: 1, name: 'Alice', foo: 'bar' },
        2: { id: 2, name: 'Bob', foo: 'bar' },
        3: { id: 3, name: 'Charlie', foo: 'bar' },
      })
    })
  })
})
