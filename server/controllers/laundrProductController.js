import LaundrProducts from "../models/product.model.js";

export const create = async (req, res) => {
 
  const laundrProduct = req.body;
  if (!laundrProduct) {
    return res.status(200).send({
      error: "Product not found",
    });
  }
  await new LaundrProducts(laundrProduct).save()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(200).send(err);
    });
};

/* Show the current Laundr Products */
export const read = async (req, res) => {
  let id = req.params.productId;
  await LaundrProducts.findById(id)
    .then((laundrProduct) => {
      if (!laundrProduct) {
        return res.status(200).send({
          error: "Product not found with an Id " + id,
        });
      }
      res.json(laundrProduct);
    })
    .catch((err) => {
      res.status(200).send({
        error: err.message || "An unknown error has occurred.",
      });
    });
};

/* Retrieve all the directory, LaundrProducts*/
export const getAllProducts = async (req, res) => {
  /* Add your code. Make sure to send the documents as a JSON response.*/
  await LaundrProducts.find({}, (err, data) => {
    if (err)
      return res.status(200).send({
        message: err.message || "An unknown error occurred",
      });
    res.json(data);
  });
};

export const getByName = async (req, res) => {

  let name2 = req.params.laundrProductName;
  
  await LaundrProducts.find({name : name2}, (err, data) => {
    if (err)
      return res.status(200).send({
        message: err.message || "An unknown error occurred",
      });
    res.json(data);
  });
}