describe('JavaScript Review', () => {
  describe('bind and this', () => {
    it('should demonstrate understanding of this and bind', () => {
      const test = {}

      test.getGender = function () {
        return this.gender
      }
      test.getAge = function () {
        return this.age
      }

      class Human {
        constructor(gender, age) {
          this.gender = gender
          this.age = age
          this.getGender = test.getGender
        }

        printInfo() {
          return `This human is ${this.gender} and is ${this.age} years old`
        }
      }

      Human.prototype.getAge = test.getAge.bind(this) // broken, fix me

      const human = new Human('non-binary', 30)
      expect(human.printInfo()).toEqual('This human is non-binary and is 30 years old')
      expect(human.getGender()).toEqual('non-binary')
      expect(human.getAge()).toEqual(30)

      const getAge = human.getAge // broken, fix me
      expect(getAge()).toEqual(30)
    })

    it('should know how to deal with setTimeout in Jest', () => {
      let set = false
      setTimeout(() => { set = true }, 1000)

      // how to simulate time passing?

      expect(set).toEqual(true)
    })

    it('should know how to pass context to setTimeout', () => {
      function Human(age) {
        this.age = age
      }
      function incrementAge() {
        this.age = this.age + 1
      }
      Human.prototype.growOlder = function () {
        setTimeout(incrementAge, 1000)
      }
      const human = new Human(30)
      human.growOlder()
      expect(human.age).toEqual(31)
    })
  })

  describe('bind CHALLENGE MODE', () => {
    // todo: write your own implementation of bind!

    Function.prototype.myBind = function (newThis) {
      /* ... */
      return function boundFunction() {
        /* ... */
      }
    }
    function getAge() { return this.age }
    function ageAfter(years, months) { return this.age + years + months / 12 }
    const human = { age: 32 }

    it('should be possible to implement using JS and bind context', () => {
      expect(getAge.myBind(human)()).toEqual(32)
    })

    it('should be possible to implement using JS and pass in some arguments', () => {
      expect(ageAfter.myBind(human, 2, 6)()).toEqual(34.5)
      expect(ageAfter.myBind(human, 2)(6)).toEqual(34.5)
    })
  })

  describe('spread operator', () => {
    it('write a function that returns a copy of an object with a key removed', () => {
      const dissoc = (key, obj) => {
        /* ... */
      }
      expect(dissoc('a', { a: 1, b: 2 })).toEqual({ b: 2 })
    })

    it('write a function that allows you to concat items to a list', () => {
      const myConcat = undefined /* todo */
      expect(myConcat(['foo'], 1, 2)).toEqual(['foo', 1, 2])
      expect(myConcat(['foo'], 1, 2, 3)).toEqual(['foo', 1, 2, 3])
    })

    it('write a operate function that allows you to perform an operation on a list', () => {
      const add = (a, b) => a + b
      const subtract = (a, b) => a - b
      const multiply = (a, b) => a * b
      const operate = undefined // todo
      expect(operate(add, [1, 2, 3, 4])).toEqual(10)
      expect(operate(subtract, [1, 2, 3, 4])).toEqual(-8)
      expect(operate(multiply, [1, 2, 3, 4])).toEqual(24)
    })
  })

  describe('async/await', () => {
    it('should allow waiting for async stuff where you do not have access to await it', async () => {
      // this code doesn't work yet, figure out how to wait for the setTiemout to run
      const somethingAsync = () => {
        const obj = { stats: 0 }
        setTimeout(() => { obj.stats = 42 }, 0)
        return obj
      }
      const res = somethingAsync()
      expect(res.stats).toEqual(42)
    })

    it('CHALLENGE MODE: should be able to test behavior of an interval counter', async () => {
      /**
       * this one is pretty tough. You are not allowed to get rid of the `async` above, or change the
       * setInterval behavior to solve the test. You are also not allowed to make this test run for many seconds,
       * it should still actually execute in < ~50 ms.
       *
       * Remember that `useFakeTimers` messes up the async behavior of Jest promises, so you'll need to find
       * a different way to force the event loop to the next tick. There's a couple ways to do it.
       *
       * If you want to google around, feel free -- it'll still be a little hard, just not quite as hard. ;-)
       */
      jest.useFakeTimers()
      const sleep = async timeInMs => new Promise(res => setTimeout(res, timeInMs))

      let counter = 0
      setInterval(async () => {
        console.log('sleeping')
        await sleep(1)
        console.log('done')
        counter++
      }, 1000)

      expect(counter).toEqual(0)

      // do something here to make time appear to elapse
      expect(counter).toEqual(1)

      // do something here to make time appear to elapse
      expect(counter).toEqual(2)
    })
  })

  describe('class fields', () => {
    it('create a class that starts with a unique list of numbers using class fields syntax', () => {
      // something is wrong with this code, and test fails. Fix the code to make it pass.
      class List {}
      List.prototype.numbers = [1, 2, 3]
      const [list1, list2] = [new List(), new List()]
      list1.numbers.push(4)
      expect(list1.numbers).toEqual([1, 2, 3, 4])
      expect(list2.numbers).toEqual([1, 2, 3])
    })

    it('should have the context always bound', () => {
      // change the way `sum` is written so it can always have the context of the List object
      class List {
        numbers = [1, 2, 3]
        sum() { this.numbers.reduce((a, b) => a + b) }
      }

      function add1(sumFn) { return 1 + sumFn() }

      const list = new List()
      expect(add1(list.sum)).toEqual(7)
    })
  })
})
