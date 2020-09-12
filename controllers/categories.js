const Category = require('../models/category')

exports.getCategories = (req,res,next) => {
    Category.findAll().then( categories => {
        res.status(200).json({
            message : "categories successfully fetched",
            categories : categories
        })
    }).catch(err => {
        res.status(500).json({
            message: "Error 500 during fetching categories",
            error: err,
          });
    })
}