const AssetSource = {

    // JS object creation literal
    apiCall() {
      return (
        fetch('https://api.opensea.io/api/v1/assets?order_direction=desc&offset=0&limit=20&collection=the-fungible-by-pak', {
        method: "GET",})
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err)));
    },
    searchAssets(params) {
      return AssetSource.apiCall(
      ).then((data) => data.results);
    },
  };