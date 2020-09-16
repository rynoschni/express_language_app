const express = require('express'),
    router = express.Router(); //First two lines of all routes

const languageModel = require('../modules/langModel');

router.get('/', async (req, res) =>{
    const languageData = await languageModel.getAll();
    console.log(languageData)
    
    res.render('template', {
        locals: {
            title: 'My Full Stack Languages',
            data: languageData
        },
        partials: {
            partial: 'partial-index'
        }
        })
});

module.exports = router;  //last line of all routes