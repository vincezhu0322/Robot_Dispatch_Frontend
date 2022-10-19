// utils.js负责前后端通信： (暂时用proxy) 
// 生成url

//const domain = "https://sound-fastness-362223.uk.r.appspot.com";
const domain = "";

// credentials = {susername: string, password: string}
// asHost: boolean (host, guest)
export const login = (credential, asHost) => { 
  const loginUrl = `${domain}/authenticate/${asHost ? "host" : "guest"}`; // 组装 url
  // 配置。fetch：发送请求到第一个参数
  return fetch(loginUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json", // 所有header都用默认，只有这个要用json进行解析
    },
    body: JSON.stringify(credential), // 把数据拍扁。和上一句配套
  }).then((response) => {  // 上面函数请求成功时运行then之后的内容
    if (response.status !== 200) {
        throw Error("Fail to log in");
    }
 
    // 请求从后端回来时进行return。解析json。
    // 一路ruturn给login函数，作为state返回给ui层
    return response.json(); // 不是所有都要对数据进行解析
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
 
// 拉取guest的reservation（没有参数，因为只有guest才需要看reservation，不需要区分）
export const getReservations = () => {
  // 拿token， 放在header上
  const authToken = localStorage.getItem("authToken"); // token存在local storage里。user id

  const listReservationsUrl = `${domain}/reservations`;
 
  return fetch(listReservationsUrl, {
    headers: {
      Authorization: `Bearer ${authToken}`, // 固定写法
    },
  }).then((response) => {
    if (response.status !== 200) {
      throw Error("Fail to get reservation list");
    }
 
    return response.json();
  });
};
 
export const getStaysByHost = () => {
  const authToken = localStorage.getItem("authToken");
  const listStaysUrl = `${domain}/stays/`;
 
  return fetch(listStaysUrl, {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  }).then((response) => {
    if (response.status !== 200) {
      throw Error("Fail to get stay list");
    }
 
    return response.json();
  });
};
 
export const searchStays = (query) => {
  const authToken = localStorage.getItem("authToken");
  // 给后端传的参数不在body上， 在url的 query string上。
  // url:  [protocol]://[domain]:[port]/[path]?[querystring]
  // 手写容易写错，用自带的 URL功能 组装

  const searchStaysUrl = new URL(`https://sound-fastness-362223.uk.r.appspot.com/search/`);
  //const searchStaysUrl = new URL(`http://localhost:3000/search/`);
  searchStaysUrl.searchParams.append("guest_number", query.guest_number);
  searchStaysUrl.searchParams.append(
    "checkin_date",
    query.checkin_date.format("YYYY-MM-DD")
  );
  searchStaysUrl.searchParams.append(
    "checkout_date",
    query.checkout_date.format("YYYY-MM-DD")
  );
// 先固定location。更好的方式：接入sdk or navagator gro location（调取用户的location）
  searchStaysUrl.searchParams.append("lat", 37);
  searchStaysUrl.searchParams.append("lon", -122);
 
  return fetch(searchStaysUrl, {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  }).then((response) => {
    if (response.status !== 200) {
      throw Error("Fail to search stays");
    }
 
    return response.json();
  });
};
 
export const deleteStay = (stayId) => {
  const authToken = localStorage.getItem("authToken");
  const deleteStayUrl = `${domain}/stays/${stayId}`;
 
  return fetch(deleteStayUrl, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  }).then((response) => {
    if (response.status !== 200) {
      throw Error("Fail to delete stay");
    }
  });
};
 
export const bookStay = (data) => {
  const authToken = localStorage.getItem("authToken");
  const bookStayUrl = `${domain}/reservations`;
 
  return fetch(bookStayUrl, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${authToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((response) => {
    if (response.status !== 200) {
      throw Error("Fail to book reservation");
    }
  });
};
 
export const cancelReservation = (reservationId) => {
  const authToken = localStorage.getItem("authToken");
  const cancelReservationUrl = `${domain}/reservations/${reservationId}`;
 
  return fetch(cancelReservationUrl, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  }).then((response) => {
    if (response.status !== 200) {
      throw Error("Fail to cancel reservation");
    }
  });
};
 
export const getReservationsByStay = (stayId) => {
  const authToken = localStorage.getItem("authToken");
  const getReservationByStayUrl = `${domain}/stays/reservations/${stayId}`;
 
  return fetch(getReservationByStayUrl, {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  }).then((response) => {
    if (response.status !== 200) {
      throw Error("Fail to get reservations by stay");
    }
 
    return response.json();
  });
};
 
export const uploadStay = (data) => {
  const authToken = localStorage.getItem("authToken");
  const uploadStayUrl = `${domain}/stays`;
 
  return fetch(uploadStayUrl, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
    body: data,
  }).then((response) => {
    if (response.status !== 200) {
      throw Error("Fail to upload stay");
    }
  });
};

