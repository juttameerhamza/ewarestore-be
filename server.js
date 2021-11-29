const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

app.use(cors());
app.use(morgan('dev'));

const products = [
    { name: 'ZR 0035', price: 950 },
    { name: 'ZR 0034', price: 900 },
    { name: 'ZR 0033', price: 850 },
    { name: 'ZR 0032', price: 700 },
    { name: 'ZR 0031', price: 750 },
];

app.get('/v1/products', (req, res, next) => {
    res.send(products);
})

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log('Listening to ' + port);
})