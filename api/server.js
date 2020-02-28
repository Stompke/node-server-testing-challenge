const express = require('express'); 
const cors = require('cors');
const server = express();
const helmet = require('helmet');

// middleware
server.use(express.json());
server.use(cors());
server.use(helmet());

// routes
const productRouter = require('../products/router');


server.use('/api/products', productRouter);


server.get('/', (req, res) => {
    res.status(200).json({ message: "it worked!" });
})

module.exports = server;