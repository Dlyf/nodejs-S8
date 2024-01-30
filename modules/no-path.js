import path  from 'node:path';
import { fileURLToPath } from 'node:url';

const currentFilePath = fileURLToPath(import.meta.url);
// const filename = 'no-path.js'

const fileNameWithoutExtension = path.basename(currentFilePath, path.extname(currentFilePath));
const fileExtension = path.extname(currentFilePath);
const folderLocation = path.resolve(currentFilePath, '..');
console.log(fileNameWithoutExtension)
console.log(fileExtension)
console.log(folderLocation)