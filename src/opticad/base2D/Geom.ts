
import * as Drawing from '../../dxf/src/Drawing'
import { Victor } from '../libs/Victor'
import { DrawEl, Layer } from './Layer';
import { Layers } from './layers';
export class Geom{
    public position:Victor=new Victor()
    public scale:number=1
    public type:string
    public layerNam:string='base'//模型设置,后续属性为填充设置
    public translate:Victor=new Victor()
    public _lineWid:number=1
    public isLineWid:boolean=false
    public _color:string='#fff'
    public isColor:boolean=false
    public _lineStyle:string='solid'
    public isLineStyle:boolean=false
    public isHighlight:boolean=false
    public hasContour:boolean=false
    public isShow:boolean=true
    constructor(){
        this.type='Geom'
    }
    public scale_(scale:number=1){
        this.scale=scale
        return this
    }
    public translate_(trans:Victor=new Victor()){
        this.translate=trans.clone()
        return this
    }
    

    public setLayer(layer:string){
        this.layerNam=layer
        return this
    }
    public lineWid_(wid:number=1){
        this._lineWid=wid
        this.isLineWid=true
        return this
    }
    public lineStyle_(linestyle:string){
        this._lineStyle=linestyle
        this.isLineStyle=true
        return this
    }
    public color_(color:string){
        this._color=color
        this.isColor=true
        return this
    }
    public clearCustom(){
        this.isColor=false
        this.isLineWid=false
        this.isLineStyle=false
        return this
    }
    public draw(ctx:any){
        
    }
    public toDxf(d:Drawing){
        
    }
    public setStyle(drawEl:CanvasRenderingContext2D|Drawing,drawType=DrawEl.CAD){
        let layer:Layer=Layers.getInstance().GetLayer(this.layerNam)
        layer.SetStyle(drawEl,drawType)
    }
}