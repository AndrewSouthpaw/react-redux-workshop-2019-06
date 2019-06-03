import axios from 'axios'

export const saveTodoToServer = async (text) => {
  const { data } = await axios.post('/todos', { text })
  return data
}
