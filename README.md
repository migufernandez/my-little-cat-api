# my-little-cat-api

## Introduction

## Getting started

Welcome to the internal API team. As a developer on the team (not a public developer) use the instructions below to clone the repo, install dependencies and start the API.

```

$ git clone https://github.com/migufernandez/my-little-cat-api.git
$ cd my-little-cat-api
$ npm install
$ node start

```
## Endpoints

### `/`

returns and welcome message including a link to the repo and api documentation

### Get all the cats - `/cats`

retrieves a collection of cats.

```
GET /cats
```
response 200

```
[
array of objects of all cats.

]
```

### Get a cat - `/cats/{id}`

retrieves a single cat resource from the collection of cats.

```
GET /cats/felix
```
response 200

```
{
  object of felix
}
```

### Get all the breeds - `/breeds`

retrieves a collection of breeds.

```
GET /breeds
```
respnse 200

```
[
array of breeds
]
```

### Get a breed - `/breeds/{id}`

retrieves a single cat resource from the collection of breeds.

```
GET /breeds/tabby
```
response 200
```
{
  object of tabby
}
```
