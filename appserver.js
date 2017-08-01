var koa = require("koa");
var serve = require("koa-static");
var livereload = require("livereload");

var app = new koa();
var server = livereload.createServer();

server.watch(__dirname + "/app/*.js");

app.use(serve("."));

app.listen(9001);
