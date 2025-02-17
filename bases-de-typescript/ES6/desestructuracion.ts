;(() => {
  type Rapper = {
    name: string
    group: string
    age: number
  }
  const rapper: Rapper = {
    name: 'Raekwon',
    group: 'Wu Tang Clan',
    age: 55
  }
  const { age } = rapper
  console.log(age.toString())

  const printRapper = ({ group, ...rest }: Rapper) => {
    console.log(group, rest)
  }

  printRapper(rapper)

  const rappers: string[] = ['Method Man', 'Raekwon', 'U-God']
  const [, raekwon, uGod] = rappers
  console.log({ raekwon, uGod })
})()
