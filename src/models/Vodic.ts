export class Vodic{
    ime: string;
    jezici: string[];
    drzave: string[];
    godineIskustva: number;
    ocena: number;

    constructor(ime: string, jezici: string[], drzave: string[], godineIskustva: number, ocena: number){
        this.ime=ime;
        this.jezici=jezici;
        this.drzave=drzave;
        this.godineIskustva=godineIskustva;
        this.ocena=ocena;
    }

    jeVisejezican(): boolean{
        return this.jezici.length >= 3;
    }

    jeIskusan(): boolean{
        return this.godineIskustva >= 10;
    }

    visokoOcenjen(): boolean{
        return this.ocena >= 4.5;
    }

    dodajTitule() : string[]{
        const titule: string[] = [];

        if(this.jeIskusan()) titule.push("⭐ Iskusan");
        if(this.jeVisejezican()) titule.push("🌍 Višejezičan");
        if(this.visokoOcenjen()) titule.push("🏅 Visoka ocena");

        return titule;
    }
}