/**
 * Created by azu on 2013/11/17.
 */

var assert = require("assert");
function point(x, y) {
    if (typeof x === "undefined") {
        x = 320;
    }
    if (typeof y === "undefined") {
        y = 240;
    }
    return {
        x: x,
        y: y
    };
}

describe("point", function () {
    it("no parameter", function () {
        var point2 = point();
        assert.deepEqual(point2, { x: 320, y: 240});
    });

});
