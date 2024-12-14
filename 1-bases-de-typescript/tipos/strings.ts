;(() => {
  const name: string = 'Antonio'
  const surname: any = 'Sánchez'
  name.trim()
  // No se sugiere ningún metodo de string
  // surname.tr

  // Esto daría un error por consola pero TS no nos lo muestra
  console.log(name[40].toUpperCase())

  // Esto no, solo aplicaría toUpperCase si existe el char 40
  console.log(name[40]?.toUpperCase())
})()
