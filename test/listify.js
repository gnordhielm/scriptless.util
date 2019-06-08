import listify from '../src/listify'

test('handles empty case', () => {
  const result = listify()
  expect(result).toBe('')
})

test('handles single item', () => {
  const result = listify(['foo'])
  expect(result).toBe('foo')
})

test('handles two items', () => {
  const result = listify(['foo', 'bar'])
  expect(result).toBe('foo and bar')
})

test('handles three items', () => {
  const result = listify(['foo', 'bar', 'baz'])
  expect(result).toBe('foo, bar, and baz')
})

test('handles more than three items', () => {
  const result = listify(['foo', 'bar', 'baz', 'quux', 'quuux'])
  expect(result).toBe('foo, bar, baz, quux, and quuux')
})
