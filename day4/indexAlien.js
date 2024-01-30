import fs from 'node:fs';
import aliens from './aliens.js';

const writeStream = fs.createWriteStream('aliens.txt', { encoding: 'utf-8' });

for (const alien of aliens) {
    writeStream.write(`@@@@@@@`);
  writeStream.write(`\n@${alien}@`);
  writeStream.write(`\n@@@@@@@`);

  writeStream.write('\n\n');
}

writeStream.end();

