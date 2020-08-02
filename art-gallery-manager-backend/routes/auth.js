const { Router } = require('express');
const jwt = require('jsonwebtoken');

const auth = Router();

auth.post('/', (req, res) => {
  const token = jwt.sign({ id: 'id', otherData: 'data' }, 'privateKey', {
    expiresIn: '600s'
  });
  res.send(token);
});

module.exports = auth;
