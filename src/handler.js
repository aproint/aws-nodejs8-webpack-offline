export const handle = async (event, context) => {
  console.log(event)
  if (event.error) {
    throw new Error('There was a serious error!')
  }
  return 'great success!'
}