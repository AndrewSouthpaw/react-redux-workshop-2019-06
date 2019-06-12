import axios from 'axios'
import MockAxios from 'axios-mock-adapter'

// fake server behavior...

let id = 5
const axiosMock = new MockAxios(axios, { delayResponse: 500 })

axiosMock.onGet('/todos').reply(200, [
  { id: 1, text: 'Learn about fetching data', completed: false },
  { id: 2, text: 'Discover async', completed: false },
  { id: 3, text: '???', completed: false },
  { id: 4, text: 'Profit', completed: false },
])

axiosMock.onPost('/todos').reply((config) => {
  const data = JSON.parse(config.data)
  return [200, { id: id++, text: data.text, completed: false }]
})
