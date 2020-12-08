import products from './products.js'

const getData = () => {
  let all_products = [];
  let id = 1;
    products.forEach(element => {
        element["id"] = id
        all_products.push(element)
        id++
        
    });
  return all_products
};

export { getData };