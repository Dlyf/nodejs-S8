// Dans les ressources fournies se trouve un fichier lorem.txt contenant beaucoup de texte.
// Écrivez un programme qui lit le contenu de ce fichier en utilisant un stream, et comptez le nombre de chunks utilisés ainsi que leur taille.

import { createReadStream } from 'node:fs';

const fileStream = createReadStream('./lorem.txt');

let chunkCount = 0;

// écouteur d'évenement
fileStream.on('data', (chunk) => {
    console.log(`Nombre de chunks: ${chunkCount}`);
    
    console.log('CHUNK:', chunk.length);
    chunkCount++;

});

// fileStream.on('end', () => {
//     console.log('Nombre de chunks:', chunkCount);
//     console.log('Taille totale en octets:', totalSize);
// });