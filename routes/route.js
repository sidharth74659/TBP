const express = require('express');
const router = express.Router();

const { createTicket, getTicket, updateTicket, deleteTicket, getAllTickets } = require('../dynamodb/service');

router.get('/', (req, res) => {
    res.send('Hello World!!!!');
});

router.post('/ticket', createTicket);

router.get('/tickets/:ticketId', getTicket);

router.put('/tickets/:ticketId', updateTicket);

router.delete('/tickets/:ticketId', deleteTicket);

router.get('/tickets', getAllTickets);

module.exports = router;