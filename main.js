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