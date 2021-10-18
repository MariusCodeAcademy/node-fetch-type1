const express = require('express');
// import express from 'express'

const fetch = (...args) =>
  import('node-fetch').then(({ default: fetch }) => fetch(...args));

const router = express.Router();

const URL = 'http://localhost:1337';

// GET /strapi-posts/ - get all strapi created posts
router.get('/', async (req, res) => {
  // get all albums
  try {
    const resp = await fetch(`${URL}/posts`);
    const data = await resp.json();
    res.json({ msg: 'getting strapi posts', data });
  } catch (error) {
    console.log('error', error);
    res.status(500);
  }
});

// POST /strapi-posts/new - add new posts to strapti, add title, author, likes fields only

// GET /noris-jokes/ - get joke from noris api (https://api.chucknorris.io/), return the joke

// GET /noris-jokes/new - get joke from noris api and add it to mysql database table (create table and/or db for jokes)

// POST /noris-jokes/add - send body with {count: 4, password: 'secret123'} and should add 4 jokes to jokes table,
// if password is 'secret123' (extra points with promise.all())

module.exports = router;
