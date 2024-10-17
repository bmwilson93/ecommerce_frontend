const login = async (body) => {
  try {
    const result = await fetch(`${process.env.REACT_APP_API_PATH}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: body,
      credentials: "include"
    });
    const data = await result.json();
    console.log(data);
    return data;
    // console.log(result);
    
  } catch (error) {
    console.log(error);
  }
}

const logout = async () => {
  const result = await fetch(`${process.env.REACT_APP_API_PATH}/logout`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include"
  });
  console.log(result);
  return;
}

const register = async (body) => {
  const result = await fetch(`${process.env.REACT_APP_API_PATH}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: body,
    credentials: "include"
  }
);
const data = await result.json();
return data;
}

const isLoggedIn = async () => {
  try {
    const result = await fetch(`${process.env.REACT_APP_API_PATH}/isloggedin`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include"
    });
    if (result.ok) {
      const data = await result.json();
      return data;
    } else {
      return null;
    }
  } catch (error) {
    console.log(error)
    return null;
  }
}

const getDisplayName = async () => {
  const result = await fetch(`${process.env.REACT_APP_API_PATH}/display`, {
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

const getOrders = async () => {
  const result = await fetch(`${process.env.REACT_APP_API_PATH}/orders`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include"
  });
  const data = await result.json();
  console.log(data);
  return data;
}

const updateAccount = async (body) => {
  const result = await fetch(`${process.env.REACT_APP_API_PATH}/user/update`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
    credentials: "include"
  });
  const data = await result.json();
  console.log(data);
  return data;
}

export {login, logout, register, isLoggedIn, getDisplayName, getOrders, updateAccount}