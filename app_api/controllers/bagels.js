const mongoose = require('mongoose');
const Bagel = mongoose.model('Bagel');

const allBagels = async(req, res, next) => {
    Bagel.find({}).exec(function (err, bags){
        res
        .status(200)
        .json(bags)
    })
};



module.exports = {
    allBagels
};
