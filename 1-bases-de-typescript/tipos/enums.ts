;(() => {
  enum AudioLevel {
    min = 0,
    med = 5,
    max = 10
  }
  // Sin asignar valores sería una enumeración: min 0, med 1, max 2
  let currentAudio: AudioLevel = AudioLevel.max
  console.log(currentAudio)
  // 10
  enum enumeracion {
    a = 10,
    b,
    c = 9,
    d
  }
  // En este enum d sería igual a 10
  // Como "c" se iguala a 9, el siguiente valor es 10, no importa que se repita el valor de la enumeración.
})()
