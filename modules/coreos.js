import os from 'node:os';

const osType = os.type();
const cpus = os.cpus().length;
const osArch = os.arch();
console.log('Nom du système d\'exploitation :', osType);
console.log('Le nombres total de processeurs (CPUs) de votre machine. :', cpus);
console.log('Le type d\'architecture de votre machine :', osArch);
