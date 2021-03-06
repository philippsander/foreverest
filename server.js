var http = require('http'),
    tasks = require('./routes/tasks.js'),
    forever = require('forever'),
    config = require('config');

const GET = 'GET';

http.createServer(function(request,response){
    var url = request.url;

    switch (url)
    {
        case '/tasks':
            if (request.method === GET)
            {
                tasks.get(request, response);
            }
            break;
        default:
            var message = 'route not defined';
            response.writeHeader(200, {"Content-Type": 'text/plain'});
            response.write(message);
            response.end();
            break;
    }
}).listen(config.server.port);

console.log(config.server.port);