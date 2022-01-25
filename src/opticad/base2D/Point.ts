import { Geom } from '.';
import { Victor } from '../libs/Victor';

export class Point extends Geom{
    public p1:Victor=new Victor(0,0)
    public r:number=1
    constructor(){
        super()
    }
    public draw(ctx:WebGL2RenderingContext){

    }
} 