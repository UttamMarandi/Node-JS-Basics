//STREAMS
//using readFile and writeFile is okay for small size files.
//what if the file is too big or instead of reading the whole file we want to read a part of file
//that's where streams come into play

//we created a big file using 17-create-bigFile.js
const { createReadStream } = require("fs");

const stream = createReadStream("./content/bigFile.txt");

//data event
// stream.on("data", (res) => {
//   console.log(res);
//   //this logs the data in file in Buffer object. Our bigFile.txt is around 170 kb . we get three buffers with max buffer size around 64kb
//   //so with use of stream.on () we get data in chunks
// });

//summary
//default 64kb
//last buffer - remainder
//highWaterMark - control size of default chunk
//const stream = createReadStream("./content/bigFile.txt",{highWaterMark:9000}) //setting default chunk to 90kb
//convert buffer to readable : encoding object
//const stream = createReadStream("./content/bigFile.txt", {encoding:"utf-8"})

//create a stream : increase the default chunk size , provide encoding
// const stream2 = createReadStream("./content/bigFile.txt", {
//   highWaterMark: 9000,
//   encoding: "utf-8",
// });

// stream2.on("data", (res) => {
//   console.log(res);
// });
//error event
const stream3 = createReadStream("./content/nofile.txt", {
  highWaterMark: 8000,
  encoding: "utf-8",
});

//on function listen to events , in this case error event

stream3.on("error", (err) => {
  console.log(err);
});
//logs
// [Error: ENOENT: no such file or directory, open 'E:\Acode\Javascript\Node\Node Basics\content\nofile.txt'] {
//   errno: -4058,
//   code: 'ENOENT',
//   syscall: 'open',
//   path: 'E:\\Acode\\Javascript\\Node\\Node Basics\\content\\nofile.txt'
// }
