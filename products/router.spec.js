const request = require('supertest');
const server = require('../api/server');

describe('Product API Tests', () => {
    it('should run a test', () => {
        expect(true).toBe(true);
    })

    it('Should have an array', () => {
        return request(server)
        .get('/api/products')
        .then(res => {
            console.log(res.body)
            expect(Array.isArray(res.body)).toBe(true);
        })
    })

    let productId
    it('should add a product', () => {
        return request(server)
        .post('/api/products')
        .send({name: `testProduct`, price: "11"})
        .then(res => {
            // expect(Array.isArray(res)).toBe(true);
            // expect(res.body).toBe(true);
            // productId = res.body
            productId = res.body[0]
            console.log(productId)
            expect(Array.isArray(res.body)).toBe(true);
        })
    })

    it('should delete a product', () => {
        return request(server)
        .delete(`/api/products/${productId}`)
        .then(res => {
            expect(res.body).toBe(1);
        })
    })


})