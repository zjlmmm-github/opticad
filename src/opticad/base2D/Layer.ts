import * as Drawing from "../../dxf/src/Drawing"
import { Font } from "./Font"
export enum DrawEl {
    CTX=0,
    CAD=1
}
export class Layer{
    public nam:string='base'
    public color:string='#fff'
    public lineStyle:string='solid'
    public scale:number=1
    public font:Font=new Font
    constructor(){

    }
    public color_(color='#fff'){
        this.color=color
        return this
    }
    public nam_(nam:string){
        this.nam=nam
        return this
    }
    public scale_(scale:number){
        this.scale=scale
        return this
    }
    public SetStyle(drawEl:CanvasRenderingContext2D|Drawing,drawType=DrawEl.CAD){
        if(drawType==DrawEl.CAD){
            this.SetCadStyle(drawEl)
        }else if(drawType==DrawEl.CTX){
            this.SetCtxStyle(drawEl)
        }
    }
    public SetCtxStyle(ctx:CanvasRenderingContext2D|Drawing){
        
    }
    public SetCadStyle(cad:CanvasRenderingContext2D|Drawing){

    }
}