# Teste Pagar.me - Software Engineer - August/2019

## Guide

- [Teste Pagar.me - Software Engineer - August/2019](#teste-pagarme---software-engineer---august2019)
  - [Guide](#guide)
  - [Challenge](#challenge)
  - [Stack](#stack)
  - [Requirements](#requirements)
  - [Usage](#usage)
  - [Endpoints](#endpoints)
    - [Transactions](#transactions)
    - [Payables](#payables)
  - [License](#license)
  - [Enjoy and Contributing](#enjoy-and-contributing)
  - [QA](#qa)

## Challenge
Nesse desafio você construirá uma versão super simplificada de um Payment Service Provider (PSP) como o Pagar.me e talvez aprender um pouco mais sobre como funcionam pagamentos no Brasil.

[See more](https://github.com/pagarme/vagas/tree/master/desafios/software-engineer-backend)

## Stack
- Docker
- Node
- Express
- MongoDB
- Mongoose

## Requirements

-   MongoDB 4.0.11
-   Node 12.6.0

## Usage

**1. Clone this repo**

> $ git clone git@github.com/[gabriel-barreto/pagarme-teste-software-engineer.git](https://github.com/gabriel-barreto/pagarme-teste-software-engineer)

**2. Build database container**

> $ docker-compose up --build -d
>
> _You can also running it outside from a docker container, to do that change URI in __Config/mongo.config.js___

**3. Install all dependencies**

> $ yarn install
>
> _Obs.: Run this command inside cloned folder_

**4. Run**

> _**To run in development mode:**_
>
> $ yarn dev


> _**To run in production mode:**_
>
> $ yarn start

**5. Verify**

> $ curl http://127.0.0.1:5000/api/run

**Expected Response:**

```json
{ "message": "Hello World!" }
```

**Optional: Run test suite**

> $ yarn test


**6. Before Modify**

_This going to restart the boilerplate repo, remove old commits, link with this repo and init new repo in your application folder_

> $ rm -Rf .git
>
> $ git init

## Endpoints

You can make requests by your own, but I'd left a file named `insomnia-requests.yml` in the root of project folder, in that file you can find all requests to make easier to see responses.

To use it, you need to install [Insomnia](https://insomnia.rest/download/), a nice tool to make HTTP requests.

### Transactions

  - Create
      - Registers a new transaction and create a payable with transaction's correspondents info.
        - method: **POST**,
        - path: _/transactions_

### Payables

  - Balance
    - Returns the paid and waiting funds total of payables.
      - method: **GET**
      - path: _/balance_
  - Statement
    - Returns all entries of payables, you can filter by a since date.
      - method: **GET**,
      - path: _/statement/**:sinceDate?**_
      - params:
        - sinceDate:
          - Type: String,
          - Formate: "MM-DD-YYYY"


## License

[MIT](https://github.com/gabriel-barreto/nodemongo-api-boilerplate/master/LICENSE.md)

## Enjoy and Contributing

[CONTRIBUTING.md](https://github.com/gabriel-barreto/nodemongo-api-boilerplate/blob/master/CONTRIBUTING.md)

## QA

[Email Me!](mailto:barreto-gabriel@outlook.com)

[Chat](https://facebook.com/gabrielgbarreto)

[Tweet](https://twitter.com/gabrielgbarreto)
