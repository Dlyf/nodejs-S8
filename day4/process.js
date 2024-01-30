import process from 'node:process'; // optionnel, mais conseillé

const args = process.argv.slice(2);

const total = args.reduce((accumulator, currentValue) => {
  const num = +(currentValue);
  return isNaN(num) ? accumulator : accumulator + num;
}, 0);

if (isNaN(total)) {
  console.log("Aucun argument valide détecté");
  process.exit(1); // Terminer le programme avec un code d'erreur
} else {
  console.log(total);
}