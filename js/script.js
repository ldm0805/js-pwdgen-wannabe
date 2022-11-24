
// Richiedere all'utente di inserire il suo nome; 
let nome = prompt('Inserisci Il tuo nome');

// Richiedere all'utente di inserire il suo cognome; 
let cognome = prompt('Inserisci il tuo cognome');

//Sostituire lo spazio che c'è nel cognome con un underscore;
let result = cognome.replace(" ", "_");

// Richiedere all'utente di inserire il suo colore preferito; 
let color = prompt('Inserisci il tuo colore preferito');

// 1.4 Inserire da script il numero 21;; 
const tewnty_one = '21';

//Restituire a schermo la password.
document.getElementById('weak_pass').innerHTML = 'La tua password è:' + " " + nome + result + color + tewnty_one;
