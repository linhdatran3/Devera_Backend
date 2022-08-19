'use strict';

/**
 * An asynchronous bootstrap function that runs before
 * your application gets started.
 *
 * This gives you an opportunity to set up your data model,
 * run jobs, or perform some special logic.
 *
 * See more details here: https://strapi.io/documentation/developer-docs/latest/setup-deployment-guides/configurations.html#bootstrap
 */
const _ = require('lodash');

module.exports = async () => {
  try {
    await initStrapiUser();
  } catch (error) {
    strapi.log.error(error);
    strapi.stop();
  }
};

async function initStrapiUser() {
  const strapiUser = {
    username: process.env.STRAPI_USERNAME || 'admin',
    password: process.env.STRAPI_PASSWORD || 'admin',
    email: process.env.STRAPI_EMAIL || 'admin.test@co.kr',
  };

  strapi.log.info('🚀 Initializing Strapi account...');

  // Stop function if strapi user is already created
  const hasStrapiUser = await strapi.admin.services.user.exists();

  if (hasStrapiUser) {
    strapi.log.info('✅ The strapi account has been already initialized');
    return;
  }

  // Create super admin role (Strapi) if it does not exist
  let superAdminRole = await strapi.admin.services.role.getSuperAdmin();

  if (!superAdminRole) {
    await strapi.admin.services.role.createRolesIfNoneExist();
    superAdminRole = await strapi.admin.services.role.getSuperAdmin();
  }

  // Create strapi user
  await strapi.admin.services.user.create({
    ...strapiUser,
    registrationToken: null,
    isActive: true,
    roles: superAdminRole ? [superAdminRole.id] : [],
  });

  await strapi.telemetry.send('didCreateFirstAdmin');

  strapi.log.info('✅ Create new Strapi account successfully!!!');
}