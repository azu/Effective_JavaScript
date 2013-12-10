/**
 * Created by azu on 2013/11/17.
 */

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

var point2 = point();
point2; // => { "x": 320, "y": 240 }


var ary = [1,2,3];
ary.join("-"); // => "1-2-3"