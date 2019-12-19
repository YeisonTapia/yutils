/* Convert String from skane or kebab case to camel case */
const toCamel = (s) => {
  return s.replace(/([-_][a-z])/ig, ($1) => {
    return $1.toUpperCase()
      .replace('-', '')
      .replace('_', '')
  })
}

/* Check is array */
const isArray = (a) => {
  return Array.isArray(a)
}

/* Check is Objet */
const isObject = (o) =>  {
  return o === Object(o) && !isArray(o) && typeof o !== 'function'
}

/* Convert keys in a object or array to snake case  */
export const keysToCamel = (o) => {
  if (isObject(o)) {
    const n = {}
    Object.keys(o)
      .forEach((k) => {
        n[toCamel(k)] = keysToCamel(o[k])
      })
    return n
  } else if (isArray(o)) {
    return o.map((i) => {
      return keysToCamel(i)
    })
  }
  return o
}
