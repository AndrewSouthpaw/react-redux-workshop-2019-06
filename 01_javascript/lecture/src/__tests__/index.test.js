describe('JavaScript Review', () => {
  describe('bind and this', () => {
    it('should bind the context of the caller', () => {
      const andrew = { age: 32 }
      function getAge() { return this.age }

      expect(() => { getAge() }).toThrow()
      expect(getAge.bind(andrew)()).toEqual(32)
    })

    it('should get really confusing with arrow functions', () => {
      const andrew = { age: 32 }
      const getAge = () => this.age

      expect(() => { getAge() }).toThrow()
      expect(() => { getAge.bind(andrew)() }).toThrow()
    })

    it('should allow a function that accesses this to be given context anywhere', () => {
      const andrew = {
        age: 32,
        getAge() { return this.age },
      }

      const billy = { age: 20 }
      billy.getAge = andrew.getAge

      expect(andrew.getAge()).toEqual(32)
      expect(billy.getAge()).toEqual(20)
    })

    it('should lose the context as soon as it is assigned to a variable', () => {
      const andrew = {
        age: 32,
        getAge() { return this.age },
      }

      expect(andrew.getAge()).toEqual(32)

      const getAndrewsAgeIncorrectly = andrew.getAge
      expect(() => { getAndrewsAgeIncorrectly() }).toThrow()

      const getAndrewsAgeCorrectly = getAndrewsAgeIncorrectly.bind(andrew)
      expect(getAndrewsAgeCorrectly()).toEqual(32)
    })

    it('should have the same problem with classes, unless they use the class property syntax', () => {
      class Human {
        constructor(age) {
          this.age = age
        }
        foo() { return this.age }
        bar = () => { return this.age }
      }

      const andrew = new Human(32)
      expect(andrew.foo()).toEqual(32)
      expect(andrew.bar()).toEqual(32)
      const storedFoo = andrew.foo
      const storedBar = andrew.bar
      expect(() => { storedFoo() }).toThrow()
      expect(storedBar()).toEqual(32)
    })

    it('should allow partially applying arguments', () => {
      const add = (a, b) => a + b
      const add2ToSomething = add.bind(null, 2)
      expect(add2ToSomething(3)).toEqual(5)
    })

    it('should be useful in providing context to setTimeout', () => {
      jest.useFakeTimers()
      function Flower() {
        this.opened = false
        this.petalCount = Math.floor(Math.random() * 8) + 1
      }

      // Declare bloom after a delay of 1 second
      Flower.prototype.bloom = function () {
        window.setTimeout(this.openPetals.bind(this), 1000)
      }

      Flower.prototype.openPetals = function () {
        this.opened = true
      }

      var flower = new Flower()
      flower.bloom()

      expect(flower.opened).toEqual(false)
      jest.runAllTimers()
      expect(flower.opened).toEqual(true)
    })
  })

  describe('spread operator', () => {
    it('should collect remaining properties of an object', () => {
      const obj = { a: 1, b: 2, c: 3 }
      const { a, ...rest } = obj
      expect(a).toEqual(1)
      expect(rest).toEqual({ b: 2, c: 3 })
    })

    it('should collect remaining arguments of an array', () => {
      const arr = [1, 2, 3]
      const [first, ...rest] = arr
      expect(first).toEqual(1)
      expect(rest).toEqual([2, 3])
    })

    it('should make a shallow copy of an array', () => {
      const arr = [1, 2, { a: 3 }]
      const copy = [...arr]
      expect(copy).toEqual([1, 2, { a: 3 }])
      expect(copy === arr).toEqual(false)
      expect(copy[2] === arr[2]).toEqual(true)
    })

    it('should collect arguments in a function as an array', () => {
      const sum = (...nums) => nums.reduce((acc, n) => acc + n)
      expect(sum(1, 2, 3, 4)).toEqual(10)
    })
  })

  describe('async/await', () => {
    const flushPromises = () => new Promise(resolve => setTimeout(resolve, 0))

    it('should be able to await for promises to resolve', async () => {
      const getStatsFromServer = () => Promise.resolve(42)
      expect(await getStatsFromServer()).toEqual(42)
    })

    it('should be able to flush promises in tests to keep things moving', async () => {
      const human = { enlightened: false }
      const giveEnlightenment = (person) => { setTimeout(() => { person.enlightened = true }, 0) }
      giveEnlightenment(human)
      await flushPromises()
      expect(human.enlightened).toEqual(true)
    })

    it('should get messed up by jest useFakeTimers', async () => {
      jest.useFakeTimers()

      // If you comment out this line, test breaks
      // await new Promise(r => setTimeout(r, 1000))
      expect(1).toBe(1)
    })
  })

  describe('class fields', () => {
    it('should allow setting properties on the instance of a class', () => {
      class Human {
        brain = {}
      }
      Human.prototype.ancestor = {}
      const [human1, human2] = [new Human(), new Human()]
      expect(human1.brain === human2.brain).toEqual(false)
      expect(human1.ancestor === human2.ancestor).toEqual(true)
    })

    it('should handle binding', () => {
      class Human {
        constructor(age) {
          this.age = age
        }

        getAge() { return this.age }

        autoboundGetAge = () => this.age
      }
      const human = new Human(30)
      expect(human.getAge()).toEqual(30)

      const incorrectGetAge = human.getAge
      expect(() => { incorrectGetAge() }).toThrow()

      const correctGetAge = human.autoboundGetAge
      expect(correctGetAge()).toEqual(30)
    })
  })
})
