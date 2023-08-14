const lod = require("lodash");
const fs = require("fs");
const { log } = require("console");
fs.readFile("./data/ori.txt", "utf-8", function (err, data) {
  if (err) throw err;
  console.log(data);
  let len = data.split(" ").length;
  let arrData = data.split(" ");
  let result = [...arrData];
  lod.reverse(result);
  let uniqWords = [...arrData];
  lod.uniq(uniqWords);
  
function upper() {
    let uniqStr = uniqWords.toString();
    let lower = uniqStr.toUpperCase();
    return lower;
  }
  let up = upper()
 function bigger() {
    let bf = [];
    uniqWords.forEach((element) => {
      if (element.length > 5) {
        console.log("t", element);
        bf.push(element);
      }
    });
    return JSON.stringify(bf);
  }
  let big = bigger()
  let c = 0;
 function vowelsFun() {
    uniqWords.forEach((element) => {
        if (
          element.includes("a") ||
          element.includes("o") ||
          element.includes("e") ||
          element.includes("i") ||
          element.includes("u") 
        ) {
          c++;
        }
      });
      return c;
    
    
  }

  console.log(len);
//   console.log(arrData);
//   console.log(result);
//   console.log(uniqWords);
  fs.writeFile('message.txt', up , (err) => {
    if (err) throw err;
    
    });

  fs.appendFile('message.txt', big , (err) => {
    if (err) throw err;
    
    });
    

});



// export {upper}
// export {bigger}
// export {vowelsFun}