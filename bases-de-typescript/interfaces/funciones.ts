;(() => {
  // Esto es muy raro de ver
  interface addTwoNumbers {
    (a: number, b: number): number
  }

  let addNumbers: addTwoNumbers
  addNumbers = (a: number, b: number) => {
    return 10
  }
})()
