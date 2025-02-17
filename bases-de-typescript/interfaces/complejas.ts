;(() => {
  interface Client {
    name: string
    age: number
    // No recomendado por ser mas dificil de mantener
    //address: {
    //  num: number
    //  zip: number
    //  street: string
    //}
    address: Address
    getFullAddress(id: string): string
  }
  interface Address {
    num: number
    zip: number
    street: string
  }
  const client: Client = {
    name: 'Juan José',
    age: 34,
    address: {
      num: 2,
      zip: 987,
      street: 'Canary Street'
    },
    // No se suelen definir los metodos en las interfaces. Si se necesita implementar un metodo, se crea clase
    getFullAddress() {
      return this.address.street
    }
  }
})()
