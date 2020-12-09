import {getData} from '../src/data/data.js';

function getProductByName(itemName){
    return products.filter(function(itm){
        return itm.name==itemName;
    })[0];
}

let products = getData();
let productString = '[{"name":"Watermelon Cucumber","description":"A sweet, cool and refreshing smell for brightening up your day. Great for picnic blankets, overalls, and being in a generally good mood.","type":"Bombs","scent":"Watermelon Cucumber","price":1899,"hexcode":"#ff5656","imagepath":"/static/media/watermelonMockup.c8a1d6d9.png","imageURL":"https://i.imgur.com/AsdsAkk.jpg","id":1},{"name":"White Gardenia","description":"A sweet and floral perfume with relaxing notes, best used after a carefree frolic through a field of wildflowers.","type":"Bombs","scent":"White Gardenia","price":1899,"hexcode":"#f4ea9c","imagepath":"/static/media/gardeniaMockup.21939913.png","imageURL":"https://i.imgur.com/RLcotIw.jpg","id":2},{"name":"Mahogany Teakwood","description":"A great everyday alternative to cologne, or for a getaway to a log cabin hidden deep in a snowy forest.","type":"Bombs","scent":"Mahogany Teakwood","price":1899,"hexcode":"#5b5b5b","imagepath":"/static/media/mahoganymockup.be6cf665.png","imageURL":"https://i.imgur.com/kSJ7fjD.jpg","id":3},{"name":"Fresh Air","description":"A soft, cottony fragrance that smells even cleaner than clean. Great for leaping face-first into a gigantic, fluffy comforter.","type":"Bombs","scent":"Fresh Air","price":1899,"hexcode":"#8dcfdd","imagepath":"/static/media/freshair_asset.cd213838.png","imageURL":"https://i.imgur.com/ExOBfBj.jpg","id":4},{"name":"Coffee Vanilla","description":"Smells like the steam rising off of a hot vanilla latte. Great for sitting in an armchair in a quaint neighborhood cafe.","type":"Bombs","scent":"Coffee Vanilla","price":1899,"hexcode":"#e2cea3","imagepath":"/static/media/coffeeMockup.7fe3b840.png","imageURL":"https://i.imgur.com/wXSjhQR.jpg","id":5},{"name":"Eucalyptus Tea Tree","description":"A natural scent inspired by popular aromatherapy oil mixtures. Great for towels, bath robes, and having a “me day.”","type":"Bombs","scent":"Eucalyptus Tea Tree","price":1899,"hexcode":"#48c47e","imagepath":"/static/media/eucalyptusMockup.840d641d.png","imageURL":"https://i.imgur.com/vGUyuef.jpg","id":6}]';
let eucalyptusProduct = getProductByName("Eucalyptus Tea Tree");
let freshAirProduct = getProductByName("Fresh Air");
let gardeniaProduct = getProductByName("White Gardenia");
let mahogonyProduct = getProductByName("Mahogany Teakwood");
let coffeeProduct = getProductByName("Coffee Vanilla");
let watermelonProduct = getProductByName("Watermelon Cucumber");

//print product json
console.log("All products.json data:")
console.log(products);

//product json test
if (JSON.stringify(products) == productString){
    console.log("Product list json test successful");
}else{
    console.log("Product list json test failed" );
}

//name retrieval test on eucalyptusProduct
if (eucalyptusProduct.name == "Eucalyptus Tea Tree"){
    console.log("Eucalyptus product name test successful");
}else{
    console.log("Eucalyptus product name test failed %s != 'Eucalyptus Tea Tree'", eucalyptusProduct.name );
}

//desc retrieval test on freshAirProduct
let freshairExpectedDesc = "A soft, cottony fragrance that smells even cleaner than clean. Great for leaping face-first into a gigantic, fluffy comforter.";
if (freshAirProduct.description == freshairExpectedDesc){
    console.log("Fresh air product description test successful");
}else{
    console.log("Fresh air product description test failed %s != %s", freshAirProduct.desc, freshairExpectedDesc );
}

//scent retrieval test on gardeniaProduct
if (gardeniaProduct.scent == "White Gardenia"){
    console.log("Gardenia product scent test successful");
}else{
    console.log("Gardenia product scent test failed %s != White Gardenia", gardeniaProduct.scent );
}

//price retrieval test on mahogonyProduct
if (mahogonyProduct.price/100.0 == 18.99){
    console.log("Mahogony product price test successful");
}else{
    console.log("Mahogony product price test failed %d != 18.99", mahogonyProduct.price/100.0 );
}

//hexcode retrieval test on coffeeProduct
if (coffeeProduct.hexcode == "#e2cea3"){
    console.log("Coffee product hexcode test successful");
}else{
    console.log("Coffee product hexcode test failed %s != #e2cea3", coffeeProduct.hexcode );
}

//imagepath retrieval test on watermelonProduct
if (watermelonProduct.imagepath == "/static/media/watermelonMockup.c8a1d6d9.png"){
    console.log("Watermelon product imagepath test successful");
}else{
    console.log("Watermelon product imagepath test failed %s != /static/media/watermelonMockup.c8a1d6d9.png", watermelonProduct.imagepath );
}

//imageUrl retrieval test on eucalyptusProduct
if (eucalyptusProduct.imageURL == "https://i.imgur.com/vGUyuef.jpg"){
    console.log("Eucalyptus product imageURL test successful");
}else{
    console.log("Eucalyptus product imageURL test failed %s != https://i.imgur.com/vGUyuef.jpg", eucalyptusProduct.imageURL );
}
