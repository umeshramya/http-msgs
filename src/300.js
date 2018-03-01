let contentTypeJSON ={"Content-Type" : "application/json"}
/*
======================
300  plus status
======================
*/
exports.movedPermently = function(req, res, url, resEnd=true){
// redirect temporary
res.writeHead(301,{Location: url } );  
if(resEnd){         
res.end();     
}
}
exports.redirectTemporary = function(req, res, url,  resEnd=true){
// redirect temporary
res.writeHead(301,{Location: url } ); 
if(resEnd){         
    res.end();     
}
}

exports.redirectPerment = function(req, res, url,  resEnd=true){
// redirect perment
res.writeHead(301,{Location: url } ); 
if(resEnd){         
    res.end();     
}
}