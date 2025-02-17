;(() => {
  type Rapper = {
    name: string
    group: string
    age: number
  }
  const raekwon: Rapper = {
    name: 'raekwon',
    group: 'Wu Tang Clan',
    age: 55
  }
  const methodMan: Rapper = {
    name: 'Method Man',
    group: 'Wu Tang Clan',
    age: 53
  }
  const uGod: Rapper = {
    name: 'U-God',
    group: 'Wu Tang Clan',
    age: 56
  }

  const rappers: Rapper[] = [raekwon, methodMan, uGod]

  for (const rapper of rappers) {
    console.log(rapper.name)
    console.log(rapper.group)
    // En el transpilado sería undefined
    console.log(rapper.otraCosa)
  }
})()
