//-----------------------------------

//IL GENERATORE DI TABELLINE
let num = prompt('inserisci un numero da 1 a 10');
let i = 1;
while( i <=10 ) {
 alert(num + 'x' + i + '=' + (num * i));
 i++ ;
}


//IL SOSTITUTORE DI PAROLE
let frase = prompt('scrivi una frase');
let parola1 = prompt('inscerisci parola da sostituire');
let parola2 = prompt('inscerisci sostituo');
frase = frase.replace  (parola1, parola2);
alert(frase);



//VALIDATORE SITI WEB
let url = prompt('inserisci un url');
if((url.startsWith ('http://' || 'https://')) && url.endsWith('.com')){
    alert('url valido');
} else{
    alert('url non valido');
}



//LA SFIDA DEL DADO
let vittoriePc = 0;
let vittorieG = 0;
let gioco = prompt('Vuoi giocare a dadi?')

while (gioco == 'si'  gioco == 'Si'  gioco == 'SI') {

    alert('Lancia il dado');

    let dadoPc = Math.ceil(Math.random() * 6);
    let dadoG = Math.ceil(Math.random() * 6);

    alert(' TU: ' + dadoG + '  PC: ' + dadoPc);

    if (dadoG > dadoPc) {
        alert('Hai Vinto');
        vittorieG++;
    }

    else if (dadoG < dadoPc) {
        alert('Hai Perso');
        vittoriePc++;
    }

    else {
        alert('Pareggio');
    }

    alert('Punteggio: TU = ' + vittorieG + '  PC = ' + vittoriePc);
    gioco = prompt('Vuoi continuare a giocare?')
}



//INDOVINELLO
let numMax = prompt('Scegli il numero massimo tra cui indovinare');

let numX = Math.floor((Math.random() * numMax) + 1);

let numG = prompt('Indovina il numero al quale sto pensando');

while (!(numX === numG)){
    if (numG > numX){
        numG = prompt('Sbagliato! Prova con un numero più basso');
    }
    else if (numG < numX){
        numG = prompt('Sbagliato! Prova con un numero più alto');
    }
    else {
        alert('Congratulazioni! Hai Indovinato');
    }
}

alert('Congratulazioni! Hai Indovinato');