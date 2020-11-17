import * as fs from "fs";

const readJsonFile = (fileName) => {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName + '.json', "utf8", async (err, data) => {

      if (err) reject(err);
      const laundrProduct = JSON.parse(data);
  
      resolve(laundrProduct)
    });
  })
  
};

export { readJsonFile };
