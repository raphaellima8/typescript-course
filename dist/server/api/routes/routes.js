"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var routes_1 = require("../../modules/User/routes");
var auth_1 = require("../../modules/auth/auth");
var Routes = (function () {
    function Routes(app, auth) {
        this.tokenRoute = new auth_1.default();
        this.auth = auth;
        this.getRoutes(app);
    }
    Routes.prototype.getRoutes = function (app) {
        app.route('/api/users/all').all(this.auth.authenticate()).get(routes_1.default.index);
        app.route('/api/users/create').all(this.auth.authenticate()).post(routes_1.default.create);
        app.route('/api/users/:id').all(this.auth.authenticate()).get(routes_1.default.findOne);
        app.route('/api/users/:id/update').all(this.auth.authenticate()).put(routes_1.default.update);
        app.route('/api/users/:id/destroy').all(this.auth.authenticate()).delete(routes_1.default.destroy);
        app.route('/token').post(this.tokenRoute.auth);
    };
    return Routes;
}());
exports.default = Routes;
