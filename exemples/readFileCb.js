// import { readFile} from 'node:fs';

// readFile('./index.html', { encoding: 'utf8'}, (err, data) => {
//     if (err) throw err;

//     console.log('Contenu =', data.toString())
// })

// console.log('Fichier correctement lu !');


// readFile('./index.html', { encoding: 'utf8'}, (err, data) => {
//     if (err) throw err;

//     console.log('Contenu =', data.toString())

//     const nouveauContenu = data.toUpperCase()

//     appendFile('./index.html', nouveauContenu, { encoding: 'utf8'},
//     console.log('Contenu écrit')
//     )
// })

// console.log('Fichier correctement lu !');
import { appendFile, readFile} from 'node:fs/promises';

try {
    const data = await readFile('./index.html', { encoding: 'utf8'})
    
    console.log('Contenu =', data)
    
    const nouveauContenu = data.toUpperCase()
    
    await appendFile('./index.html', nouveauContenu, { encoding: 'utf8' })
    
    console.log('Contenu écrit !')
}
catch (err) {
    console.log(`Une erreur s'est produite : ${err.message}`)
}
