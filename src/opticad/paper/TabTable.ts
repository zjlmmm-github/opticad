import { Compose } from "../compose/Compose";
export interface TabData{
    row:number,
    col:number,
    headStrs:Array<string>,
    headWids:Array<number>
    data:Array<Array<string>>,
    headHei?:number,

}
export class TabTable extends Compose{
    public col:number=2
    public row:number=2
    public headDa:Array<any>=[]
    public 
    constructor(){
        super()
    }
    public 
}