function box() {
    var val = undefined;
    return {
        set: function (newVal) {
            val = newVal
        },
        get: function () {
            return val;
        },
        type: function () {
            return typeof val;
        }
    };
}
var b = box();
b.type(); // => "undefined"
b.set(10);
b.get(); // => 10
b.type(); // => "number"
