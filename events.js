const EventEmitter = require('events');

const myEmitter = new EventEmitter();

someFuction = function () {
    console.log('something has happened');
}

myEmitter.on(' some event' , someFuction);

myEmitter.emit(' some event');