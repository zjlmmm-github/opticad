import { Geom } from "../base2D"
import { Rect } from "../base2D/Rect"
import { Compose } from "../compose/compose"
import { Victor } from "../libs/Victor"
import { TabDrawNo } from "./TabDrawNo"
/**
 * 绘图区域大小
 * 绘图区域起点
 */
export class PaperFrame extends Compose{
    public type:string='paper'
    public paperSize:string='A4'
    public wid:number=210
    public hei:number=297
    public drawSize:Victor=new Victor()
    public drawPst:Victor=new Victor()
    public parts:any={}
    constructor(){
        super()
    }
    public initParts(){
        let p1=new Victor()
        let {wid,hei}=this
        let outer=new Rect({wid,hei})
        let p2=new Victor(5,5)
        let inner=new Rect({p1:p2,wid:wid-10,hei:hei-10})
        let drawNo=new TabDrawNo({p1:new Victor(),wid:20,hei:5,})
        let 
        let technical=
        this.parts={outer,inner,drawNo,technical,}
    }
    public paperSize_(size:string='A4'){
        switch(size){
            case 'A3':
                this.wid=420
                this.hei=297
                break;
            default:
                this.wid=210
                this.hei=297
                break;
        }
    }
    
}