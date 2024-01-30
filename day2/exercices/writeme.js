import { dirname, join } from 'node:path'

// Nécessaire pour récupérer les chemins absolus
import { fileURLToPath } from 'node:url'
import { readFile } from 'node:fs/promises'

import { open } from 'node:fs/promises'


const __dirname = dirname(fileURLToPath(import.meta.url))

try {
    const fileToRead = join(__dirname, '../ressources/fs/access.log')

    const file = await open(fileToRead)

    // const data = await readFile(fileToRead, 'utf8')
    // console.log(data)

    // const lines = data.split('\n')

    for await (const line of file.readLines()) {
        const json = JSON.parse(line)
        console.log('Ligne : ',  line, '\n\n')

    }
}
catch (err) {
  console.log('ERREUR', err)
  process.exit(0)
}