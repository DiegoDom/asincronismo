const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const API = "https://api.escuelajs.co/api/v1";

function fetchData(urlApi, callback) {
  let xhttp = new XMLHttpRequest();

  xhttp.open("GET", urlApi, true);
  xhttp.onreadystatechange = function (e) {
    if (xhttp.readyState === 4) {
      if (xhttp.status === 200) {
        callback(null, JSON.parse(xhttp.responseText));
      } else {
        const error = new Error("Error " + urlApi);
        return callback(error, null);
      }
    }
  };

  xhttp.send();
}

fetchData(`${API}/products`, function (err1, products) {
  if (err1) return console.error(err1);

  fetchData(`${API}/products/${products[0].id}`, function (err2, product) {
    if (err2) return console.error(err2);

    fetchData(`${API}/categories/${product?.category?.id}`, (err3, category) => {
      if (err3) return console.error(err3);

      console.log({ products: products[0], product: product.title, category: category.name });
    });
  });
});
