export interface Recenzija {
    idPutovanja: number;
    korisnik: string;
    ocena: number;
    komentar: string;
    datum: string;
    generisiZvezdice: () => string;
}