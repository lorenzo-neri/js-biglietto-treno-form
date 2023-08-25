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

const formEl = document.querySelector('form');

formEl.addEventListener('submit', function (e) {
    console.log('form submitted');
    e.preventDefault();

    const generatePrice = document.getElementById('generate_price');

    // generatePrice.addEventListener('click', function () {

    //chiedo nome
    const name = document.getElementById('name').value;
    console.log(name);

    //chiedo km da percorrere
    const distance = document.getElementById('distance').value;
    console.log(distance);

    //chiedo età
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


        //END FIRST MILESTONE

        //divTicketPrice
        const divTicketPrice = document.getElementById('ticket_price');

        divTicketPrice.innerHTML = 'Questo è l\'importo da pagare per il biglietto: ' + ticketPrice.toFixed(2) + ' €';

        //divName
        const divName = document.getElementById('name_passenger');

        divName.innerHTML = `Questo è il nome del passeggero: <strong>${name}</strong>`;

        //offer
        //divFullTicket
        if (age >= 18 && age < 65) {
            let fullTicket = 'Biglietto Standard';
            console.log(fullTicket);

            const divFullTicket = document.getElementById('offer');

            divFullTicket.innerHTML = 'Biglietto Standard'

            //divReducedTicket
        } else if (age < 18 || age >= 65) {
            let reducedTicket = 'Biglietto Ridotto';
            console.log(reducedTicket);

            const divReducedTicket = document.getElementById('offer');

            divReducedTicket.innerHTML = 'Biglietto Ridotto'
        }

        //carriage
        const carriage = (Math.random() * 15).toFixed();
        console.log(carriage);

        document.getElementById('carriage').innerHTML = 'La tua carrozza è la numero: ' + carriage;

        //cpCode
        const cpCode = (Math.random() * 99999).toFixed();
        console.log(cpCode);

        document.getElementById('cp_code').innerHTML = 'Codice CP: ' + cpCode;
    }


    //})
})


