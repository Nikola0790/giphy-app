const apiKey = "wXm5oFtUbPZZpwwAylrZTWdS4bF8nZJr";
const urlForTrending = `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}`;

const getData = () => {
  return fetch(urlForTrending)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data.data;
    });
};

export default getData;
