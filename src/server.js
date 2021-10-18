const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const mysql = require('mysql2/promise');
const dbConfig = require('./dbConfig');

const PORT = process.env.SERVER_PORT || 3000;

const app = express();

// middleware
app.use(morgan('common'));
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello express');
});

const jsonDataRoutes = require('./routes/v1/placeHolder');
const strapiRoutes = require('./routes/v1/strapi');

app.use('/json-data', jsonDataRoutes);
app.use('/strapi-posts', strapiRoutes);

// app 404
app.all('*', (req, res) => {
  // address not found
  res.status(404).json('Page not found 404');
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
