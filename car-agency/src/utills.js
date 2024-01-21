

export const sendRequest = (url, data={}, method='POST', headers={}) =>{
    return fetch(url, {
      method: method,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        ...headers
      },
      body: JSON.stringify(data),
    }).then((r) => r.json());
}