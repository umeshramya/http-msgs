
var msg200 = require("./src/200");
var msg300 = require("./src/300");
var msg400 = require("./src/400");
var msg500 = require("./src/500");
var cookie = require("./src/cookie");


exports.sendJSON = msg200.sendJSON;
exports.send200 = msg200.send200;


exports.movedPermently = msg300.movedPermently;
exports.redirectTemporary = msg300.redirectTemporary;
exports.redirectPerment = msg300.redirectPerment;


exports.send404 =  msg400.send404;
exports.send405 = msg400.send405;
exports.send413 = msg400.send413;


exports.send500 = msg500.send500;

exports.getCookie = cookie.getCookie;
exports.setCookie = cookie.setCookie;





