import { createServer } from 'node:http'
import { readFile } from 'node:fs/promises'

const PORT = 15325;
// Route /accueil : doit renvoyer le contenu du fichier index.html
// Route /app.css : doit renvoyer le contenu du fichier app.css
// Route /node-logo.png : doit renvoyer le contenu du fichier node-logo.png
const myServer = createServer(async (request, response) => {
  const url = request.url;
  if (url === '/accueil') {
    // Lire le fichier index.html
    const file = await readFile('./ressources/server/index.html')
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.end(file);
  } else if (url === '/app.css') {
    const fileCSS = await readFile('./ressources/server/app.css')
    response.writeHead(200, ('Content-Type', 'text/css'));
    response.end(fileCSS);
 } else if (url === '/node-logo.png') {
    const image = await readFile('./ressources/server/node-logo.png')
    response.writeHead(200, { 'Content-Type': 'image/png' });
    response.end(image);
 } else {
    // Gérer les routes non trouvées
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Page non trouvée');
  }
    // switch(request.url) {
    //   case '/accueil':
    //   const file = await readFile('./ressources/server/index.html')
    //   response.end(file)
    //   break;
    //   case '/app.css':
    //     const file2 = await readFile('./ressources/server/app.css')
    //     response.end(file2)
    //   default:
    //   response.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
    //   response.end('<h1>404 Not Found</h1>');
    // console.log('>> Requête reçue :', request.url)
    // if (request.url === './js-ninja.png', 'binary') {
    //     response.end(file)

    // }
    // else {
    //     response.end('Page d\'accueil !')
    // }
    // if (request.url === '/accueuil') {
    //   const file = await readFile('./ressources/server/index.html')

    //   response.end(file)


    // if (request.url === '/accueil') {
    //   const file = await readFile('./ressources/server/index.html')
    //   response.end(file)
    // } else if ( request.url === '/app.css') {
    //   const file2 = await readFile('./ressources/server/app.css')
    //   console.log(file2)
    //   response.end(file2)

})

// Démare le serveur qui écoutera sur le port réseau 15325
myServer.listen(PORT, () => {
    console.log(`[STARTED] Server listening on: http://localhost:${PORT}`);
  });