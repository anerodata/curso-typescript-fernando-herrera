;(() => {
  const registerUser = (): void => {
    // Un return dispararía un error
    // return 1
  }
  const a = registerUser()
  console.log(a)
  // void, no hay valor de retorno
})()
