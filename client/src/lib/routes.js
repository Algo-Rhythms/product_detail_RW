const apiPath = 'http://52.26.193.201:3000';
// This is my default callback. It prevents callback is not a function error - Temporary
const arrowFunc = (error, data) => { if (error) { return error; } return data; };

export const listProducts = (callback) => {
  const path = `${apiPath}/products/list/`;
  fetch(path)
    .then((result) => result.json())
    .then((data) => { callback(null, data); })
    .catch((error) => { callback(error, null); });
};

export const getInfo = (productId, callback = arrowFunc) => {
  const path = `${apiPath}/products/${productId}`;
  return fetch(path)
    .then((result) => result.json())
    .then((data) => {
      callback(null, data);
    })
    .catch((error) => { callback(error, null); });
};

export const getAllStyles = (productId, callback) => {
  const path = 'http://localhost:3000/products/1/styles';
  return fetch(path)
    .then((result) => result.json())
    .then((data) => {
      callback(null, data);
      console.log('inside Alis getrequest', data.results[0]);
    })
    .catch((error) => { callback(error, null); });
};

export const getDefaultStyle = (productId, callback) => {
  const path = 'http://localhost:3000/products/1/styles';
  return fetch(path)
    .then((result) => result.json())
    .then((data) => {
      const stylesArr = data.results;
      for (let i = 0; i < stylesArr.length; i += 1) {
        const current = stylesArr[i];
        if (current['default?'] > 0) {
          callback(null, current);
        }
      }
    })
    .catch((error) => { callback(error, null); });
};

export const getReviews = (productId, callback) => {
  const path = `${apiPath}/reviews/${productId}/meta`;
  return fetch(path)
    .then((result) => result.json())
    .then((data) => {
      callback(null, data);
    })
    .catch((error) => {
      callback(error, null);
    });
};

export const getCart = ((sessionId, callback = arrowFunc) => {
  const path = `${apiPath}/cart/${sessionId}`;
  fetch(path)
    .then((response) => response.json())
    .then((data) => {
      callback(null, data);
    })
    .catch((error) => {
      callback(error, null);
    });
});
/* Add to Cart - Adds a product to the cart.

POST /cart/

Body Parameters
Parameter    Type        Description
user_session int         Integer identifying the user session
product_id   int         ID for the product being added to the cart

Status: 201 CREATED
*/
export const addToCart = ((sessionId, productId, callback = arrowFunc) => {
  const path = `${apiPath}/cart/`;
  fetch(path, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user_session: sessionId,
      product_id: productId,
      active: 1,
    }),
  })
    .then((data) => {
      callback(null, data);
    })
    .catch((error) => {
      callback(error, null);
    });
});

/* Interactions - Adds a interaction to the db.

POST /interactions/

Body Parameters
Parameter    Type        Description
element      string      Required. Selector for the element which was clicked
widget       string      Required. Name of the module/widget in which the click occured
time         string      Required. Time the interaction occurred

Success: Status: 201 CREATED
Invalid parameters: Status: 422 UNPROCESSABLE ENTITY
 */
