"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createUser(_a) {
    var id = _a.id, name = _a.name, email = _a.email, password = _a.password;
    return {
        id: id, name: name, email: email, password: password
    };
}
exports.createUser = createUser;
function createUsers(data) {
    return data.map(createUser);
}
exports.createUsers = createUsers;
function createUserById(_a) {
    var id = _a.id, name = _a.name, email = _a.email, password = _a.password;
    return {
        id: id, name: name, email: email, password: password
    };
}
exports.createUserById = createUserById;
function createUserByEmail(_a) {
    var id = _a.id, name = _a.name, email = _a.email, password = _a.password;
    return {
        id: id, name: name, email: email, password: password
    };
}
exports.createUserByEmail = createUserByEmail;
