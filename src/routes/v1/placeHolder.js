const express = require('express');
// import express from 'express'

const fetch = (...args) =>
  import('node-fetch').then(({ default: fetch }) => fetch(...args));

const router = express.Router();

const URL = 'https://jsonplaceholder.typicode.com';

// GET /json-data/albums - get first 10 albums
router.get('/albums', async (req, res) => {
  // get all albums
  const resp = await fetch(`${URL}/albums`);
  const data = await resp.json();

  // take first 10 albums
  const first10 = data.slice(0, 10);

  // return 10 albums
  res.json({ msg: 'getting albums', first10 });
});

// GET /json-data/posts/upto/:count - get posts up to count
///json-data/posts/upto/30 - get first 30 posts

// GET /strapi-posts/ - get all strapi created posts

// POST /strapi-posts/new - add new posts to strapti, add title, author, likes fields only

// GET /noris-jokes/ - get joke from noris api (https://api.chucknorris.io/), return the joke

// GET /noris-jokes/new - get joke from noris api and add it to database table (create table and/or db for jokes)

// POST /noris-jokes/add - send body with {count: 4, password: 'secret123'} and should add 4 jokes to jokes table,
// if password is 'secret123'

module.exports = router;
