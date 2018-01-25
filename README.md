# http-msgs
Node module to handle to  HTTP status codes

![verson](https://img.shields.io/badge/version-0.0.1-green.svg)
![License](https://img.shields.io/badge/License-MIT-yellowgreen.svg)

This module sets the the http messages for nodes http server
it usess `request` and `responce` arguments of`http` 
`resEnd` argument is boolen by defulat it  is set to true
if set set to true it trigeers `res.end()`. if sets to false call function has explicitly call `res.end()` to end responce to client application. 

## 200 and plus
```
    httpMsgs.sendJSON 1eq, res, data, resEnd)
    This  send json object back  after with success 
    data = retun data is in JSON format
```
```
    httpMsg.send200(req, res, resEnd)
    This send only 200 status but not data returned 
```
## 300  plus
```
    httpMsgs.movedPermently = function(req, res, url, resEnd)
    moved permentantly
```
```
    httpMsgs.redirectTemporary = function(req, res, url,  resEnd)
    Temporary redirect
```

```
    httpMsgs.redirectPerment = function(req, res, url,  resEnd)
    perment redirect
```

## 400 plus
```
    httpMsgs.send405(req, res, resEnd)
    Method not supporetd i.e request.methods supported
```
    
```
    httpMsags.send404= function(req, res, resEnd)
    Requested page not availeble
```
```
    httpMsgs.send413 = function(req, res, resEnd)
    Requesting for large data, not supported.
```

## 500 plus

```
    httpMsgs.send500(req, res, err, resEnd)
    This sends error status with error messages
    err = this contains error message
```
