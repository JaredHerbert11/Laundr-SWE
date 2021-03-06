const getData = () => {
  let products = [
    { "name": "Watermelon Cucumber", "description": "A sweet, cool and refreshing smell for brightening up your day. Great for picnic blankets, overalls, and being in a generally good mood.", "type": "Bombs", "scent": "Watermelon Cucumber", "price"  : 1899  , "hexcode": "#ff5656", "imagepath": "/static/media/watermelonMockup.c8a1d6d9.png", "imageURL": "https://i.imgur.com/AsdsAkk.jpg" },
    { "name": "White Gardenia"     , "description": "A sweet and floral perfume with relaxing notes, best used after a carefree frolic through a field of wildflowers."                       , "type": "Bombs", "scent": "White Gardenia"     , "price"  : 1899  , "hexcode": "#f4ea9c", "imagepath": "/static/media/gardeniaMockup.21939913.png", "imageURL": "https://i.imgur.com/RLcotIw.jpg" },
    { "name": "Mahogany Teakwood"  , "description": "A great everyday alternative to cologne, or for a getaway to a log cabin hidden deep in a snowy forest."                                 , "type": "Bombs", "scent": "Mahogany Teakwood"  , "price"  : 1899  , "hexcode": "#5b5b5b", "imagepath": "/static/media/mahoganymockup.be6cf665.png", "imageURL": "https://i.imgur.com/kSJ7fjD.jpg" },
    { "name": "Fresh Air"          , "description": "A soft, cottony fragrance that smells even cleaner than clean. Great for leaping face-first into a gigantic, fluffy comforter."          , "type": "Bombs", "scent": "Fresh Air"          , "price"  : 1899  , "hexcode": "#8dcfdd", "imagepath": "/static/media/freshair_asset.cd213838.png", "imageURL": "https://i.imgur.com/ExOBfBj.jpg" },
    { "name": "Coffee Vanilla"     , "description": "Smells like the steam rising off of a hot vanilla latte. Great for sitting in an armchair in a quaint neighborhood cafe."                , "type": "Bombs", "scent": "Coffee Vanilla"     , "price"  : 1899  , "hexcode": "#e2cea3", "imagepath": "/static/media/coffeeMockup.7fe3b840.png", "imageURL": "https://i.imgur.com/wXSjhQR.jpg" },
    { "name": "Eucalyptus Tea Tree", "description": "A natural scent inspired by popular aromatherapy oil mixtures. Great for towels, bath robes, and having a “me day.”"                     , "type": "Bombs", "scent": "Eucalyptus Tea Tree", "price"  : 1899  , "hexcode": "#48c47e", "imagepath": "/static/media/eucalyptusMockup.840d641d.png", "imageURL": "https://i.imgur.com/vGUyuef.jpg" }
  ]
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