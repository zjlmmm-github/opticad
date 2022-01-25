export enum TextBaseLine{
    B='bottom',
    T='top',
    M='middle',
    A='alphabetic',
    H='hanging',
    I='ideographic'
}
export enum TextAlign{
    C='center',
    L='left',
    R='right',
    S='start',
    E='end'
}
export enum FontFamily{
    'Arial'='Arial',
    'Mons'='Mons'
}
export class Font{
    public nam:string='base'
    public type:string='font'
    public fontFamily:string=FontFamily.Arial
    public fontStyle:string='normal'
    public fontSize:number=5
    public baseLine:string=TextBaseLine.B
    public align:string=TextAlign.L
    constructor(){

    }
    public nam_(nam:string){
        this.nam=nam
        return this
    }
    public align_(){

    }
    public BaseLine_(){

    }
    public size_(fontSize:number=5){
        this.fontSize=
    }
}