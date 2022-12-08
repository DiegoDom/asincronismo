import fetch from "node-fetch";

const API = "https://api.escuelajs.co/api/v1";

function fetchData(urlApi) {
  return fetch(urlApi);
}

/* fetchData(`${API}/products`)
  .then((res) => res.json())
  .then(console.log)
  .catch(console.error); */

/* fetchData(`${API}/products`)
  .then((res) => res.json())
  .then((products) => {
    fetchData(`${API}/products/${products[0].id}`)
      .then((res) => res.json())
      .then((product) => {
        console.log({ product });
        fetchData(`${API}/categories/${product?.category?.id}`)
          .then((res) => res.json())
          .then((category) => console.log({ category: category.name }))
          .catch(console.error);
      })
      .catch(console.error);
  })
  .catch(console.error); */

fetchData(`${API}/products`)
  .then((res) => res.json())
  .then((products) => fetchData(`${API}/products/${products[0].id}`))
  .then((res) => res.json())
  .then((product) => {
    console.log({ product: product.title });
    return fetchData(`${API}/categories/${product?.category?.id}`);
  })
  .then((res) => res.json())
  .then((category) => console.log({ category }))
  .catch(console.error);
