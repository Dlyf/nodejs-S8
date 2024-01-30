import { readFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url))
console.log(__dirname)
try {
    // const filePath = ('../ressources/fs/access.log');

    const fileToRead = join(__dirname, '../ressources/fs/access.log');

    console.log(fileToRead)
    
    const data = await readFile(fileToRead, { encoding: 'utf8' });

    // contents.split('\n')
    const lines = data.split('\n')

    const uris = new Set()

    let totalBytes = 0
    let total404 = 0
    let totalTime = 0

    for (const line of lines) {
        const json = JSON.parse(line)
        // Calcul du total de bytes
        totalBytes += Number(json.body_bytes_sent)

        if (json.status === "404") {
            total404++
        }

        totalTime += Number(json.request_time)
        uris.add(json.uri)
    }
    console.log('\nLes URI distinctes sont :')
    uris.forEach(uri => console.log(uri))

    console.log(`\nLe nombre total de bytes transférés : ${totalBytes} Bytes`)

    console.log(`\nNombre d'erreurs 404 : ${total404}`)

    const avgTime = (totalTime / lines.length).toFixed(6)
    console.log(`\nMoyenne dy temps des requêtes : ${avgTime} s`)

}
catch (err) {
    console.log('ERREUR', err)
    process.exit(0)
}
