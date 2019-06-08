// given an array of strings, return a plain-english list
function listify(array = []) {
  switch (array.length) {
    case 0:
      return ''
    case 1:
      return array[0]
    case 2:
      return `${array[0]} and ${array[1]}`
    default:
      return `${array.slice(0, array.length - 1).join(', ')}, and ${array.slice(
        -1,
      )}`
  }
}

export default listify
