;(() => {
  interface Worker {
    name: string
    age: number
    startWork(id: string): void
  }

  interface Student {
    study(): void
  }

  // La clase tiene que implementar lo declarado o definido en las interfaces
  class ObraliaWorker implements Worker, Student {
    constructor(
      public name: string,
      public age: number
    ) {
      this.name = name
      this.age = age
    }

    startWork(id: string): void {
      console.log('startWork', id)
    }

    study() {
      console.log('study')
    }
  }
})()
