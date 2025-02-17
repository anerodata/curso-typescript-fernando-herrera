;(() => {
  // Despúes de llamar a esta funcion ya no va a funcionar el codigo. No debe tener un punto alcanzable al finalizar la funcion
  const abc = (message: string): never => {
    throw new Error(message)
  }
  abc('Error')

  // Never se utiliza cuando la funcion puede acabar con un error
  const fetchData = async (id: string): Promise<object> | never => {
    const resp = await fetch('url')
    if (resp.ok) {
      throw 'Error de conexion'
    }
    return resp
  }
})()
