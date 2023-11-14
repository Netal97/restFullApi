const express = require('express');
const router = express.Router();

// Handles incoming GET requests to /orders

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Orders were fetched'
    });
});

router.post('/', (req, res, next) => {
    const order = {
        productId: req.body.productId,
        quantity: req.body.quantity
    }
    res.status(200).json({
        message: 'Orders were created',
        order: order
    });
});

router.get('/:oId', (req, res, next) => {
    res.status(200).json({
        message: 'Orders details',
        oId: req.params.oId
    });
});

router.delete('/:oId', (req, res, next) => {
    res.status(200).json({
        message: 'Orders deleted',
        oId: req.params.oId
    });
});

module.exports = router;