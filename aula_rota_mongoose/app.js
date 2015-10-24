var http = require('http');
var Controller = require('./Controller');
//var index = fs.readFileSync(index.html);

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
    
console.log('URL:', req.url);
    
var url = req.url;

    
    
switch (url) {

    case 'api/beers/create':
    controller.create(req,res );
break;        

    case 'api/beers/update':
    controller.update(req,res );
break;
    case 'api/beers/retrieve':
    controller.retrieve(req,res );
break;        
    case 'api/beers/delete':
    controller.delete(req,res );
break;        


}    
    
}).listen(3000);

        
