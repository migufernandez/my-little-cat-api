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

## CATS

### Create a cat - `POST /cats`

Adds a cat to a collection of cats. Requires a content header json

```
POST /cats

'Content Type = 'application/json'

{
  id: 'felix',
  type: 'cat',
  name: 'felix',
  breed: 'tabby',
  owner: 'miguel',
  age: 10
}

```
response 200

```

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
### Update a cat - `PUT /cats/{id}`

- TODO

### Delete a cat - `DELETE /cats/{id}`

- TODO

### Get all the cats - `GET/cats`

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

## BREEDS

### Create a breed - `POST /breeds`

- TODO

### Get a breed - `GET /breeds/{id}`

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

### Update a cat - `PUT /breeds/{id}`

- TODO

### Delete a cat - `DELETE /breeds/{id}`

- TODO

### List all the breeds - `/breeds`

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
