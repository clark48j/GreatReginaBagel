/* GET homepage */
const index = (req, res, next) => {
    res.render('index', { title: 'Great Regina Bagel' });
};

module.exports = {
    index
};