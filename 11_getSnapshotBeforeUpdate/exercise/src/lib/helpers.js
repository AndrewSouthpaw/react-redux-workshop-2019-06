export const sleep = async timeInMs => new Promise(res => setTimeout(res, timeInMs))

export const slowServerCall = async data => {
  console.log('sending data', data)
  await sleep(4000)
  console.log('done!')
}
