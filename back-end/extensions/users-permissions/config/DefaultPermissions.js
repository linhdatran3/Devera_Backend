const DEFAULT_PERMISSIONS = [
  //user permissions
  {
    action: "admincallback",
    controller: "auth",
    type: "users-permissions",
    roleType: "public",
  },
  {
    action: "adminregister",
    controller: "auth",
    type: "users-permissions",
    roleType: "public",
  },
  {
    action: "callback",
    controller: "auth",
    type: "users-permissions",
    roleType: "public",
  },
  {
    action: "connect",
    controller: "auth",
    type: "users-permissions",
    roleType: null,
  },
  {
    action: "forgotpassword",
    controller: "auth",
    type: "users-permissions",
    roleType: "public",
  },
  {
    action: "register",
    controller: "auth",
    type: "users-permissions",
    roleType: "public",
  },
  {
    action: "emailconfirmation",
    controller: "auth",
    type: "users-permissions",
    roleType: "public",
  },
  {
    action: "resetpassword",
    controller: "auth",
    type: "users-permissions",
    roleType: "public",
  },
  {
    action: "me",
    controller: "user",
    type: "users-permissions",
    roleType: null,
  },

  {
    action: "init",
    controller: "userspermissions",
    type: null,
    roleType: null,
  },

  { action: "autoreload", controller: null, type: null, roleType: null },

  //upload
  { action: "find", controller: "upload", type: "upload", roleType: null },
  { action: "findone", controller: "upload", type: "upload", roleType: null },
  { action: "upload", controller: "upload", type: "upload", roleType: "vendor" },
  { action: "destroy", controller: "upload", type: "upload", roleType: "vendor" },

  //product
  {
    action: "findbyid12",
    controller: "product",
    type: null,
    roleType: "public",
  },
  { action: "find", controller: "product", type: null, roleType: null },
  { action: "findone", controller: "product", type: null, roleType: null },
  { action: "count", controller: "product", type: null, roleType: null },
  { action: "create", controller: "product", type: null, roleType: "vendor" },
  { action: "update", controller: "product", type: null, roleType: "vendor" },
  { action: "delete", controller: "product", type: null, roleType: "vendor" },

  //category
  { action: "find", controller: "category", type: null, roleType: null },
  { action: "findone", controller: "category", type: null, roleType: null },

  //store
  { action: "find", controller: "store", type: null, roleType: null },
  { action: "findone", controller: "store", type: null, roleType: null },
  { action: "count", controller: "store", type: null, roleType: null },
  { action: "create", controller: "store", type: null, roleType: "vendor" },
  { action: "update", controller: "store", type: null, roleType: "vendor" },
  { action: "delete", controller: "store", type: null, roleType: "vendor" },
];
module.exports = { DEFAULT_PERMISSIONS };
