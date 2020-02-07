/* GET homepage */
const request = require('request');

const apiOptions = {
  server: 'http://localhost:3000'
};
if (process.env.NODE_ENV === 'production') {
  apiOptions.server = 'https://greatreginabagel.herokuapp.com';
}

const renderHomepage = (req, res, responseBody) => {
    res.render('index', {
        title: 'Great Regina Bagel Test - Bagels delivered to you',
        pageHeader: {
          title: 'Great Regina Bagel',
          strapline: 'Find the right bagel for you!'
        },
        bagels: responseBody
    });
};

const index = (req, res, next) => {
    const path = '/api/bagels';
    const requestOptions = {
        url: `${apiOptions.server}${path}`,
        method: 'GET',
        json: {},
        qs: {}
    };
    request(
        requestOptions,
        (err, response, body) => {
            renderHomepage(req, res, body);
        }
    );
};

module.exports = {
    index
};