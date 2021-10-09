//declare a built in module

const os = require("os"); //no ./ as it is a built in module

//find info about current user

const user = os.userInfo(); //invoke user info method
console.log(user);

//find how long the system is running
//uptime() : gets uptime in seconds
console.log(`The system is running for ${os.uptime()}`);

const currentOS = {
  //each module method gives some data about the current system.
  release: os.release(),
  name: os.type(),
  totalMemory: os.totalmem(),
  freeMemory: os.freemem(),
};

console.log(currentOS);
