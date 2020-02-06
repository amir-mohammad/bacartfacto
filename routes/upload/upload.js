const express = require('express');
const route = express();

route.post('/',(req,res) => {
    const file = req.files.file;
    file.mv(`${__dirname}/uploadfile/${file.name}`);
    res.json({url:`${__dirname}/uploadfile/${file.name}`})
})

module.exports = route;