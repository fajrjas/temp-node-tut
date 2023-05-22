// const {name1} = require(names)
const { name1, name2 } = require("./names");
const sayMyName = require("./util");
// const names = require("./names");
const { singlePerson } = require("./alternative");

// const sayMyName = (name) => {
//   console.log(`Hi ${name} ang sarap mo kahit walang sauce`);
// };

console.log(singlePerson);

require("./mind-grenade");

sayMyName(name1);
// console.log(names);
