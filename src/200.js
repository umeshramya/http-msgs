let contentType ={"Content-Type" : "application/json"}

/*
    ==================
        200  plus status
    ==================
*/

exports.sendJSON = function(req, res, data, resEnd=true){
    // on succes 
    res.writeHead(200, contentType);
    if(data){
        res.write(JSON.stringify(data));
    }
  
    if(resEnd){         
        res.end();     
    }
     

}

exports.send200 = function(req, res,  resEnd=true){
    // 200
    res.writeHead(200, contentType);
    if(resEnd){         
        res.end();     
    }
}