const login = async (body) => {
  const result = await fetch(`${process.env.REACT_APP_API_PATH}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: body,
    credentials: "include"
  }
);
const data = await result.json();
console.log(data);
return data;
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

export {login, logout, register}