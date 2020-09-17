const express = require('express'),
    router = express.Router(); //First two lines of all routes

const languageModel = require('../modules/langModel');

router.get('/', async (req, res) => {
    const languageData = await languageModel.getAll();
    console.log(languageData)
    
    res.render('template', {
        locals: {
            title: 'My Full Stack Languages',
            data: languageData,
            upData: statusData
        },
        partials: {
            partial: 'partial-index'
        }
        })
});

router.post('/', async (req, res) =>{
    console.log('req.body:', req.body);
    const dbResponse = await languageModel.updateStatus('CSS',6);
    console.log ('my database response is:', dbResponse);
    res.status(200).send("ok").end();
});

module.exports = router;  //last line of all routes