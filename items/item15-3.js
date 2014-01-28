"use strict";
function f() {
    return "global";
}
function test(x) {
    var result = [];
    var g = f;
    if (x) {
        g = function () {
            return "local";
        };
        result.push(g());
    }
    result.push(g());
    return result;
}
test(true); // => ["local", "local"]
test(false); // => ["global"]

