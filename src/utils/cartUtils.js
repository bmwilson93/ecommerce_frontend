// make a request to the backend api to manipulate the cart

const addToCart = async (product) => {
  const result = await fetch(`${process.env.REACT_APP_API_PATH}/cart/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: product,
      credentials: "include"
    }
  );
  const data = await result.json();
  console.log(data);
  return data;
}

const clearCart = async () => {
  const result = await fetch(`${process.env.REACT_APP_API_PATH}/cart/clear`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include"
  });
  const data = await result.json();
  console.log(data);
  return data;
}


export {addToCart, clearCart}