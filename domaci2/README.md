# Turistička Agencija – veb aplikacija

Aplikacija predstavlja veb platformu namenjenu turističkoj agenciji. Korisnicima omogućava pregled putovanja, filtriranje destinacija, pregled detalja aranžmana, kao i slanje upita agenciji.

## Pokretanje projekta

Prati sledeće korake kako bi pokrenuo/la aplikaciju na svojoj mašini:

### `1. Kloniraj repozitorijum`

git clone https://github.com/elab-development/klijentske-veb-tehnologije-2024-2023-0443-turisticka-agencija.git

U folderu se nalaze dva projekta, prvi je drugi domaći, drugi je seminarski rad.
Uđi u folder za drugi domaći i pokreni Command Prompt.
Kada se pokrene ukucaj sledeću komandu kako bi otvorio projekat u Visual Studio Code-u:

code .

### `2. Instaliraj zavisnosti`

Kada se otvori Visual Studio Code, pokreni terminal i ukucaj:

npm install

### `3. Pokreni razvojni server`

npm start

### `Tehnologije koje se koriste`

1.	React – za frontend aplikacije i rad sa komponentama.
2.	TypeScript – za lakše rukovanje podacima, kako bi svaka komponenta tačno znala koje informacije prima i prikazuje.
3.	React Router – za navigaciju između stranica.
4.	Axios – za komunikaciju sa serverom (u ovom slučaju čitanje podataka iz lokalnog JSON fajla).
5.	CSS – za stilizaciju elemenata aplikacije.

### `Funkcionalnosti`

1.	Dinamički prikaz podataka za putovanja iz JSON fajla
2.	Filtriranje po nazivu destinacije, državi, specijalnoj ponudi
3.	Prikaz detalja pojedinačnog putovanja
4.	Navigacija putem menija, burger meni
5.	Responzivan dizajn
6.	Paginacija
7.	Automatsko postavljanje podataka sa kartice na formu za upit
8.	Čuvanje podataka sa upita i prosleđivanje istih na drugu stranicu
9.	Galerija
