import Drawing from "dxf-writer";
import { Geom } from "../base2D";

export class Compose extends Geom{
    public els:Array<any>=[]
    constructor(){
        super()
    }
    public dispose(){
        this.els.splice(0,this.els.length)
    }
    public draw(ctx:CanvasRenderingContext2D){
        this.els.forEach((el)=>{
            el.draw(ctx)
        })
    }
    public toDxf(d:Drawing){
        this.els.forEach((el)=>{
            el.toDxf(d)
        })
    }
}
