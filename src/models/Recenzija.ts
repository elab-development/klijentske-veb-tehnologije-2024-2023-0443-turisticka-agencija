export interface Recenzija {
    korisnik: string;
    ocena: number;
    komentar: string;
    datum: string;
    generisiZvezdice: () => string;
}