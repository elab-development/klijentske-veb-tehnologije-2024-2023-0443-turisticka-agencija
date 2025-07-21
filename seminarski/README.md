# Turistička Agencija – veb aplikacija

Aplikacija predstavlja veb platformu namenjenu turističkoj agenciji. Korisnicima omogućava pregled putovanja, filtriranje destinacija, pregled detalja aranžmana, kao i slanje upita agenciji.

## Pokretanje projekta

Prati sledeće korake kako bi pokrenuo/la aplikaciju na svojoj mašini:

### `1. Kloniraj repozitorijum`

git clone https://github.com/elab-development/klijentske-veb-tehnologije-2024-2023-0443-turisticka-agencija.git

U folderu se nalaze dva projekta, prvi je drugi domaći, drugi je seminarski rad.
Uđi u folder za seminarski rad i pokreni Command Prompt.
Kada se pokrene ukucaj sledeću komandu kako bi otvorio projekat u Visual Studio Code-u:

code .

### `2. Instaliraj zavisnosti`

Kada se otvori Visual Studio Code, pokreni terminal i ukucaj:

npm install

### `3. Pokreni razvojni server`

npm start

### `Tehnologije koje se koriste`

•	React – za frontend aplikacije i rad sa komponentama.
•	TypeScript – za lakše rukovanje podacima, kako bi svaka komponenta tačno znala koje informacije prima i prikazuje.
•	React Router – za navigaciju između stranica.
•	Axios – za komunikaciju sa serverom (u ovom slučaju čitanje podataka iz lokalnog JSON fajla).
•	CSS – za stilizaciju elemenata aplikacije.

### `Funkcionalnosti`

•	Dinamički prikaz podataka za putovanja, vodiče i recenzije iz JSON fajlova
•	Dodavanje novih recenzija
•	Filtriranje po nazivu destinacije, državi, specijalnoj ponudi
•	Prikaz detalja pojedinačnog putovanja
•	Navigacija putem menija, burger meni
•	Responzivan dizajn
•	Paginacija
•	Automatsko postavljanje podataka sa kartice na formu za upit
•	Čuvanje podataka sa upita i prosleđivanje istih na drugu stranicu
•	Galerija
