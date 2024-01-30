import crypto from 'crypto';
import argon2 from 'argon2';

import users from './ressources/users.js';

// function generateUniqueId() {
//   return crypto.randomUUID();
// }

// function hashWithSHA256(password) {
//   const SECRET = 'IM VERY SECRET';
//   const hash = crypto.createHmac('sha256', SECRET).update(password).digest('hex');
//   return hash;
// }

// function hashWithArgon2(password) {
//   const hash = argon2.hash(password);
//   return hash;
// }

// users.forEach((user) => {
//   user.id = generateUniqueId();
// });

// for (const user of users) {
// user.password = {
//     sha256: hashWithSHA256(user.password),
//     argon2: await hashWithArgon2(user.password),
// };
// }

// console.log(JSON.stringify(users, null, 2));

const userHashed = await Promise.all(
  users.map(async (user) => {
    return {
      ...user,
      id: crypto.randomUUID(),
      password: {
        sha256: hashWithSHA256(user.password),
        argon2: await hashWithArgon2(user.password),
      }
    }
  })
)