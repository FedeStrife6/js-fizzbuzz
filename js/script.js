// Creazione numeri da 1 a 100
for (var i = 1; i <= 100; i++) { // Guardare differenza tra i++ e ++i

// Numeri Multipli di 3 e 5
if (i % 3 === 0 && i % 5 === 0){  //L'operatore "AND" è utilizzato per creare condizioni complesse composte da una pluralità di sottocondizioni, tutte le sottocondizioni devono essere vere, se si vuole che funzioni.
  console.log('FizzBuzz');
}

// Numeri Multipli di 3
else if (i % 3 === 0) {
  console.log('Fizz');
}

// Numeri Multipli di 5
else if (i % 5 === 0) {
  console.log('Buzz');

} else {
  console.log(i);
}
}
