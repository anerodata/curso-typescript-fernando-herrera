export const printObj = (argument: any) => {
  console.log(argument)
}

// export const genericFn= (argument: any) => {
//   return argument
// }

// <T> es hace que la funcion sea generica. Es decir, ahora el argumento es exactamente igual al tipo de dato que me este mandando como argumento y, adicionalmente, el retorno es tambn de tipo generico
export const genericFn = <T>(argument: T) => {
  return argument
}
