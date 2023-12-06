/*

    1) Chiedi all'utente il suo nome,
    2) poi chiedi il suo cognome,
    3) poi chiedi il suo colore preferito
    4) Infine scrivi sulla pagina nomecognomecolorepreferito114

*/
// 1) Chiedi all'utente il suo nome
const userName = prompt('Scrivi il tuo nome');
console.log('userName', userName, typeof userName);

// 2) poi chiedi il suo cognome
const userSurname = prompt('Scrivi il tuo cognome');
console.log('userSurname', userSurname, typeof userSurname);

// 3) chiedi il colore preferito
const userColor = prompt('Scrivi il tuo colore preferito');
console.log('userColor', userColor, typeof userColor);

// 4) scrivi sulla pagina nomecognomecolorepreferito114
document.writeln(userName+userSurname+userColor+'114')