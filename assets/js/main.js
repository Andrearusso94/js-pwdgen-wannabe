/* il mio nome*/ 

const myName = prompt('Il tuo Nome?')

/* il mio cognome*/

const secondName = prompt('Il tuo cognome?')

/*il mio colore preferito*/

const color = prompt ('Il tuo colore preferito?')

/*anno corrente */
const thisYear = '22'

/*risultato password*/

let myPassword = myName + secondName + color + thisYear;
console.log('Ciao questa è la tua password:'+ myPassword)

/*password in html*/

let myMessage = `Ciao questa è la tua password: ${myPassword}`
document.getElementById("message").innerHTML = myMessage