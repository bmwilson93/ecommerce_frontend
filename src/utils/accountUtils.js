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
  }
);
// const data = await result.json();
console.log(result);
// return data;
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
// const data = await result.json();
console.log(result);
// return data;
}

const isLoggedIn = async () => {
  const result = await fetch(`${process.env.REACT_APP_API_PATH}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include"
  }
);
// const data = await result.json();
console.log(result);
// return data;
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


export {login, logout, register, getDisplayName}