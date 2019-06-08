import makeClassName from '../src/makeClassName'

test('handles empty case', () => {
  const result = makeClassName()
  expect(result).toBe('')
})

test('removes falsy values', () => {
  const result = makeClassName('foo', false && 'bar')
  expect(result).toBe('foo')
})

test('adds spaces', () => {
  const result = makeClassName('foo', 'bar')
  expect(result).toBe('foo bar')
})

test('removes excess whitespace', () => {
  const result = makeClassName('foo  ', '   bar    ')
  expect(result).toBe('foo bar')
})

test('removes undefined', () => {
  const result = makeClassName('foo', undefined, 'bar')
  expect(result).toBe('foo bar')
})

test('removes false', () => {
  const result = makeClassName('foo', false, 'bar')
  expect(result).toBe('foo bar')
})
