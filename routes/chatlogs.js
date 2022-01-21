const express = require('express');
const router = express.Router();
const {
  addChatlog,
  deleteChatlog,
  deleteChatlogs,
  getChatlogs,
} = require('../controller/chatlogs');
const { requestValidator } = require('../helper');
const { ValidUserIdParamSchema } = require('./validations/user-schema');
const { AddMessageSchema, DeleteChatLogSchema } = require('./validations/chatlogs-schema');

router.post('/:userId',
  requestValidator(ValidUserIdParamSchema, 'params'),
  requestValidator(AddMessageSchema, 'body'),
  addChatlog);
router.get('/:userId', requestValidator(ValidUserIdParamSchema, 'params'), getChatlogs);
router.delete('/:userId', requestValidator(ValidUserIdParamSchema, 'params'), deleteChatlogs);
router.delete('/:userId/:msgId', requestValidator(DeleteChatLogSchema, 'params'), deleteChatlog);

module.exports = router;
