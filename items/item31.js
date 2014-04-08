/**
 * Created by azu on 2014/04/08.
 * LICENSE : MIT
 */
"use strict";
var empty = Object.create(null);
"__proto__" in empty; // => true


if (typeof Object.getPrototypeOf === "undefined") {
    Object.getPrototypeOf = function (obj) {
        var t = typeof obj;
        if (!obj || (t !== "object" && t !== "function")) {
            throw new TypeError("not an object");
        }
        return obj.__proto__;
    };
}
