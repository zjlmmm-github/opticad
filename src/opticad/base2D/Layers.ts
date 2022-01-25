import { Layer } from "./Layer";

export class Layers{
    static instance:Layers
    public activeLayer:Layer
    public oLayers:any
    constructor(){
        this.oLayers={'base':new Layer()}
        this.activeLayer=this.oLayers['base']
    }
    static getInstance(){
        if(!Layers.instance){
            Layers.instance=new Layers()
        }
        return Layers.instance
    }
    public GetLayer(layernam:string){//没有则添加一个
        let layers=Layers.getInstance()
        if(layernam==''){
            return layers.oLayers['base']
        }
        if(Object.keys(layers.oLayers).indexOf(layernam)>-1){//有则返回对象
            return layers.oLayers[layernam]
        }else{
            layers.oLayers[layernam]=new Layer().nam_(layernam)
            return layers.oLayers[layernam]
        }
    }
    public AddLayer(nam:string,layerOpt:any){
       
    }
    public initCadLayer(){        // 
        //图层名称,颜色,线宽,线型
        let lays=[['a_base','#ffffff',1,'solid',''
            ],['a_m','#ffffff',1,'solid'
            ],['a_m','#ffffff',1,'solid'
            ],['a_m','#ffffff',1,'solid'
            ]]
    }
    public initCtxLayer(){
        let lays=[['c_'
            ],[''
            ],[''
            ],[''
            ]]
    }
}