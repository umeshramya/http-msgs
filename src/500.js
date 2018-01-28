let contentType ={"Content-Type" : "application/json"}

/*
    ==================
        500 status
    ==================
*/ 

exports.send500 = function(req, res, err,  resEnd=true){
    // on error
    res.writeHead(500, "Internal error occured", contentType);
    res.write(JSON.stringify({"data" : "Internal error occured: " + err}));
        if(resEnd){         
            res.end();     
        }
}