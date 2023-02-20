'use strict';

// Primo Step, Creiamo il primo prompt con all'interno il nome.
const nome = prompt('Inserisci il tuo nome');

// Secondo Step, Creiamo il secondo prompt con all'interno il cognome.
const cognome = prompt('Inserisci il tuo cognome');

// Terzo Step, Creiamo il terzo prompt che chiede all'utente il suo colore preferito 
const colore = prompt('Inserisci il tuo colore preferito');

///Quarto Step, Scriviamo sulla pagina la password generata dalla combinazione delle tre variabili
const password = nome+cognome+colore+89;

document.querySelector('h1').innerHTML = password;
console.log(password);