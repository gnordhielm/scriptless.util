// given any number of class names, filter out false values and transform into a single, react-friendly className

function makeClassName() {
  return [...arguments]
    .map(className => (className === false ? null : className))
    .join(' ')
    .replace(/\s+/g, ' ')
    .trim()
}

export default makeClassName
