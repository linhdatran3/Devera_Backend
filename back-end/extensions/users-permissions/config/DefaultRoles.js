const DEFAULT_ROLES = [

  {
    name: "Vendor",
    description: "owner of store",
    type: "vendor",
  },
  {
    name: "Customer",
    description: "Customer will buy the product in the store.",
    type: "customer",
  },
  // It's recommend to not delete this role
  {
    name: "Authenticated",
    description: "Default role given to authenticated user.",
    type: "authenticated",
  },

  // It's recommend to not delete this role
  {
    name: "Public",
    description: "Default role given to unauthenticated user.",
    type: "public",
  },
];

module.exports = { DEFAULT_ROLES };
