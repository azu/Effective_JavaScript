function wrapElements(a) {
    var result = [];
    for (var i = 0; i < a.length; i++) {
        (function (j) {
            result[j] = function () {
                return a[j];
            }
        })(i);
    }
    return result;
}

var wrapped = wrapElements([10, 20, 30, 40, 50]);
var f = wrapped[0];
f();// => 10


function wrapEachElements(a) {
    return a.map(function(element){
        return function(){
            return element;
        }
    });
}

var wrapped_each = wrapElements([10, 20, 30, 40, 50]);
var g = wrapped_each[0];
g();// => 10