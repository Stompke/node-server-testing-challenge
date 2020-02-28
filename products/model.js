const db = require('../database/connection')

module.exports = {
    all,
    add,
    remove
}

function all() {
    return db('products')

}

function add(product){
    return db('products')
        .insert(product, 'id')
}

function remove(id){
    return db('products')
        .where({id})
        .del()
}