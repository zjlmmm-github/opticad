import { GeoRect, Rect } from "../base2D/Rect";
import { Text } from "../base2D/Text";
import { Compose } from "../compose/Compose";

export interface BoxTxt extends GeoRect{
    txt?:string
}
export class TabDrawNo extends Compose{
    public contour:Rect=new Rect({wid:50,hei:10})//轮廓
    public txt:Text=new Text({})
    constructor(opt:BoxTxt){
        super()
        if(opt.txt)this.txt.txt_(opt.txt)
        this.initEls()
    }
    public initEls(){
        this.dispose()
        this.els.push(this.contour)
        this.els.push(this.txt)
    }
}