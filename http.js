var http =require('http');
 var go=require('./date')

http.createServer(function(req,res){
    res.writeHead(200,{'content-type':'text/plain'})
    res.write("welcome Back" +go.myDateTime());
    res.end("thank you")
}).listen(8080)