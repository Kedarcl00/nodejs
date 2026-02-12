var http = require('http');   // use require instead of import in CommonJS

http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    
    let a = 8;
    let b = 3;
    let sum = a + b;
    
    res.end('The addition of '+ a +' and '+ b +' is '+ sum);
    
}).listen(8080);

console.log("Server running at http://localhost:8080/");