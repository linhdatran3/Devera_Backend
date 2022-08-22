"use strict";

/**
 * User.js service
 *
 * @description: A set of functions similar to controller's actions to avoid code duplication.
 */

const crypto = require("crypto");
const bcrypt = require("bcryptjs");

const { sanitizeEntity, getAbsoluteServerUrl } = require("strapi-utils");

module.exports = {
  /**
   * Promise to edit a/an user.
   * @return {Promise}
   */
  async edit(params, data, { files } = {}) {
    // if (values.password) {
    //   values.password = await strapi.plugins['users-permissions'].services.user.hashPassword(
    //     values
    //   );
    // }

    // return strapi.query('user', 'users-permissions').update(params, values);

    const validData = await strapi.entityValidator.validateEntityUpdate(
      strapi.models.user,
      data
    );
    const entry = await strapi
      .query("user", "users-permissions")
      .update(params, validData);

    if (files) {
      // automatically uploads the files based on the entry and the model
      await strapi.entityService.uploadFiles(entry, files, {
        model: "user",
        source: "users-permissions",
        // if you are using a plugin's model you will have to add the `source` key (source: 'users-permissions')
      });
     // return this.findOne({ id: entry.id });
    }

    return entry;
  },
};
