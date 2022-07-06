var http = require('http'),
    fileSystem = require('fs'),
    path = require('path');

http.createServer(function(request, response) {
    var filePath = "/home/parthka/Doctor Strange in the Multiverse 2022 BluRay 720p Hindi English AAC 5.1 x264 ESub – Vegamovies.NL.mkv";
    var stat = fileSystem.statSync(filePath);

    response.writeHead(200, {
        'Content-Type': 'video/mp4',
        'Content-Length': stat.size
    });

    var readStream = fileSystem.createReadStream(filePath);
    // We replaced all the event handlers with a simple call to readStream.pipe()
    readStream.pipe(response);
})
.listen(8080);