import { Geom } from '.';
import * as Drawing from '../../dxf/src/Drawing';
import { Victor } from '../libs/Victor';
import { DrawEl } from './Layer';

export interface GeoLine{
    p1:Victor,
    p2:Victor
}

export class Line extends Geom {
    public p1:Victor=new Victor(0,0)
    public p2:Victor=new Victor(0,0)

    constructor(opt:GeoLine){
        super()
        this.type='Line'
        this.p1=opt.p1
        this.p2=opt.p2
    }
    public getMedia(){
        return this.p1.clone().add(this.p2).multiplyScalar(0.5)
    }

    public draw(ctx:CanvasRenderingContext2D){
        let {p1,p2}=this
        ctx.save()
        this.setStyle(ctx,DrawEl.CTX)
        ctx.beginPath()
        ctx.moveTo(p1.x?p1.x:0, p1.y?p1.y:0)
        ctx.lineTo(p2.x?p2.x:0, p2.y?p2.y:0)
        ctx.stroke()
        ctx.restore()
    }
    public toDxf(d:Drawing){
        let {p1,p2}=this
        this.setStyle(d,DrawEl.CAD)
        d.drawLine(p1.x, p1.y, p2.x, p2.y)
    }
}