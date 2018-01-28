
let contentType ={"Content-Type" : "application/json"}

/*
    ======================
        400  plus status
    ======================
*/

exports.send404 = function(req, res,  resEnd=true){
    // Requested page not availeble
    res.writeHead(404,"Resource not found", contentType);
    res.write(JSON.stringify({"data" : "Resource not found"}));
        if(resEnd){         
            res.end();     
        }
}

exports.send405 = function(req, res,  resEnd=true){
    // Method not supporetd ie. GET, POST others not supported
    res.writeHead(405,"Method not supported", contentType);
    res.write(JSON.stringify({"data" : "Method not supported"}));
        if(resEnd){         
            res.end();     
        }
}

exports.send413 = function(req, res,  resEnd=true){
    // Requesting for large data, not supported
    res.writeHead(413, "Request too large", contentType);
    res.write(JSON.stringify({"data" : "Request too large"}));
        if(resEnd){         
            res.end();     
        }
}