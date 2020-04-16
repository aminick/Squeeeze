import { generateHash } from "../utils";

const API_ROOT = "https://jsonbox.io/box_89bbb293cb49c7dbfc1e";

export const createUrl = (payload) => {
  return fetch(`${API_ROOT}`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(payload),
  }).then((response) => {
    return response.json().then((json) => {
      if (!response.ok) {
        return Promise.reject(json);
      } else {
        return json;
      }
    });
  });
};

export const getUrl = (hash) => {
  return fetch(`${API_ROOT}?q=short:${hash}`).then((response) => {
    return response.json().then((json) => {
      if (!response.ok) {
        return Promise.reject(json);
      } else {
        return json;
      }
    });
  });
};

export const createHash = async () => {
  let hash = generateHash();
  let a = await getUrl(hash).then((json) => {
    if (json.length != 0) {
      return createHash();
    } else {
      return hash;
    }
  });

  return a;
};
