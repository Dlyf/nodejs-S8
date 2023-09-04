// Fonction pour vérifier si un nombre est premier
// function isPrime(nb) {
//     if (nb <= 1) {
//       return false;
//     }
//     if (nb <= 3) {
//       return true;
//     }
//     if (nb % 2 === 0 || nb % 3 === 0) {
//       return false;
//     }

//     let i = 5;
//     while (i * i <= nb) {
//       if (nb % i === 0 || nb % (i + 2) === 0) {
//         return false;
//       }
//       i += 6;
//     }

//     return true;
//   }

//   // Boucle pour afficher les nombres premiers de 1 à 100
//   for (let i = 1; i <= 100; i++) {
//     if (isPrime(i)) {
//       console.log(i);
//     }
//   }

function isPrime(nb) {
    for (let i = nb - 1; i > 1; i--) {
        if(nb % i === 0) return false
    }
    return true
}

for (let i =21; i < 100; i++) {
    if (isPrime(i)) {
        console.log(i)
    }
}

// const time1 = Date.now();

// const primeNumbers = [2];

// let isPrime = true;

// for (let i=3; i<=100; i++) {

//     for (const number of primeNumbers) {

//         if (i%number === 0) {

//             isPrime = false;

//             break

//         }

//     }

//     if (isPrime) primeNumbers.push(i);

//     isPrime = true;

// }

// console.log(primeNumbers)

// console.log("Durée du script:", Date.now()-time1, "ms")