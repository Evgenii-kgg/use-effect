export const netWorkService = ({ url, method, body }) => {
    console.log("dfdf", method, body, url);
  
    const name = body ? JSON.stringify(body) : null;
  
    return fetch(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${url}`, {
      method,
      mode: 'cors',
      headers: {
        "Content-Type": "text/plain",
      },
      body: name,
    }).then((res) => res.json());
  };

  
  
  
