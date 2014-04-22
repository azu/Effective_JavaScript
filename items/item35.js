/**
 * Created by azu on 2014/04/22.
 * LICENSE : MIT
 */
"use strict";
function hash(string){
    return string.split("").join("|")
}
function User(name, passwordHash) {
    this.toString = function () {
        return "[User " + name + "]";
    };
    this.checkPassword = function(password) {
        return hash(password) === passwordHash;
    };
}
var user = new User("bob", "xxx");
user.toString();//=>  "[User bob]";