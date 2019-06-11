import * as R from 'ramda'

describe('#map', () => {
  it('should iterate and create a new array', () => {
    const a = [1, 2, 3]
    const b = a.map(n => n + 1)
    expect(b).toEqual([2, 3, 4])
  })

  it('should be able to do arbitrary things with it', () => {
    const a = [1, 2, 3]
    const b = a.map((n) => {
      if (n % 2 === 0) {
        return 'even'
      } else {
        return n
      }
    })
    expect(b).toEqual([1, 'even', 3])
  })
})

describe('#reduce', () => {
  it('should take elements and put it into a accumulator', () => {
    const a = [1, 2, 3]
    const b = a.reduce((acc, n) => {
      return acc + n
    }, 0)
    expect(b).toEqual(6)
  })

  it('should work with objects', () => {
    const a = [{ id: 1, name: 'Foo' }, { id: 2, name: 'Bar' }, { id: 3, name: 'Baz' }]
    // { 1: {id: 1, name: 'Foo'}, 2: {id: 2, name: 'Bar'}...
    const b = a.reduce((acc, n) => {
      acc[n.id] = n
      return acc
    }, {})
    const indexBy = (prop) => (obj) => obj.reduce((acc, n) => {
      acc[n[prop]] = n
      return acc
    }, {})

    const indexById = indexBy('id')
    expect(b).toEqual({ 1: { id: 1, name: 'Foo' }, 2: { id: 2, name: 'Bar' }, 3: { id: 3, name: 'Baz' }})
  })
})

describe('#filter', () => {
  it('should filters objects', () => {
    const a = [1, 2, 3]
    const b = a.filter(n => n % 2 === 0)
    expect(b).toEqual([2])
  })
})


describe('#mapR', () => {
  it('should work', () => {
    const add1ToArray = R.map(n => n + 1)
    expect(add1ToArray([1, 2, 3])).toEqual([2, 3, 4])
  })
})

describe('#prop', () => {
  it('should work', () => {
    expect(R.prop('id')({ id: 1, foo: 'bar' })).toEqual(1)
    const a = [{ id: 1, name: 'Foo' }, { id: 2, name: 'Bar' }, { id: 3, name: 'Baz' }]
    expect(R.map(R.prop('id'), a)).toEqual([1, 2, 3])
  })
})

describe('#propOr', () => {
  it('should work', () => {
    const a = [{ id: 1, name: 'Foo' }, { name: 'Bar' }, { id: 3, name: 'Baz' }]
    expect(R.map(R.propOr('idMissing', 'id'), a)).toEqual([1, 'idMissing', 3])
  })
})

describe('#assoc', () => {
  it('should set a key', () => {
    const a = { foo: 'hello', bar: 'yo' }
    const b = R.assoc('foo', 'goodbye', a)
    expect(b).toEqual({ foo: 'goodbye', bar: 'yo' })

    // const a = [{ id: 1, name: 'Foo' }, { id: 2, name: 'Bar' }, { id: 3, name: 'Baz' }]
    // const b = a.map((todo) => {
    //   const newTodo = { ...todo, completed: true }
    //   return newTodo
    // })
    // const c = map(assoc('completed', true), a)
  })
})

describe('#assocPath', () => {
  it('should set a key at a specified path', () => {
    const todos = { 1: { id: 1, name: 'Foo' }, 2: { id: 2, name: 'Bar' }, 3: { id: 3, name: 'Baz' }}
    // const newTodos = { ...todos }
    // const new2Todo = { ...todos[2], completed: true }
    // newTodos[2] = new2Todo
    expect(R.assocPath([2, 'completed'], true, todos)).toEqual(
      { 1: { id: 1, name: 'Foo' }, 2: { id: 2, name: 'Bar', completed: true }, 3: { id: 3, name: 'Baz' }}
    )
  })
})

describe('#dissocPath', () => {
  it('should remove from a path', () => {
    const todos = { 1: { id: 1, name: 'Foo' }, 2: { id: 2, name: 'Bar', completed: true }, 3: { id: 3, name: 'Baz' }}
    expect(R.dissocPath([2, 'completed'], todos)).toEqual(
      { 1: { id: 1, name: 'Foo' }, 2: { id: 2, name: 'Bar' }, 3: { id: 3, name: 'Baz' }}
    )
    expect(R.dissocPath([2], todos)).toEqual(
      { 1: { id: 1, name: 'Foo' }, 3: { id: 3, name: 'Baz' }}
    )
  })
})

describe('#pipe', () => {
  it('should do multiple things', () => {
    const res = R.pipe(
      x => x.map(n => n + 1), // [2, 3, 4]
      x => x.reduce((acc, n) => acc + n) // 9
    )([1, 2, 3])
    expect(res).toEqual(9)
  })
})

describe('#evolve', () => {
  it('should allow you to perform an operation on a key in an object', () => {
    const todos = { 1: { id: 1, name: 'Foo', completed: false }, 2: { id: 2, name: 'Bar', completed: true }, 3: { id: 3, name: 'Baz', completed: true }}
    const transformation = { 2: { completed: R.not } }
    expect(R.evolve(transformation, todos)).toEqual(
      { 1: { id: 1, name: 'Foo', completed: false }, 2: { id: 2, name: 'Bar', completed: false }, 3: { id: 3, name: 'Baz', completed: true }}
    )
  })
})


