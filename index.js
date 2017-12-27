const request = require('request');

'use strict';

exports.handler = (event, context, callback) => {
  request.get(`https://graphs.coinmarketcap.com/currencies/${event.coin}/`, (error, response, body) => {
    if (error) {
      const err = {
        statusCode: 400,
        body: error
      };
      callback(null, err);
      return;
    } else {
      const res = {
        statusCode: 200,
        body: body
      };
      callback(null, res);
      return;
    }
  });
};
