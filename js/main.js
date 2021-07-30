// Descrizione:
// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
// Creare un array di oggetti di studenti.
// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
// Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

// CREO STUDENTE E STAMPO A VIDEO LE PROPRIETA DELL'OGGETTO
let studente = {
    nome : 'Luca',
    cognome : 'Mastrantonio',
    eta : 30
};

for(let key in studente) {
    let lista = document.createElement("li");
    lista.innerHTML = studente[key];
    document.getElementById('studente').appendChild(lista);

};

// CREO UN ARRAY DI OGGETTI
let classe = [
    {
        nome : 'Francesco',
        cognome : 'Totti',
        eta : 42
    },

    {
        nome : 'Daniele',
        cognome : 'De Rossi',
        eta : 38
    }
];

// CHIEDO ALL'UTENTE DI INSERIRE UN NUOVO STUDENTE
let newStudent = {};

let nome = prompt('Inserisci il tuo nome');
let cognome = prompt('Inserisci il tuo cognome');
let eta = prompt('Inserisci la tua eta');

newStudent.nome = nome;
newStudent.cognome = cognome;
newStudent.eta = eta;
classe.push(newStudent);



// STAMPO INFORMAZIONI STUDENTI
for(let i = 0; i < classe.length; i++) {
    let allievo = classe[i];
    for(let key in allievo) {
        let elenco = document.createElement("li");
        elenco.innerHTML = allievo[key];
        document.getElementById('allievo-' + (i + 1)).appendChild(elenco);
    }
}



// FARE IL CASO GENERALE IN UN NUOVO FILE CREANDO TUTTO DA JS