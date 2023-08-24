/*
Descrizione:

Scrivere un programma che chieda all’utente:
Il numero di chilometri da percorrere
Età del passeggero Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.

MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra.
La risposta finale (o output) sarà anch’essa da scrivere in solo console.

MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo).
Questo richiederà un minimo di ricerca.
*/

/* 
tools
- prompt
- Number
- const/let
- Math.flor/Math.ceil
- if/else
- console.log
*/

//chiedo il numero di km da percorrere

/* const kmPercorsi = Number(prompt('Ciao, quanti chilometri devi percorrere?'));
console.log(kmPercorsi); */

//chiedo quanti anni ha il passeggero

/* const etaPasseggero = Number(prompt('Quanti anni hai?'));
console.log(etaPasseggero); */

const generatePrice = document.getElementById('generate_price');

generatePrice.addEventListener('click', function () {

    const name = document.getElementById('name').value;
    console.log(name);

    const distance = document.getElementById('distance').value;
    console.log(distance);

    const age = document.getElementById('age').value;
    console.log(age);

    if (distance > 0 && age > 0) {
        let ticketPrice = (distance * 0.21);
        console.log(ticketPrice.toFixed(2));

        //i minorenni pagano il 20% in meno
        if (age < 18) {
            ticketPrice = ticketPrice - ((ticketPrice * 20) / 100);
            console.log(ticketPrice.toFixed(2));

            //gli over 65 pagano il 40% in meno
        } else if (age >= 65) {
            ticketPrice = ticketPrice - ((ticketPrice * 40) / 100);
            console.log(ticketPrice.toFixed(2));
        }
    }

    document.getElementById('ticket').innerHTML = 'Questo è l\'importo da pagare per il biglietto: ' + ticketPrice + ' €';

   /* const ticket = document.getElementById('ticket');
    console.log(ticket);

    function generatePrice() {
        document.getElementById('ticket').innerHTML = generatePrice
    } */
})


//calcolo il prezzo del biglietto sulla base di 0.21 € al km
/* if (kmPercorsi > 0 && etaPasseggero > 0) {
    let prezzoBiglietto = (kmPercorsi * 0.21);
    console.log(prezzoBiglietto.toFixed(2));

    //i minorenni pagano il 20% in meno
    if (etaPasseggero < 18) {
        prezzoBiglietto = prezzoBiglietto - ((prezzoBiglietto * 20) / 100);
        console.log(prezzoBiglietto.toFixed(2));

        //gli over 65 pagano il 40% in meno
    } else if (etaPasseggero >= 65) {
        prezzoBiglietto = prezzoBiglietto - ((prezzoBiglietto * 40) / 100);
        console.log(prezzoBiglietto.toFixed(2));
    }

    //////////////END FIRST MILESTONE//////////////

    //stampo il prezzo finale con un massimo di due cifre decimali (centesimi)

    const divPrezzoBiglietto = document.getElementById('prezzo_biglietto');
    console.info(divPrezzoBiglietto);

    divPrezzoBiglietto.innerHTML = 'Questo è l\'importo da pagare per il biglietto: ' + prezzoBiglietto.toFixed(2) + ' €';

    //prezzoBiglietto.innerHTML = `Questo è l'importo da pagare per il biglietto: ${prezzoBiglietto.toFixed(2) + '€'} `;
} else {
    alert('Dati errati o mancanti');
    location.reload();
}
 */