;(() => {
  // No se debe tipar con dos tipos un argumento
  const fullName = (firstName: string, lastName: string | boolean): string => {
    return `${firstName} ${lastName}`
  }

  // ts devuelve un error si no le pasas los dos parametros
  const name = fullName('Tony', 'Stark')

  let noname: any
  // Se le podria pasar un noname, por eso no esta demas poner sentencias de control de undefined en lo alto de la funcion
  const name = fullName(noname, 'Stark')
})()
