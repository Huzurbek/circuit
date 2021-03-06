import { KUCHLANISH, PINTYPE, TOOLTYPE } from "../components/Enums";
import { Komponent } from "../components/Komponent";
import { Pin } from "../components/Pin";

export class AND extends Komponent {
  public pins = {
    A: new Pin("A", PINTYPE.KIRISH),
    B: new Pin("B", PINTYPE.KIRISH),
    C: new Pin("C", PINTYPE.CHIQISH),
  };
  svgFile: string;
  constructor(element: string, type: TOOLTYPE = null, canvasEl: string) {
    super(element, type);
    let canvas = document.getElementById(canvasEl);

    this.svgFile = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25.28 11.46"><defs><style>.cls-1{fill:#66b32e;}.cls-1,.cls-2{stroke:#fff;stroke-linecap:round;stroke-linejoin:round;stroke-width:0.5px;}.cls-2{fill:none;}</style></defs><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path class="cls-1" d="M6.13.25v11h8.64a5.29,5.29,0,0,0,4.65-5.48A5.24,5.24,0,0,0,14.86.25Z"/><line class="cls-2" x1="6.13" y1="2.79" x2="0.25" y2="2.79"/><line class="cls-2" x1="0.25" y1="8.67" x2="6.13" y2="8.67"/><line class="cls-2" x1="19.42" y1="5.73" x2="25.03" y2="5.73"/></g></g></svg>`;
    let par = document.createElement("div");
    par.innerHTML = this.svgFile;
    canvas.appendChild(par);
  }
  Draw() {
    console.log(this.svgFile);
  }
  Fire() {
    if (this.pins.A.state & this.pins.B.state) {
      this.pins.C.Write(KUCHLANISH.YUQORI);
    } else {
      this.pins.C.Write(KUCHLANISH.PAST);
    }
  }
}
