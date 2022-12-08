import fetch from "node-fetch";
const API = "https://api.escuelajs.co/api/v1";

async function fetchData(urlApi) {
  const resp = await fetch(urlApi);
  return await resp.json();
}

const anotherFn = async () => {
  try {
    const products = await fetchData(`${API}/products`);
    const product = await fetchData(`${API}/products/${products[0].id}`);
    const category = await fetchData(`${API}/categories/${product?.category?.id}`);

    console.log({ products: products[0], product: product.title, category: category.name });
  } catch (error) {
    console.error(error.message);
  }
};

anotherFn();
