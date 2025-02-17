;(() => {
  let avengers: any = 4

  // Es un error, una const debe ser inicializada
  // const exists

  // Por defecto es any
  let power

  avengers = 245.444
  avengers.toFixed(2)

  // Casteo de un any
  (<number>avengers).toFixed(3)
  avengers = 'extraordinaries'

  // Casteo de un any
  ;(avengers as string).charAt(3)
})()
