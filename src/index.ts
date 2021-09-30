
import { Komponent } from './components/Komponent';
import { TOOLTYPE, PINTYPE, KUCHLANISH } from './components/Enums'
import { XOR } from './Tools/Xor';
import { Battery } from './Tools/Battery';
import { OR } from './Tools/Or';
import { AND } from './Tools/And';
import { SEGMENT7 } from './Tools/Segment7';
let batt = new Battery('elementBattery', TOOLTYPE.BATTERY)
let segment=new SEGMENT7('sifr',TOOLTYPE.SEG7)
batt.Pins.OUT.addPin(segment,segment.Pins.A)
batt.Pins.OUT.addPin(segment,segment.Pins.B)
batt.Pins.OUT.addPin(segment,segment.Pins.C)
batt.Pins.OUT.addPin(segment,segment.Pins.D)
batt.setState(KUCHLANISH.YUQORI)
console.log(segment.NUMBER)

let root=document.getElementById('root')
root.innerText=segment.NUMBER.toString()