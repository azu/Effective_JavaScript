/**
 * Created by azu on 2014/04/08.
 * LICENSE : MIT
 */
"use strict";

function User(name, passwordHash) {
    if (!(this instanceof User)) {
        return new User(name, passwordHash);
    }
    this.name = name;
    this.passwordHash = passwordHash;
}

var x = User("bravelli", "ddddddasad2j2ijjkleknncnzj2");
var y = User("bravelli", "ddddddasad2j2ijjkleknncnzj2");
x instanceof User;//=> true
y instanceof User;//=> true

// 関数の呼び出しを減らす
function User2(name, passwordHash) {
    var self = this instanceof User ? this : Object.create(User.prototype);
    self.name = name;
    self.passwordHash = passwordHash;
    return self;
}