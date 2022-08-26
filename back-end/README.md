# F2 back-end

F2 back-end is strapi application.

## Installation

Use the package manager [npm](https://pip.pypa.io/en/stable/) or [yarn](<(https://pip.pypa.io/en/stable/)>) to install f2.

1. Clone the repo

```bash
git clone https://github.com/linhdatran3/Devera_Backend.git
```

2. Install package

```bash
npm install
```

OR

```bash
npm install
```

## Usage

**Role: customer**
**Products**

- list all product are sell
  > GET: /products
- get a item
  > GET: /products/:id
- get a item
  > GET: /products/:id
- get list product which user created:
  > GET: /products/getlistcreated/:id
- get list product which user is own (include product: create, buy).
  > GET: /products/getlistown/:id

**Carts**
**Users**

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
