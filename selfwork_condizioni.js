let voto_1 = prompt (`Inserisci il tuo voto`)

console.log(voto_1);


if (voto_1 >= 0 && voto_1 < 18) {
    console.log(`insuficente`);

} else if (voto_1 >= 18 && voto_1 < 21) {
    console.log(`sufficente`);

} else if (voto_1 >= 21 && voto_1 < 24) {
    console.log(`buono`);

} else if (voto_1 >= 24 && voto_1 <27) {
    console.log(`distinto`);

} else if (voto_1 >= 27 && voto_1 < 29) {
    console.log(`ottimo`);

} else if (voto_1 == 30){
    console.log(`eccellente`);

} else if (voto_1 > 30) {
    console.log(`voto non valido`);

} else if (voto_1 < 0) { 
    console.log(`voto non valido`);
    
    
}


let voto_2  = prompt `Inserisci il tuo secondo voto`
console.log(voto_2);


switch (true) {
    case (voto_2 >= 0 && voto_2 < 18):
        console.log('insufficiente');
        break;
    
    case (voto_2 >= 18 && voto_2 < 21):
        console.log(`sufficente`);
        break;

    case (voto_2 >= 21 && voto_2 <= 24):
        console.log(`buono`);
        break;

    case (voto_2 >= 24 && voto_2 <=27):
        console.log(`distinto`);
        break;

    case (voto_2 >= 27 && voto_2 <= 29):
        console.log(`ottimo`);
        break;

    case (voto_2 == 30):
        console.log(`eccellente`);
        break

    default:
        console.log(`voto non valido`);
        
}


/* 
Scrivi un programma che converta un voto numerico (v) in un giudizio seguendo questi parametri:
se v e’ minore di 18,  stampare in console  “insufficiente”
se v e’ maggiore uguale a 18 e minore di 21,  stampare in console “sufficiente”
se v e’ maggiore uguale a 21 e minore di 24,  stampare in console: “buono”
se v e’ maggiore uguale a 24 e minore di 27, stampare in console: “distinto”
se v e’ maggiore uguale a 27 e minore uguale 29, stampare in console: “ottimo”
se v e’ uguale a 30, stampare in console:  “eccellente”
Esempio:
let v = 29;
Output: Ottimo
Cercate di risolvere questo esercizio utilizzando prima if, else e poi con switch. */







let temperatura_1 = prompt (`Quanti gradi fanno??`);

console.log(temperatura_1);


if ( temperatura_1 >= 0 && temperatura_1 < 20) {
    console.log(`non ci sono piu’ le mezze stagioni`);

} else if (temperatura_1 >= 30) {
    console.log(`u mare, lu sole, lu ientu`);

} else if (temperatura_1 >= 20 && temperatura_1 < 30) {
    console.log(`mi dia una peroni sudata`);

} else if (temperatura_1 >= -10 && temperatura_1 < 0) {
    console.log(`non e’ tanto il freddo quanto l’umidità`);

} else if (temperatura_1 < -10) {
    console.log(`copriti…ancora ti raffreddi`);

} 

/*
Scrivi un programma che converta una temperatura inserita dall’utente con una delle seguenti descrizioni, stampate in console:
se temperatura e’ minore di 20, stampare “non ci sono piu’ le mezze stagioni”
se temperatura e’ maggiore uguale a 30, stampare “lu mare, lu sole, lu ientu”
se temperatura e’ minore di 30, stampare “mi dia una peroni sudata”
se temperatura e’ minore di 0, stampare “non e’ tanto il freddo quanto l’umidità’”
se temperatura e’ minore di -10, stampare “copriti…ancora ti raffreddi”
Cerca di risolvere questo esercizio utilizzando prima if else e poi con switch case. */



let temperatura_2  = prompt `Inserisci la seconda temperatura`
console.log(temperatura_2);


switch (true) {
    case ( temperatura_2 >= 0 && temperatura_2 < 20):
        console.log('non ci sono piu’ le mezze stagioni');
        break;
    
    case ( temperatura_2 >= 30):
        console.log(`lu mare, lu sole, lu ientu`);
        break;

    case (temperatura_2 >= 20 && temperatura_2 < 30 ):
        console.log(`mi dia una peroni sudata`);
        break;

    case (temperatura_2 >= -10 && temperatura_2 <0):
        console.log(`non e’ tanto il freddo quanto l’umidità`);
        break;

    case (temperatura_2 < -10):
        console.log(`copriti…ancora ti raffreddi`);
        break;

    default:
        console.log(`Non sono ammessi alti caratteri se non i numeri`);
        
}





/*
Scrivi un programma che converta una temperatura inserita dall’utente con una delle seguenti descrizioni, stampate in console:
se temperatura e’ minore di 20, stampare “non ci sono piu’ le mezze stagioni”
se temperatura e’ maggiore uguale a 30, stampare “lu mare, lu sole, lu ientu”
se temperatura e’ minore di 30, stampare “mi dia una peroni sudata”
se temperatura e’ minore di 0, stampare “non e’ tanto il freddo quanto l’umidità’”
se temperatura e’ minore di -10, stampare “copriti…ancora ti raffreddi”
Cerca di risolvere questo esercizio utilizzando prima if else e poi con switch case. */