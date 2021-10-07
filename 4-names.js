//Modules

//local to the file
const secret = "SUPER SECRET"; //this variable is availaible to me everywhere

//share with other files
const john = "john";
const peter = "peter";

console.log(module);
module.exports = {
  //if multiple element is exported
  john: john,
  peter: peter,
};

console.log(module);

//logs
// Module {
//   id: '.',
//   path: 'E:\\Acode\\Javascript\\Node\\Node Basics',
//   exports: {},
//   parent: null,
//   filename: 'E:\\Acode\\Javascript\\Node\\Node Basics\\4-names.js',
//   loaded: false,
//   children: [],
//   paths: [
//     'E:\\Acode\\Javascript\\Node\\Node Basics\\node_modules',
//     'E:\\Acode\\Javascript\\Node\\node_modules',
//     'E:\\Acode\\Javascript\\node_modules',
//     'E:\\Acode\\node_modules',
//     'E:\\node_modules'
//   ]
// }

//the exports key is the interseting one. whatever is present in the exports file can be accessed

//after declaring module.exports the second module log logs
// Module {
//   id: '.',
//   path: 'E:\\Acode\\Javascript\\Node\\Node Basics',
//   exports: { john: 'john', peter: 'peter' },
//   parent: null,
//   filename: 'E:\\Acode\\Javascript\\Node\\Node Basics\\4-names.js',
//   loaded: false,
//   children: [],
//   paths: [
//     'E:\\Acode\\Javascript\\Node\\Node Basics\\node_modules',
//     'E:\\Acode\\Javascript\\Node\\node_modules',
//     'E:\\Acode\\Javascript\\node_modules',
//     'E:\\Acode\\node_modules',
//     'E:\\node_modules'
//   ]
// }
//we can see that john and peter are now values to exports to key. meaning they are sharable.
