/* GET homepage */

const request = require('request');

const apiOptions = {
  server: 'http://localhost:3000'
};
if (process.env.NODE_ENV === 'production') {
  apiOptions.server = 'https://greatreginabagel.herokuapp.com';
}

const index = (req, res, next) => {
    res.render('index', {
        title: 'Great Regina Bagel - Bagels delivered to you',
        pageHeader: {
          title: 'Great Regina Bagel',
          strapline: 'Find the right bagel for you!'
        },
        bagels: [{
            name: 'Regular',
            description: 'The plainest bagel ever.',
            rating: 3
        }, {
            name: 'Great Canadian Dozen',
            description: 'The non-plainest bagel ever.',
            rating: 4
        }]
      });
};

module.exports = {
    index
};