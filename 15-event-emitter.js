//Events in Node js
//Event driven programming
const EventEmitter = require("events");
//EventEmitter is a class so that's why start with capital

//to create custom events we need to extend the event class
//if we want to use existing event than we create instance of the class

const customEmitter = new EventEmitter();
//customEmitter is an instance of EventEmitter i.e its an object
//customEmmitter contains various methods

//customEmitter.on()
//creates an event , takes two parameters 1. name of the event , 2.callback function that runs the code after event is created

customEmitter.on("response", () => {
  console.log(`Data received`);
}); //.on() litens to the event

//multiple event is also possile
customEmitter.on("response", () => {
  console.log(`multiple .on for same event name`);
});

//customEmitte.emit()
//listens to an event
//takes the event name as 1st parameter
customEmitter.emit("response");

//logs data received

//order matters, we first listen then emit

//we can also pass arguments to .emit. This will become parameters for .on callback function

//arguments
customEmitter.on("response", (name, age) => {
  console.log(`Data received from .emit : ${name} ${age} `);
});

customEmitter.emit("response", "Uttam", 23);
//similar to functions
