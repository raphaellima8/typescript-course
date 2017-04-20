"use strict";
var Routes = (function () {
    function Routes(app) {
        this.getRoutes(app);
    }
    Routes.prototype.getRoutes = function (app) {
        app.route('/').get(function (req, res) { return res.send('Hello, world!'); });
        app.route('/ola/:nome').get(function (req, res) { return res.send("Hello, " + req.params.nome); });
    };
    return Routes;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Routes;
