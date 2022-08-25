"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

const { parseMultipartData, sanitizeEntity } = require("strapi-utils");
module.exports = {
  async find(ctx) {
    let entities = [];
    if (ctx.query._q) {
      entities = await strapi.services.product.search(ctx.query);
    } else {
      entities = await strapi.services.product.find(ctx.query);
    }
    //console.log(entities);
    return entities.map((entity) =>
      sanitizeEntity(entity, { model: strapi.models.product })
    );
  },
  async findOne(ctx) {
    const record = await strapi
      .query("product")
      .findOne({ id: Number(ctx.params.id) });
    //console.log("RECORD: ", record);
    return sanitizeEntity(record, { model: strapi.models.product });
  },
  async findById12(ctx) {
    let entity;
    if (ctx.query._q) {
      entity = await strapi.services.product.search(ctx.query);
    } else {
      entity = await strapi.services.product.findById12(ctx.query);
    }
    return sanitizeEntity(entity, { model: strapi.models.product });
  },
  async create(ctx) {
    let entity;
    if (ctx.is("multipart")) {

      const { data, files } = parseMultipartData(ctx);
      //console.log("parse");
      entity = await strapi.services.product.create(data, { files });
    } else {
      entity = await strapi.services.product.create(ctx.request.body);
    }
    return sanitizeEntity(entity, { model: strapi.models.product });
  },
  async getListProductsUserCreated(ctx) {
    const { id } = ctx.params;
    let entities = [];
    const listProducts = [];
    if (ctx.query._q) {
      entities = await strapi.services.product.search(ctx.query);
    } else {
      entities = await strapi.services.product.find(ctx.query);
    }
    // console.log(entities);
   await entities.map((entity) => {
      sanitizeEntity(entity, { model: strapi.models.product });
      if (entity.created_by_user.id === parseInt(id)) {
        listProducts.push(entity);
      }
    });
    return listProducts.map((item) =>
      sanitizeEntity(item, { model: strapi.models.product })
    );
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
  async getListProductsUserOwn(ctx) {
    const { address } = ctx.params;
    let entities = [];
    let listProducts = [];
    if (ctx.query._q) {
      entities = await strapi.services.product.search(ctx.query);
    } else {
      entities = await strapi.services.product.find(ctx.query);
    }
    //console.log(entities);
   await entities.map((entity) => {
      sanitizeEntity(entity, { model: strapi.models.product });
      this.getCurrentOwner(entity.owners_by, entity.num_owners).then((res) => {
        if (res === address) {
          listProducts.push(entity);
        }
      });
    });
    return listProducts.map((item) =>
      sanitizeEntity(item, { model: strapi.models.product })
    );
  },
};
