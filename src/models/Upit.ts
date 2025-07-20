export class Upit {
    naziv: string;
    cena: number;
    izabraniTermin: string;
    brojOsoba: number;
    poruka: string;

    constructor(naziv: string, cena: number, izabraniTermin: string, brojOsoba: number, poruka: string){
        this.naziv=naziv;
        this.cena=cena;
        this.izabraniTermin=izabraniTermin;
        this.brojOsoba=brojOsoba;
        this.poruka=poruka;
    }

    izracunajUkupnuCenu(): number{
        return this.cena * this.brojOsoba;
    }
}