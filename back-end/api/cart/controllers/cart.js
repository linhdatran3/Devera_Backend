"use strict";

const { sanitizeEntity } = require("strapi-utils");
/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async historyShoppingCart(ctx) {
    //userId
    console.log("day ne");
    const { id } = ctx.params;
    let entities;
    if (ctx.query._q) {
      entities = await strapi.services.cart.search(ctx.query);
    } else {
      entities = await strapi.services.cart.find(ctx.query);
    }
    const listCarts = [];
    console.log(id);
    entities.map((entity) => {
      sanitizeEntity(entity, { model: strapi.models.cart });
      if (entity.new_owner.id === parseInt(id)) {
        listCarts.push(entity);
      }
    });
    console.log(listCarts);
    return listCarts.map((item) =>
      sanitizeEntity(item, { model: strapi.models.cart })
    );
  },
  async historyPriceOfProduct(ctx) {
    const { proId } = ctx.params;
    let count = 0;
    let entities = [];
    let listData = {
      date: [],
      price: [],
      index: 0,
    };
    if (ctx.query._q) {
      entities = await strapi.services.cart.search(ctx.query);
    } else {
      entities = await strapi.services.cart.find(ctx.query);
    }
    console.log(entities);
    await entities.map((entity) => {
      sanitizeEntity(entity, { model: strapi.models.cart });
      if (entity.product.id === parseInt(proId)) {
        count++;
        listData.date.push(entity.created_at);
        listData.price.push(entity.total);
        listData.index = count;
      }
    });
    return listData;
  },
};
