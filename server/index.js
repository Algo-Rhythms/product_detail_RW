require('newrelic');
const express = require('express');

const app = express();
const cors = require('cors');
const pool = require('../db');

const PORT = 3000;

app.use(express.static('../client/dist'));
app.use(express.json());
app.use(cors());

app.listen(PORT, () => {
  console.log(`Server running and listening on port: ${PORT}`);
});

// PRODUCTS API===================================================
// list Products
app.get('/products/list/:page/:count', (req, res) => {
  // need to account for page and count parameters
  const { page } = req.params;
  const { count } = req.params;
});

// product items
app.get('/products/:product_id', (req, res) => {
  const productId = req.params.product_id;

  pool.queryProductId(productId, (err, results) => {
    if (err) {
      res.sendStatus(404);
    } else {
      const result = results.rows[0];
      const product = {
        id: result.id,
        name: result.name,
        slogan: result.slogan,
        description: result.description,
        category: result.category,
        default_price: result.default_price,
      };
      const featuresArray = [];

      for (let i = 0; i < results.rows.length; i++) {
        currentRow = results.rows[i];
        const featuresObject = {
          feature: currentRow.feature,
          value: currentRow.value,
        };

        featuresArray.push(featuresObject);
      }

      product.features = featuresArray;
      res.send(product);
    }
  });
});

// current test of query styles-
app.get('/products/:product_id/styles', (req, res) => {
  const productId = req.params.product_id;
  const productObject = {};
  const newResults = {};
  let photosArray = [];
  let skus = {};
  const resultsArray = [];
  const photosObject = {};
  let counter = 1;
  let photoCounter = 1;
  let skusCounter = 1;

  pool.queryStyles(productId, (err, results) => {
    if (err) {
      res.sendStatus(400);
    } else {
      const returnedResults = results.rows;

      // iterate results row
      const initializeObject = function (index) {
        newResults.style_id = returnedResults[index].stylesId;
        newResults.name = returnedResults[index].name;
        newResults.original_price = returnedResults[index].original_price;
        returnedResults[index].sale_price === null ? newResults.sale_price = 0 : returnedResults[index].sale_price;
        newResults['default?'] = returnedResults[index].default_style;
        newResults.photos = [returnedResults[index].thumbnail_url, returnedResults[index].url];
        skus[returnedResults[index].size] = returnedResults[index].quantity;
        photosObject.thumbnail_url = returnedResults[index].thumbnail_url;
        photosObject.url = returnedResults[index].url;
        photosArray.push(photosObject);
      };

      initializeObject(0);

      for (let i = 1; i < returnedResults.length; i++) {
        // if styles id hasnt change
        if (returnedResults[i].stylesid === counter) {
          // check photos and add
          if (returnedResults[i].skusid > skusCounter) {
            console.log('skusid is greater than counter', returnedResults[i].skusid);
            skus[returnedResults[i].size] = returnedResults[i].quantity;
            console.log('skus', skus);
            skusCounter++;
          }
          if (returnedResults[i].photosid > photoCounter) {
            photosArray.push(
              {
                thumbnail_url: returnedResults[i].thumbnail_url,
                url: returnedResults[i].url,
              },
            );
            photosCounter++;
          }
        }

        // if styles id has changed
        if (returnedResults[i].stylesid > counter) {
          // combine all of the style 1 photos in an array, add the skus
          // object, and then push the full object into the array. then
          newResults.skus = skus;
          newResults.photos = photosArray;
          const stringified = JSON.stringify(newResults);
          const parsed = JSON.parse(stringified);
          resultsArray.push(parsed);

          // call initialization function function and reset photocounter and skus counter
          photosArray = [];
          skus = {};
          photoCounter = 1;
          skusCounter = 1;
          counter++;

          initializeObject(i);
        }

        // will need to make a final if state to push newresults into array if there are no more styles left.
      }
      newResults.skus = skus;
      newResults.photos = photosArray;
      resultsArray.push(newResults);

      productObject.product_id = productId;
      productObject.results = resultsArray;
      res.send(productObject);
    }
  });
});

module.exports = app;
