// La clé utilisée pour chiffrer le message est la suivante : `384c8b679da39ac4b712e3cdc9615eeb`

// Déchiffrez le message envoyé par Bob.

// > **Warning**
// >
// > La méthode `createDecipheriv()` n'accepte que des objets [Buffer](https://nodejs.org/api/buffer.html) en argument. Il faudra donc transformer la clé "utf8" en Buffer comme ceci :
// > ```js
// > Buffer.from(key, 'utf8')
// > ```

import crypto from 'node:crypto';

const MESSAGE = "384c8b679da39ac4b712e3cdc9615eeb";

const key = crypto.randomBytes(32); // Crée la clé secrète

const iv = crypto.randomBytes(16); // Crée le vecteur d'initialisation
const cipher = crypto.createCipheriv("aes-256-cbc", key, iv);

let encrypted = cipher.update(MESSAGE, "utf8", "hex");
console.log("Message chiffré = ", encrypted);
