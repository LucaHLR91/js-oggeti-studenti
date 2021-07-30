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

console.log(studente);

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

// STAMPO INFORMAZIONI STUDENTI
for