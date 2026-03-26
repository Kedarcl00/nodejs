const ht=require('http');
const f=require("./sub");

ht.createServer(function(req,res){
    res.writeHead(200,{'content-Type':'html/text'});
    res.write("the subtraction of two number is:" + f.subtract(3,4));
    res.end();

}).listen(8000);

console.log("server running at http://localhost:8000");;