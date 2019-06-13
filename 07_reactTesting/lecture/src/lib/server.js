import axios from 'axios'

export const saveTodoAsync = async (id, { todo }) => {
  await axios.post('/todos', { id, todo })
  console.log('yo')
}
