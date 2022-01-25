import { def } from "../libs/until";
import { Victor } from "../libs/Victor";
import { Font } from "./Font";
export interface TxtOpt{
    txt?:string
    pt?:Victor
}
export class Text{
    public type:string='Text'
    public txt:string=''
    public pt:Victor=new Victor()
    public layerNam:String='base'
    public _font:Font=new Font()
    public isFont:boolean=false
    constructor(opt:TxtOpt){
        this.txt=def(opt.txt,'')
        this.pt=def(opt.pt,new Victor())
    }
    public txt_(txt:string){
        this.txt=txt
        return this
    }
    public pt_(pt:Victor=new Victor()){
        this.pt=pt.clone()
        return this
    }
}