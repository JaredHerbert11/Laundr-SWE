import schools from './products.json'

const getData = () => {
  let all_products = [];
  let id = 1;
    schools.forEach(element => {
        element["id"] = id
        all_products.push(element)
        id++
        
    });
  return all_products
};

export { getData };
