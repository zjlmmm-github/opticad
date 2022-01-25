import { Rect } from "../base2D/Rect";
import { Compose } from "../compose/Compose";
import { def } from "../libs/until";
import { Victor } from "../libs/Victor";
export interface Prop{
    nam:string
    val:string
}
export interface TabPropOpt{
    title:string,
    props:Array<Prop>
}
export class TabProp extends Compose{
    public hei:number=5
    public wid:number=100
    public rowH:number=5
    public title:string=''
    public props:Array<Prop>=[]
    public Y:number=1
    public row:number=0
    public col:number=0
    public __contour:Rect=new Rect()
    constructor(opt:TabPropOpt){
        super()
        this.title=def(opt.title,'标题')
    }
    public wid_(wid:number=100){
        this.wid=wid
        return this
    }
    public hei_(hei:number=100){
        this.hei=hei
        return this
    }
    public initEls(){

    }
}