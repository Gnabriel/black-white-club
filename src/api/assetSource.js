const AssetSource = {
  // JS object creation literal
  apiCall(params) {
    return fetch("https://api.opensea.io/api/v1/" + params, {
      method: "GET",
    })
      .then((response) => response.json())
      .catch((err) => console.error(err));
  },
  getAssets1(params) {
    return AssetSource.apiCall("assets?" + new URLSearchParams(params)).then(
      (data) => {
        console.dir(data.assets);
        return data.assets;
      }
    );
  },
  getAssets2(params) {
    return AssetSource.apiCall(
      "assets?" + new URLSearchParams(params) + "?property=id"
    ).then((data) => {
      console.dir(data);
      return data;
    });
  },
  getCollection(collection) {
    return AssetSource.apiCall(`collection/${collection}`).then((data) => {
      console.dir(data);
      return data;
    });
  },
};
export default AssetSource;
