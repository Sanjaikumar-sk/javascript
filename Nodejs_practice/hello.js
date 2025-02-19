var http = require('http')

http.createServer(function (req,res)
{
    res.writeHead(200, {'Context-Type':'text/html'})
    res.write("Hellow world!!!....")
    res.end()
}).listen(8080)