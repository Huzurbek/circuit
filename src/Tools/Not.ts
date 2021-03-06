import { KUCHLANISH, PINTYPE, TOOLTYPE } from "../components/Enums";
import { Komponent } from "../components/Komponent";
import { Pin } from "../components/Pin";

export class NOT extends Komponent {
    constructor(element: string, type: TOOLTYPE = null){
        super(element,type)
    }
    public Pins = {
        A: new Pin('A', PINTYPE.KIRISH),
        B: new Pin('B', PINTYPE.CHIQISH)
    }
    Fire() {
        this.Pins.B.Write(this.Pins.A.state != 0 ? KUCHLANISH.PAST : KUCHLANISH.YUQORI)
    }
}