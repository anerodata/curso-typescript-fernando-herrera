import powers from '../data/powers'
console.log(powers)

export class Singer {
  constructor(
    public name: string,
    public style: string,
    public age: number,
    public powerId: number
  ) {}
  get power(): string {
    // PROBLEMA
    //
    // return powers.find(power => power.id === this.powerId).desc || 'not found'
    //
    // SOLUCION 1
    //
    // const power = powers.find(power => power.id === this.powerId)
    // const notFoundMsg: string = ''
    // if (power) {
    //   return power.desc || notFoundMsg
    // }
    // return notFoundMsg
    //
    // SOLUCION 2: ? Hace que si el objeto que se pretende encontrar es undefined, el retorno sea directamente 'not found'
    //
    // return powers.find(power => power.id === this.powerId)?.desc || 'not found'
    //
    // SOLUCION 3: ! Le dice a TS "confia en mi, 'desc' siempre llegara poblado". Mas arriesgado
    //
    return powers.find(power => power.id === this.powerId)!.desc || 'not found'
  }
}

export class Singer2 {
  constructor(
    public name: string,
    public style: string,
    public age: number,
    public powerId: number
  ) {}
}
