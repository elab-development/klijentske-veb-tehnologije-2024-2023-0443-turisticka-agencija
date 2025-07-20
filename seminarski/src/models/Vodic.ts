export class Vodic{
    ime: string;
    pol: string;
    jezici: string[];
    drzave: string[];
    godineIskustva: number;
    ocena: number;
    slika: string;

    constructor(ime: string, pol: string, jezici: string[], drzave: string[], godineIskustva: number, ocena: number, slika: string){
        this.ime=ime;
        this.pol=pol;
        this.jezici=jezici;
        this.drzave=drzave;
        this.godineIskustva=godineIskustva;
        this.ocena=ocena;
        this.slika=slika;
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
        
        if(this.pol == "Muski"){
            if(this.jeIskusan()) titule.push("⭐ Iskusan");
            if(this.jeVisejezican()) titule.push("🌍 Višejezičan");
        }
        else{
            if(this.jeIskusan()) titule.push("⭐ Iskusna");
            if(this.jeVisejezican()) titule.push("🌍 Višejezična");
        }
        if(this.visokoOcenjen()) titule.push("🏅 Visoka ocena");

        return titule;
    }
}