;(() => {
  let nada: undefined = undefined
  let nully: null = null

  // sin la restricción stricNullChecks no daría error asignar undefined o null a un boleano
  let isActive: boolean = null
})()
