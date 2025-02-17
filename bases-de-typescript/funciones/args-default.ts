;(() => {
  // Asignar parametro upper opcional
  const fullName = (firstName: string, lastName?: string, upper: boolean = false): string => {
    return `${firstName} ${lastName || 'no last name'}`
  }

  const name = fullName('Tony')
})()
