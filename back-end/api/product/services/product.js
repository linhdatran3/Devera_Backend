"use strict";
const { isDraft } = require("strapi-utils").contentTypes;
/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-services)
 * to customize this service
 */

module.exports = {
  find(params, populate) {
    return strapi.query("product").find(params, populate);
  },
  findById12() {
    console.log("query");
    return strapi.query("product").findOne({ id: 12 });
  },
  async create(data, { files } = {}) {
    const validData = await strapi.entityValidator.validateEntityCreation(
      strapi.models.product,
      data,
      { isDraft: isDraft(data, strapi.models.product) }
    );
    console.log(data);
    console.log(files);
    const entry = await strapi.query("product").create(validData);

    if (files) {
      // automatically uploads the files based on the entry and the model
      await strapi.entityService.uploadFiles(entry, files, {
        model: "product",
        // if you are using a plugin's model you will have to add the `source` key (source: 'users-permissions')
      });
      return this.findOne({ id: entry.id });
    }

    return entry;
  },
};
