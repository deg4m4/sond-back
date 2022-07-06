var express = require('express');
var app = express();
var path = require('path');
var PORT = 3000;
 
// Without middleware
app.get('/', function(req, res){
    var options = {
        root: path.join("/home/parthka/")
    };
    
    res.set("Content-Disposition", `attachment; filename="cool.mkv"`)

    var fileName = "Doctor Strange in the Multiverse 2022 BluRay 720p Hindi English AAC 5.1 x264 ESub – Vegamovies.NL.mkv";
    res.sendFile(fileName, options, function (err) {
        if (err) {
            next(err);
        } else {
            console.log('Sent:', fileName);
        }
    });
});
 
app.listen(PORT, function(err){
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});