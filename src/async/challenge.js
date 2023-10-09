import fetch from "node-fetch";

const API = 'https://api.escuelajs.co/api/v1'

async function fetchData(ulrApi) {
  const response = await fetch(ulrApi);
  const data = await response.json();
  return data
}

const anotherFuction = async (ulrApi) => {
  try {
    const products = await fetchData(`${ulrApi}/products`);
    const product = await fetchData(`${ulrApi}/products/${products[0].id}`);
    const category = await fetchData(`${ulrApi}/categories/${product.category.id}`);
    console.log(products);
    console.log(product.title)
    console.log(category.name)
  } catch {
    console.error(error);
  }
}

anotherFuction(API)