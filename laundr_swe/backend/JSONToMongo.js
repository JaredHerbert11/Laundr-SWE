"use strict";
/*
  Import modules/files you may need to correctly run the script.
 */
import { readJsonFile } from "./readFile/readFile.js";
import LaundrProduct from "./models/product.model.js";
import {connectToDatabase} from './connectMongodb.js'
import mongoose from 'mongoose';

const connectToDB = () => {
  return connectToDatabase().on(
    "error",
    console.error.bind(console, "MongoDB connection error:")
  );
}

const count = async () => {
  const docCount = await LaundrProduct.countDocuments({})
    .then((num) => {
      return num;
    })
    .catch((err) => {
      throw err;
    });
  return docCount;
};

const report = async (err, str) => {
  if (err) {
    throw err;
  }
  const c = await count();
  console.log(str, c);
};

const saveDataInDB = async (laundrProduct) => {
  return await new Promise(async (res, rej) => {
    LaundrProduct.insertMany(laundrProduct, async (err, docs) => {
      if (err) rej(err);
      res(docs);
    });
  });
};

const deleteDataInDB = async () => {
  return await LaundrProduct.deleteMany((err) => {
    if (err) throw err;
  });
};

const main = async () => {
  connectToDB()
  /*
    Instantiate a mongoose model for each laundr product object in the JSON file,
    and then save it to your Mongo database
    //see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

    Remember that we needed to read in a file like we did in Bootcamp Assignment #1.
   */
    //delete the existing entries to start fresh
    await deleteDataInDB();
    //checking if the documents have been deleted successfully
    await report(null, "Documents deleted, there are now %d documents.");
    //read file and return the data
    await readJsonFile("./backend/products") //Modified, added server directory
      .then(async (laundrProductData) => {
        //save the data into the database
        await saveDataInDB(laundrProductData)
          .then(async (data) => {
            //check if the laundr product data has been saved successfully
            await report(null, "All %d documents have been added.");
            mongoose.disconnect() 
          })
          .catch((err) => {
            console.error(err);
          });
      })
      .catch((err) => {
        console.error(err);
      });
};


main()
