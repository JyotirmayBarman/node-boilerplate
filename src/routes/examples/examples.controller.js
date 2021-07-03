// here lives the controller functions which controls the routes
const path = require('path');
function httpGetExamples(req,res){
    return res.sendFile(path.join(__dirname,'..','..','..','public','index.html'));
}

module.exports = {
    httpGetExamples
}