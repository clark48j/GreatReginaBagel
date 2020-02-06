const mongoose = require('mongoose');
const Bagel = mongoose.model('Bagel');

const allBagels = async(req, res, next) => {
    Bagel.findById("5e3b91cd70693006b01d4bc3").exec(function (err, bags){
        res
        .status(200)
        .json(bags)
    })
};



module.exports = {
    allBagels
};
