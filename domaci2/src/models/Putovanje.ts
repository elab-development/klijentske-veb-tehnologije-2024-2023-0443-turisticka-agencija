export interface Putovanje{
    id: number;
    naziv: string;
    drzava: string;
    slika: string;
    galerija?: string[];
    cena: number;
    datumi: string[];
    lastMinute: boolean;
    naAkciji: boolean;
    dan?: string[];
    plan?: string[];

    izracunajCenu?: () => number;
}

