module.exports = function() {
    return function(APIObject) {
        APIObject.route('/').get(function(req, res) {
            res.send('Hello, world');
        });

        APIObject.route('/ola/:nome').get(function(req, res) {
            res.send(`Olá, ${req.params.nome}`);
        });
    }
}