require('dotenv').config();

const router = require('express').Router();

const Products = require('./model');



router.get('/', (req, res) => {
    Products.all()
    .then(products => {
        res.status(200).json(products)
    })
    .catch(err => {
        res.status(500).json({ error: "Could not get products" })
    })
})

router.post('/', (req, res) => {
    Products.add(req.body)
    .then(added => {
        res.status(201).json(added);
    })
    .catch(err => {
        res.status(500).json({ error: "there was an error adding the product" });
    })
})

router.delete('/:id', (req, res) => {
    console.log(req.params.id)
    Products.remove(req.params.id)
    .then(deleted => {
        res.status(200).json(deleted);
    })
    .catch(err => {
        res.status(500).json({ error: "Could not delete that product" });
    })
})

module.exports = router;