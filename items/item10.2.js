// withは避けよう
function Widget() {
}
Widget.prototype.info;
Widget.prototype = {
    setBackground: function (color) {
    },
    setForeground: function (color) {
    },
    setText: function (text) {
        this.info = text
    },
    show: function () {
        return this.info;
    }
};
function status(info) {
    var w = new Widget();
    w.setBackground("blue");
    w.setForeground("white");
    w.setText("Status: " + info);
    return w.show();
}
function f(x, y) {
    return Math.min(Math.round(x), Math.sqrt(y));
}
// P38
status("connecting"); // => "Status: connecting"
Widget.prototype.info = "[[Widget info]]";
status("connected"); // => "Status: connected"
// P38
Math.x = 0;
Math.y = 0;
f(2, 9); // => 2
