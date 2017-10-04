const express = require('express')
const app = express()
const { filter, find, compose } = require('ramda')
const typeFilter = type => item => item.type === type
const breedFilter = typeFilter('breed')
const catFilter = typeFilter('cat')

const database = [
  { id: 'tabby', type: 'breed', desc: 'a great cat' },
  { id: 'siamese', type: 'breed', desc: 'a bad cat' },
  { id: 'maine coon', type: 'breed', desc: 'a fat cat' },
  { id: 'minx', type: 'breed', desc: 'a crazy cat' },
  {
    id: 'felix',
    type: 'cat',
    name: 'felix',
    breed: 'tabby',
    owner: 'miguel',
    age: 10
  },
  {
    id: 'hector',
    type: 'cat',
    name: 'hector',
    breed: 'siamese',
    owner: 'cam',
    age: 12
  },
  {
    id: 'juan',
    type: 'cat',
    name: 'juan',
    breed: 'maine coon',
    owner: 'bill',
    age: 14
  },
  {
    id: 'mike',
    type: 'cat',
    name: 'mike',
    breed: 'minx',
    owner: 'curry',
    age: 16
  }
]

app.get('/', function(req, res) {
  res.send(`<html>
      <body>
        <h1>CATS API, MEOW!</h1>
      </body>
      <hr/>
      <a href="https://github.com/migufernandez/my-little-cat-api.git">Documentation</a>
    </html>`)
})

app.get('/breeds', function(req, res) {
  // send a collection of breeds from the 'database'.
  // filter the breeds from the rest of the info in the 'database'.
  const breeds = item => item.type === 'breed'
  res.send(filter(breeds, database))
})

app.get('/breeds/:id', function(req, res) {
  const breedID = req.params.id
  const specificBreed = cat => cat.id === breedID
  res.send(find(specificBreed, database))
})

app.get('/cats', function(req, res) {
  const catFilter = item => item.type === 'cat'
  res.send(filter(catFilter, database))
})

app.get('/cats/:id', function(req, res) {
  // const catID = req.params.id
  // res.send('You hit the /cats/:id route. Coming soon. The cat id is: ' + catID)
  const catID = req.params.id
  const specificCat = cat => cat.id === catID
  res.send(find(specificCat, database))
})

app.listen(4000, () => console.log('API is UP! MEOW! on port 4000'))
