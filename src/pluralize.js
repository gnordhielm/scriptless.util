export default function pluralize() {
  const argument = arguments[0]

  if (!argument) return ''

  const {
    count = 0,
    noun = '',
    plural = '',
    excludeCount,
    verb = '',
    pluralVerb = '',
  } = argument

  const VOWELS = ['a', 'e', 'i', 'o', 'u']
  const PLURAL_VERB_LOOKUP = {
    is: 'are',
    has: 'have',
    was: 'were',
    needs: 'need',
  }

  const needsPlural = count !== 1
  let finalNoun

  if (!needsPlural) {
    finalNoun = noun
  } else if (plural) {
    finalNoun = plural
  } else if (['ch', 'sh'].includes(noun.substr(-2, 2))) {
    finalNoun = noun + 'es'
  } else if (['s', 'x', 'z'].includes(noun.substr(-1, 1))) {
    finalNoun = noun + 'es'
  } else if (
    VOWELS.includes(noun.substr(-2, 1)) &&
    noun.substr(-1, 1) === 'y'
  ) {
    finalNoun = noun + 's'
  } else if (
    !VOWELS.includes(noun.substr(-2, 1)) &&
    noun.substr(-1, 1) === 'y'
  ) {
    finalNoun = noun.substr(0, noun.length - 1) + 'ies'
  } else if (noun.substr(-2, 2) === 'fe') {
    finalNoun = noun.substr(0, noun.length - 2) + 'ves'
  } else if (
    !VOWELS.includes(noun.substr(-2, 1)) &&
    noun.substr(-1, 1) === 'o'
  ) {
    finalNoun = noun + 'es'
  } else {
    finalNoun = noun + 's'
  }

  let finalVerb
  if (verb) {
    if (!needsPlural) {
      finalVerb = verb
    } else if (pluralVerb) {
      finalVerb = pluralVerb
    } else {
      finalVerb = PLURAL_VERB_LOOKUP[verb] || verb
    }
  }

  const withoutCount = finalVerb ? `${finalNoun} ${finalVerb}` : finalNoun

  if (excludeCount) {
    return withoutCount
  } else {
    return `${count} ${withoutCount}`
  }
}
