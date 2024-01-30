import { EventEmitter } from 'node:events';

const emitter = new EventEmitter();

function handlePing() {
    console.log("ping");
    setTimeout(() => {
        emitter.emit("pong");
    }, 3000);
}

function handlePong() {
    console.log("pong");
    setTimeout(() => {
        emitter.emit("ping");
    }, 3000);
}

emitter.on("ping", handlePing);
emitter.on("pong", handlePong);

emitter.emit("ping");

