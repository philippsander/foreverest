var forever = require('forever'),
    tasks = module.exports = {

    get: function (request, response) {
        forever.list(false, function(err, results) {

            response.writeHeader(200, {"Content-Type": 'text/plain'});
            response.write(JSON.stringify(results));
            response.end();

        });
    }

};