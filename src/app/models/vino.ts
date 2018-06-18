export class Vino {
    public id: number;
    public naziv: string;
    public vrsta: string;
    public procenat: number;
    public berba:number;
    public cena:number;
    public lajk:number;
    public dislajk:number;
    public detalji:string;

    constructor(id,naziv,vrsta,procenat,berba,cena,lajk,dislajk,detalji){
        this.id=id;
        this.naziv=naziv;
        this.vrsta=vrsta;
        this.procenat=procenat;
        this.berba=berba;
        this.cena=cena;
        this.lajk=lajk;
        this.dislajk=dislajk;
        this.detalji=detalji;
    }
}