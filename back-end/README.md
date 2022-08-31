# F2 back-end

- F2 back-end is strapi application.
- Database: postgresql.
- Usecase diagram: public (no authorization), customer, admin. [HERE](https://drive.google.com/file/d/1V72yYJ6W9d1SvHyoBoXOTlbTVq0wre67/view?usp=sharing)
- ERD: [HERE](https://drive.google.com/file/d/1OwABVeCFCq1hZLMM3kfKcg-cQJ9ZVOad/view?usp=sharing)

## Installation

Use the package manager [npm](https://pip.pypa.io/en/stable/) or [yarn](<(https://pip.pypa.io/en/stable/)>) to install f2.

1. Clone the repo

```bash
git clone https://github.com/linhdatran3/Devera_Backend.git
```

2. Install package

```bash
yarn install
```

OR

```bash
npm install
```

## Usage

**Role: public (no authorization)**

- list all product are sell

      >  GET: /products

- count all product

      >  GET: /products/count

- get a nft

      > GET: /products/:id

- get nft's price history through each owner

      >  GET:  /carts/historyPrice/:proId

- find all nfts that the user CREATED by user id

      > GET: /products/getlistcreated/:id

- find all nfts that the user OWNS by user address

      > GET: /products/getlistown/:address

- register account. Condition: connect wallet successfully!

      >  POST:  /auth/local

**Role: customer**
_Notes: APIs of public role, customer role are accessible_

- create a nft

      > POST: /products

- edit a nft (price, status, num_owners).

      > PUT: /products/:id

- set status of nft is sell, resell, draft or storage

      >  PUT: /products/:id

      -  Default : DRAFT : status= false, num_owners = 1.
      -  SELL: set status = true, num_owners = 1.
      -  STORAGE : set status = false, mum_owners > 1.
      -  RESELL: set status = true, num_owners > 1.

- view account infomation

      > GET: /users/me

- view the list of sold nfts

      > GET:  /carts/historytransaction/:address

- view history of nft purchases

      > GET: /carts/user/:id

- update account information

      > PUT: users/:id

**Role: admin**

- Post new event to homepage
- Manage customer

  - Send email
  - CRUD customer

- View sales statistics

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
