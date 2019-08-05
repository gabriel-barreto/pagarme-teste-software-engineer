# NodeMongo API Boilerplate

_Node + Express + Mongoose_

This boilerplate aux you to build a powerful API using MongoDB and NodeJS!

## Guide

- [NodeMongo API Boilerplate](#NodeMongo-API-Boilerplate)
  - [Guide](#Guide)
  - [Requirements](#Requirements)
    - [Recomended](#Recomended)
  - [Usage](#Usage)
  - [License](#License)
  - [Enjoy and Contributing](#Enjoy-and-Contributing)
  - [QA](#QA)

## Requirements

### Recomended

-   MongoDB ^3.6.4
-   Node ^8.11.4
-   NPM ^5.6.0

## Usage

**1. Clone this repo**

> $ git clone git@github.com/gabriel-barreto/nodemongo-api-boilerplate.git

**2. Install all dependencies**

_Obs.: Run this command inside cloned folder_

> $ npm install
> $ yarn install

**2. Run test suite**

> $ npm test
> $ yarn test

**4. Run**

_This step isn`t necessary if you're using this boilerplate docker containers_

> $ npm run dev
>
> _To run in development mode_

> $ npm start
>
> _To run in production mode_

**5. Verify**

_If you're running out from container use port 5000 instead 5555_

> $ curl http://127.0.0.1:5000/api/run

**Expected Response:**

```json
{ "message": "Hello World!" }
```

**6. Before Modify**

_This going to restart the boilerplate repo, remove old commits, link with this repo and init new repo in your application folder_

> $ rm -Rf .git
>
> $ git init

## License

[MIT](https://github.com/gabriel-barreto/nodemongo-api-boilerplate/master/LICENSE.md)

## Enjoy and Contributing

[CONTRIBUTING.md](https://github.com/gabriel-barreto/nodemongo-api-boilerplate/blob/master/CONTRIBUTING.md)

## QA

[Email Me!](mailto:barreto-gabriel@outlook.com)

[Chat](https://facebook.com/gabrielgbarreto)

[Tweet](https://twitter.com/gabrielgbarreto)
