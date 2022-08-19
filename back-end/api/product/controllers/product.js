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
    console.log(entities);
    return entities.map((entity) =>
      sanitizeEntity(entity, { model: strapi.models.product })
    );
  },
  async findOne(ctx) {
    const record = await strapi
      .query("product")
      .findOne({ id: Number(ctx.params.id) });
    console.log("RECORD: ", record);
    return sanitizeEntity(record, { model: strapi.models.product });
  },
  async findById12(ctx) {
    let entity;
    console.log("ok");
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
      console.log("multipart");
      console.log(ctx);
      const { data, files } = parseMultipartData(ctx);
      //console.log("parse");
      entity = await strapi.services.product.create(data, { files });
     
    } else {
      entity = await strapi.services.product.create(ctx.request.body);
    }
    console.log(sanitizeEntity(entity, { model: strapi.models.product }));
    return sanitizeEntity(entity, { model: strapi.models.product });
  },
};
