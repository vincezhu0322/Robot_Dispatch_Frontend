// utils.js负责前后端通信： (暂时用proxy) 
// 生成url

const domain = "";


export const login = (credential, asHost) => { 
  const loginUrl = `${domain}/authenticate/${asHost ? "host" : "guest"}`; 
  return fetch(loginUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json", 
    },
    body: JSON.stringify(credential), 
  }).then((response) => { 
    if (response.status !== 200) {
        throw Error("Fail to log in");
    }
 
    
    return response.json(); 
  });
};
 
export const register = (credential, asHost) => {
  const registerUrl = `${domain}/register/${asHost ? "host" : "guest"}`; // 和上面唯一的区别
  return fetch(registerUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credential),
  }).then((response) => {
    if (response.status !== 200) {
      throw Error("Fail to register");
    }
  });
};
