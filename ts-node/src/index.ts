// import { Singer as MySinger, Singer2 } from './clases/Singer'
import * as SingerClasses from './clases/Singer'
// Importacion por defecto
// import powers2 from './data/powers'
import powers from './data/powers'

const singer = new SingerClasses.Singer('Prodigy', 'rap', 46, 1)
console.log(powers)
console.log(singer.power)
