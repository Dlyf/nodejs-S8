import { createServer } from 'node:http'

const myServer = createServer(async (request, response) => {
    console.log('>> Requête reçue :', request.url)
    if (request.url === './js-ninja.png', 'binary') {
        response.end(file)

    }
    else {
        response.end('Page d\'accueil !')
    }
})

// Démare le serveur qui écoutera sur le port réseau 15325
myServer.listen(15325, () => {
    console.log('Le serveur HTTP écoute sur le port :15325')
})