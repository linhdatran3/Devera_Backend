"use strict";

const { sanitizeEntity } = require("strapi-utils");
/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async historyShoppingCart(ctx) {
    //userId
    const { id } = ctx.params;
    let entities;
    if (ctx.query._q) {
      entities = await strapi.services.cart.search(ctx.query);
    } else {
      entities = await strapi.services.cart.find(ctx.query);
    }
    const listCart = [];
    entities.map((entity) => {
      sanitizeEntity(entity, { model: strapi.models.cart });
      if (entity.users_permissions_user.id === parseInt(id)) {
        listCart.push(entity);
      }
    });
    return listCart.map((item) =>
      sanitizeEntity(item, { model: strapi.models.cart })
    );
  },
};
