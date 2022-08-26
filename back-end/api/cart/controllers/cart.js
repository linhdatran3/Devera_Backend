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
    console.log("alo");
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
  async getCurrentOwner(list, num) {
    switch (num) {
      case 1:
        return list?.num1;
      case 2:
        return list?.num2;
      case 3:
        return list?.num3;
      case 4:
        return list?.num4;
      case 5:
        return list?.num5;
      case 6:
        return list?.num6;
      default:
      // code block
    }
  },
  async historyTransactionOfUser(ctx) {
    //userId
    console.log("transaction");
    const { address } = ctx.params;
    let entities;
    if (ctx.query._q) {
      entities = await strapi.services.cart.search(ctx.query);
    } else {
      entities = await strapi.services.cart.find(ctx.query);
    }
    const listCarts = [];
   await entities.map((entity) => {
      sanitizeEntity(entity, { model: strapi.models.cart });
      this.getCurrentOwner(entity.last_owners, entity.num_owners).then((res) => {
        if (res === address) {
          // console.log(address);
          // console.log(res);
          // console.log(entity);
          listCarts.push(entity);
        }
      });
    });
    // console.log(listCarts);
    return listCarts.map((item) =>
      sanitizeEntity(item, { model: strapi.models.cart })
    );
  },
};
