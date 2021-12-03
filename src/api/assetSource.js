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
    return AssetSource.apiCall("assets?" + new URLSearchParams(params)).then(
      (data) => {
        console.dir(data.assets);
        const filteredAssets = data.assets.map((asset) => {
          return (asset = {
            id: asset.id,
            name: asset.name,
            animation_url: asset.animation_url,
            image_url: asset.image_url,
            wei_price: asset.sell_orders
              ? asset.sell_orders[0].current_price
              : null,
            eth_price: asset.sell_orders
              ? asset.sell_orders[0].current_price * 10 ** -18
              : null,
            usd_price: asset.sell_orders
              ? asset.sell_orders[0].current_price *
                10 ** -18 *
                asset.sell_orders[0].payment_token_contract.usd_price
              : null,
          });
        });
        console.dir(filteredAssets);
        return filteredAssets;
      }
    );
  },
  getCollection(collection) {
    return AssetSource.apiCall(`collection/${collection}`).then((data) => {
      console.dir(data);
      return data;
    });
  },
};
export default AssetSource;
