// make a request to the backend api to manipulate the cart

const addToCart = async (id) => {
  const result = await fetch(`${process.env.REACT_APP_API_PATH}/cart/add/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
       },
      credentials: "include"
    }
  );
  const data = await result.json();
  console.log(data);
  return data;
}


export {addToCart}