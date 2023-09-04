import { setInterval } from 'node:timers/promises'
// const INTERVAL_IN_MILLISECONDS = 2000;

// const timer = setInterval(
//     () => {
//         console.log(new Date().toLocaleString());
//     }, INTERVAL_IN_MILLISECONDS)

// correction

// const INTERVAL_IN_MILLISECONDS = 1000;

// const formatter = new Intl.DateTimeFormat('fr-FR', {
//     hour: "numeric",
//     minute: 'numeric',
//     second: 'numeric',
//     // dateStyle: "short"
//     weekday: 'narrow'

// })
// const timer = setInterval(
//     () => {
//         console.log(formatter.format(Date.now()));
//     }, INTERVAL_IN_MILLISECONDS)

// const INTERVAL_IN_MILLISECONDS = 1000;

// const formatter = new Intl.DateTimeFormat('fr-FR', {
//     hour: "numeric",
//     minute: 'numeric',
//     second: 'numeric',
//     // dateStyle: "short"
//     weekday: 'short'

// })

// for await (const _ of setInterval(INTERVAL_IN_MILLISECONDS)) {
//     console.log(formatter.format(Date.now()))
// }

// import { setTimeout } from 'node:timers/promises';

// async function waitAndSay(message) {
//     await setTimeout(1000)
//     console.log(message)
// }

// waitAndSay('coucou')