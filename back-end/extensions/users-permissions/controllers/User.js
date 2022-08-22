"use strict";

/**
 * User.js controller
 *
 * @description: A set of functions called "actions" for managing `User`.
 */

const _ = require("lodash");
const { sanitizeEntity } = require("strapi-utils");
const adminUserController = require("./user/admin");
const apiUserController = require("./user/api");

const sanitizeUser = (user) =>
  sanitizeEntity(user, {
    model: strapi.query("user", "users-permissions").model,
  });

const resolveController = (ctx) => {
  const {
    state: { isAuthenticatedAdmin },
  } = ctx;

  return isAuthenticatedAdmin ? adminUserController : apiUserController;
};

const resolveControllerMethod = (method) => (ctx) => {
  const controller = resolveController(ctx);
  const callbackFn = controller[method];

  if (!_.isFunction(callbackFn)) {
    return ctx.notFound();
  }

  return callbackFn(ctx);
};

module.exports = {
  create: resolveControllerMethod("create"),
  update: resolveControllerMethod("update"),

  /**
   * Retrieve a user record.
   * @return {Object}
   */
  async findByAddress(ctx) {
    const { address } = ctx.params;
    let data = await strapi.plugins["users-permissions"].services.user.fetch({
      walletAddress: address,
    });
    //console.log(data);
    if (data) {
      data = sanitizeUser(data);
    }
    ctx.body = data;
  }
};
