// utils.js负责前后端通信： (暂时用proxy)
// 生成url

const domain = "";

export const login = (credential, asAdmin) => {
  const loginUrl = `${domain}/authenticate/${asAdmin ? "admin" : "guest"}`;
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

export const register = (credential, asAdmin) => {
  const registerUrl = `${domain}/register/${asAdmin ? "admin" : "guest"}`; // 和上面唯一的区别
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

export const getShipments = () => {
  const authToken = localStorage.getItem("authToken");
  const listReservationsUrl = `${domain}/shipments`;

  return fetch(listReservationsUrl, {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  }).then((response) => {
    if (response.status !== 200) {
      throw Error("Fail to get shipment list");
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
  const searchStaysUrl = new URL(`${domain}/search/`);
  searchStaysUrl.searchParams.append("guest_number", query.guest_number);
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

export const cancelReservation = (shipmentId) => {
  const authToken = localStorage.getItem("authToken");
  const cancelReservationUrl = `${domain}/shipments/${shipmentId}`;

  return fetch(cancelReservationUrl, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  }).then((response) => {
    if (response.status !== 200) {
      throw Error("Fail to cancel shipment");
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



export const getVehicleById = (id) => {
  const authToken = localStorage.getItem("authToken");
  const getVehicleByIdUrl = `${domain}/vehicles/${id}`;

  return fetch(getVehicleByIdUrl, {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  }).then((response) => {
    if (response.status !== 200) {
      throw Error("Fail to search vehicle");
    }
    return response.json();
  });
};


export const listVehicleByCenter = (center_id) => {
  const authToken = localStorage.getItem("authToken");
  const listVehicleByCenterUrl = `${domain}/vehicles/center/${center_id}`;

  return fetch(listVehicleByCenterUrl, {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  }).then((response) => {
    if (response.status !== 200) {
      throw Error("Fail to search vehicles");
    }
    return response.json();
  });
};


export const addNewVehicle = (data) => {
  const authToken = localStorage.getItem("authToken");
  const addNewVehicleyUrl = `${domain}/vehicles`;

  return fetch(addNewVehicleyUrl, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
    body: data,
  }).then((response) => {
    if (response.status !== 200) {
      throw Error("Fail to add new vehicle");
    }
  });
};


export const deleteVehicle = (vehicleId) => {
  const authToken = localStorage.getItem("authToken");
  const deleteVehicleUrl = `${domain}/vehicles/${vehicleId}`;

  return fetch(deleteVehicleUrl, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  }).then((response) => {
    if (response.status !== 200) {
      throw Error("Fail to delete vehicle");
    }
  });
};

export const getDelivery = (fo, start_date, end_date) => {
  const authToken = localStorage.getItem("authToken");
  const getDeliveryUrl = `${domain}/deliveries/${fo}_${start_date}_${end_date}`;

  return fetch(getDeliveryUrl, {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  }).then((response) => {
    if (response.status !== 200) {
      throw Error("Fail to search delivery");
    }
    return response.json();
  });
};

export const deleteDelivery = (deliveryId) => {
  const authToken = localStorage.getItem("authToken");
  const deleteDeliveryUrl = `${domain}/deliveries/${deliveryId}`;

  return fetch(deleteDeliveryUrl, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  }).then((response) => {
    if (response.status !== 200) {
      throw Error("Fail to delete delivery");
    }
  });
};