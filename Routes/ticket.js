const express = require('express');
const authenticate = require('../middleware/auth');
const ticketcontroller = require('../controllers/ticket');
const TicketRouter = express.Router();

TicketRouter.post('/', authenticate, ticketcontroller.createTicket)
TicketRouter.get('/', authenticate, ticketcontroller.getTicket)
TicketRouter.delete('/:ticketId', authenticate, ticketcontroller.deleteTicket)
TicketRouter.patch('/:ticketId', authenticate, ticketcontroller.editTicket)

TicketRouter.get('/all',ticketcontroller.getAllTickets)

module.exports=TicketRouter