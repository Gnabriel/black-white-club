const AssetSource = {
  apiCall(params) {
    return fetch("https://api.opensea.io/api/v1/" + params, {
      method: "GET",
    })
      .then((response) => response.json())
      .catch((err) => console.error(err));
  },
  getAssetsFull(params) {
    return AssetSource.apiCall("assets?" + new URLSearchParams(params)).then(
      (data) => {
        return data.assets;
      }
    );
  },
  getAssets(params) {
    return AssetSource.apiCall("assets?" + new URLSearchParams(params)).then(
      (data) => {
        //console.dir(data);

        const filteredAssets = data.assets.map((asset) => {
          return (asset = {
            id: parseInt(asset.token_id),
            owner:
              asset.owner && asset.owner.user
                ? asset.owner.user.username
                : null,
            name: asset.name,
            description: asset.description,
            animationUrl: asset.animation_url,
            imageUrl: asset.image_url,
            weiPrice: asset.sell_orders
              ? asset.sell_orders[0].current_price
              : null,
            ethPrice: asset.sell_orders
              ? asset.sell_orders[0].current_price * 10 ** -18
              : null,
            usdPrice: asset.sell_orders
              ? asset.sell_orders[0].current_price *
                10 ** -18 *
                asset.sell_orders[0].payment_token_contract.usd_price
              : null,
            topBid: asset.top_bid,
            lastSale: asset.last_sale
              ? {
                  date: new Date(asset.last_sale.event_timestamp),
                  ethPrice: asset.last_sale.payment_token.eth_price,
                  usdPrice: asset.last_sale.payment_token.usd_price,
                }
              : null,
            numSales: asset.num_sales,
            openseaLink: asset.permalink,
          });
        });
        return filteredAssets;
      }
    );
  },
  getCollection(collection) {
    return AssetSource.apiCall(`collection/${collection}`).then((data) => {
      return data;
    });
  },
};

export default AssetSource;
