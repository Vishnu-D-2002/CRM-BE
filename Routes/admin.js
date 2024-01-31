const express = require('express');
const authenticate = require('../middleware/auth');
const adminControllers = require('../controllers/admin');
const adminRouter = express.Router();

// adminRouter.post('/', adminControllers.signup)
adminRouter.patch('/:ticketId/:adminId', authenticate, adminControllers.assignAdmin)
adminRouter.get('/:adminId', authenticate, adminControllers.getAdminTickets)
adminRouter.put('/:ticketId', adminControllers.closeTicket)

module.exports = adminRouter;