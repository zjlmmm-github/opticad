import { Rect } from "../base2D/Rect";
import { Compose } from "../compose/Compose";
import { Victor } from "../libs/Victor";
import * as nj from 'numjs'
import { Line } from "../base2D";
import { def } from "../libs/until";
import { Text } from "../base2D/Text";
export interface TabGridOpt{
    row:number,
    col:number,
    arrda:Array<Array<string>>,
    heis?:Array<number>,
    wids?:Array<number>,
    cellH?:number,
    cellW?:number
}
export class TabGrid extends Compose{
    public col:number=1
    public row:number=1
    public arrda:Array<Array<string>>
    public gridCells:Array<Array<any>>=[]
    public heis:Array<number>=[]
    public wids:Array<number>=[]
    public cellH:number=5
    public cellW:number=80
    public __contour:Rect=new Rect()
    public __lines:Array<any>=[]
    public isContour:boolean=false
    public Y:number=1//表格顺序，向上为1,像下为-1
    constructor(tabOpt:TabGridOpt){
        super()
        this.row=tabOpt.row
        this.col=tabOpt.col
        this.arrda=tabOpt.arrda
        this.heis=def(tabOpt.heis, [])
        this.wids=def(tabOpt.wids, [])
        this.cellW=def(tabOpt.cellW, 80)
        this.cellH=def(tabOpt.cellH , 5)
        this.initContent()
    }
    public initContent(){//0-1 初始化表格 
        if(this.heis.length==0){
            this.heis=nj.ones([this.row]).multiply(this.cellH).data as Array<number>
        }
        if(this.wids.length==0){
            this.wids=nj.ones([this.col]).multiply(this.cellW).data as Array<number>
        }
        for(let i=0;i<this.row;i++){
            this.gridCells.push([])
            for(let j=0;j<this.col;j++){
                this.gridCells[i].push(new Text({txt:this.arrda[i][j]}).pt_())
            }
        }
    }
    public getCellLoc(i:number,j:number){
        let x=nj.array(this.wids).slice([i]).sum()
        let y=nj.array(this.heis).slice([j]).sum()
        return new Victor(x,y)
    }
    public arrda_(arrda:Array<Array<any>>){
        this.arrda=arrda
        return this
    }
    public row_(row:number){
        this.row=row
        return this
    }
    public col_(col:number){
        this.col=col
        return this
    }
    public getBound(){
        let wid=nj.array(this.wids).sum()
        let hei=nj.array(this.heis).sum()
        return [wid,hei]
    }
    public calcGrid(){
        let [wid,hei]=this.getBound()
        let offX=0,offY=0
        let p1,p2
        for(let i=1;i<this.col;i++){//添加竖线
            offX+=this.wids[i]
            p1=new Victor(offX,0)
            p2=new Victor(offX,hei*this.Y)
            this.__lines.push(new Line({p1,p2}))
        }
        for(let i=1;i<this.row;i++){
            offY+=this.heis[i]*this.Y
            p1=new Victor(0,offY)
            p2=new Victor(wid,offY)
            this.__lines.push(new Line({p1,p2}))
        }
    }
    public initEls(){
        this.dispose()
        this.els.push(this.__contour)
        this.els.push(...this.__lines)
        for(let i=0;i<this.row;i++){
            this.els.push(...this.gridCells[i])
        }
        
    }
}