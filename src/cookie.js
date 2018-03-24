/*
    ==================================
        This 
    ==================================
*/ 
var util = require("util");
var queryString = require("querystring");


var cookieString = function(req, res, name, value, expire , httponly=true ){
    return `${name} = ${value};expire=${expire};domain=${req.headers.host};httponly=${true}`;
}
exports.cookieString = cookieString;

var setCookie = function(req, res, cookieString, data="",  resEnd=false){
    // this sets new cookie 
    res.writeHead(200, {
        'Set-Cookie': cookieString,
        'Content-Type': 'text/plain'
      });
      res.write(data);
      if (resEnd){
        res.end();
      }
}
exports.setCookie = setCookie;


var getCookie = function(req, res, curCookie){
    var cookies = req.headers.cookie;
    if(util.isUndefined(cookies)){
        return  "";
    }else{
        var cookieArray = cookies.split(";");
        for (let index = 0; index < cookieArray.length; index++) {
           
            var curJson = queryString.parse(cookieArray[index]);
            var key = Object.keys(curJson);
            if (key[0].trim() == curCookie){
            return curJson[key[0]];           
                
            }
        }
        
    }

}
exports.getCookie = getCookie;

