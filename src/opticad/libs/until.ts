import * as nj from 'numjs'
var  fillArr=function(num:number,len:number){
    var ar=[12,3,4,5]
    var a=nj.zeros(ar)
    var b=nj.array([1])

    for(let i=0;i<len;i++){

    }
}

export var Base={
    fillArr
}

export var def=function(obj:any,val:any){
    try{
        if(obj==undefined){
            return val
        }else{
            return obj
        }
    }catch{
        return val
    }
    
}