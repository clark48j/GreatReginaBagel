const mongoose = require('mongoose');
const Bagel = mongoose.model('Bagel');

const allBagels = async(req, res, next) => {
    Bagel.find({}).exec(function (err, bags){
        res
        .status(200)
        .json(bags)
    })
};

const locationsReadOne = (req, res, next) => { 
    Loc
        .findById(req.params.locationid)
        .exec((err, location) => {
            if (!location) {
                return res
                    .status(404)
                    .json({
                      "message": "location not found"
                    });
                } else if (err) {
                    return res
                        .status(404)
                        .json(err);
                }
                res
                    .status(200)
                    .json(location);
        });   
};

module.exports = {
    allBagels,
    locationsReadOne,
};