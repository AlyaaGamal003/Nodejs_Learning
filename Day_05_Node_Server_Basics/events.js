// Create a custom event emitter for a “user signup” event that logs user details.
const EventEmitter = require('node:events');
const tutorial = require('./user_data');
const eventEmitter = new EventEmitter();
eventEmitter.on('sign up', user => {
  console.log(`\nName: ${user.name}`);
  console.log(`Email: ${user.email}\n`);
});

eventEmitter.emit('sign up',tutorial[0]);
eventEmitter.emit('sign up',tutorial[1]);