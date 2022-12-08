import fetch from "node-fetch";

const API = "https://api.escuelajs.co/api/v1";

function postData(urlApi, data) {
  return fetch(urlApi, {
    body: JSON.stringify(data),
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    mode: "cors",
  });
}

const fakeProduct = {
  title: "New DOM Product",
  price: 320,
  description: "A description",
  categoryId: 1,
  images: ["https://placeimg.com/640/480/any"],
};

postData(`${API}/products`, fakeProduct)
  .then((res) => res.json())
  .then(console.log)
  .catch(console.error);
