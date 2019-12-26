let jwt = require('jsonwebtoken');
const config = require('./config.js');
import _ from 'lodash';

let checkToken = (req, res, next) => {
  let token = req.headers['x-access-token'] || req.headers['authorization']; // Express headers are auto converted to lowercase
  if (!_.isEmpty(token) && token.startsWith('Bearer ')) {    
    token = token.slice(7, token.length);
  }

  if (token) {
    jwt.verify(token, config.secret, (err, decoded) => {
      if (err) {
        return res.json({
          success: false,
          message: 'Given token is invalid'
        });
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else {
    return res.json({
      success: false,
      message: 'Auth token is mandatory'
    });
  }
};

module.exports = {
  checkToken: checkToken
}