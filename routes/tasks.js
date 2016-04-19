var tasks = module.exports = {

  get: function (request, response) {

        response.writeHeader(200, {"Content-Type": "text/json"});
        response.write(JSON.stringify([1, 2, 3]));
        response.end();
    }

};
