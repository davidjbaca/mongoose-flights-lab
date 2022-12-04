const express = require('express');
const router = express.Router();
const ticketsCtrl = require('../controllers/tickets');

router.get('/tickets/new', ticketsCtrl.new);
router.post('/tickets', ticketsCtrl.create);
// //router.delete('/movies/:id/tickets', ticketsCtrl.delete);

module.exports = router;