import LaundrProducts from "./product.model.js";

const findLaundrProductsByName = (_productName_) => {
  return new Promise((res, rej) => {    
    LaundrProducts.findOne({ name: _productName_}, function (error, data) {
      if(error){
        rej(error);
      }
      else{
        res(data);
      }
    });
  });
};

const retrieveAllLaundrProducts = () => {
  return new Promise((res, rej) => {
    LaundrProducts.find(function (error, data) {
      if(error){
        rej(error);
      }
      else{
        res(data);
      }
    });
  });
};


const DisplayFormattedData = (data) => {
  if (data) {
    console.log(
      "Name: " + data.name + "\n" +
      "Description: " + data.description + "\n" +
      "Type: " + data.type + "\n" +
      "Scent: " + data.scent + "\n" +
      "Hex Code: " + data.hexcode + "\n"
    );
    
  } else {
    console.log("Data not found or has been removed!\n");
  }
};

export {
  findLaundrProductsByName,
  retrieveAllLaundrProducts,
  DisplayFormattedData,
};