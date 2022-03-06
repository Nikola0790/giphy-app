const apiKey = "wXm5oFtUbPZZpwwAylrZTWdS4bF8nZJr";
const urlForSearch = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=`;

const getSearchData = (name) => {
  return fetch(`${urlForSearch}${name}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    });
};

export default getSearchData;
