
import { Geom } from '.';
import * as Drawing from '../../dxf/src/Drawing';
import { Victor } from '../libs/Victor';
export interface GeoCircle{
    pt:Victor,
    r?:number
}
export class Circle extends Geom {
    public pt:Victor=new Victor(0,0)
    public r:number
    constructor(opt:GeoCircle){
        super()
        this.pt=opt.pt 
        this.r=opt.r||1
    }
    public draw(ctx:CanvasTextRendering){
        
    }
    public toDxf(d:Drawing){
        let {pt,r} = this
        if(!pt.x || !pt.y)return
        d.drawCircle(pt.x, pt.y, r)
    }
}