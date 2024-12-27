;(() => {
  // Simbolo de interrogacion tras nombre.
  const fullName = (firstName: string, lastName?: string): string => {
    return `${firstName} ${lastName || 'no last name'}`
  }

  const name = fullName('Tony')
})()
