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

const getCart = async () => {
  try {
    const result = await fetch(`${process.env.REACT_APP_API_PATH}/cart`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include"
    });
    const data = await result.json();
    console.log(data);
    return data;
    
  } catch (error) {
    console.log(error);
  }
}

const removeCartItem = async (id) => {
  const result = await fetch(`${process.env.REACT_APP_API_PATH}/cart/remove/${id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include"
  });
  const data = await result.json();
  console.log(data);
  return data;
}

const increaseCartItem = async (id) => {
  const result = await fetch(`${process.env.REACT_APP_API_PATH}/cart/increase/${id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include"
  });
  const data = await result.json();
  console.log(data);
  return data;
}

const decreaseCartItem = async (id) => {
  const result = await fetch(`${process.env.REACT_APP_API_PATH}/cart/decrease/${id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include"
  });
  const data = await result.json();
  console.log(data);
  return data;
}




export {addToCart, clearCart, getCart, removeCartItem, increaseCartItem, decreaseCartItem}