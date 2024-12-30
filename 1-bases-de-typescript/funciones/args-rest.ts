;(() => {
  const fullName = (firstName: string, ...restArgs: string[]): string => {
    return `${firstName} ${restArgs.join(' ')}`
  }

  const worker = fullName('Braulio', 'Del Monte', 'Ataúlfo')
})()
