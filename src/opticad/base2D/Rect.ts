import { Geom } from '.';
import * as Drawing from '../../dxf/src/Drawing';
import { Victor } from '../libs/Victor';
import { DrawEl } from './Layer';

export interface GeoRect{
    p1?:Victor,
    hei?:number,
    wid?:number
}

export class Rect extends Geom {
    public p1:Victor
    public hei:number
    public wid:number
    constructor(opt:GeoRect={}){
        super()
        this.type='Rect'
        this.p1=opt.p1 || new Victor(0,0)
        this.hei=opt.hei || 10
        this.wid=opt.wid || 10
    }

    public draw(ctx:CanvasRenderingContext2D){
        let {p1}=this
        ctx.save()
        this.setStyle(ctx,DrawEl.CTX)
        ctx.rect(p1.x?p1.x:0, p1.y?p1.y:0,this.wid,this.hei)
        ctx.stroke()
        ctx.restore()
    }
    public toDxf(d:Drawing){
        let {p1,wid,hei}=this
        let p2=p1.clone().add(new Victor(wid,hei))
        this.setStyle(d,DrawEl.CAD)
        let linewid=1
        d.drawPolyline([p1.toArray(),[p2.x,p1.y], p2.toArray(),[p1.x,p2.y]],true,linewid,linewid)
    }
     
}