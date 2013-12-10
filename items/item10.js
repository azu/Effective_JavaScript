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
    var widget = new Widget();
    with (widget) {
        setBackground("blue");
        setForeground("white");
        setText("Status: " + info);
        return show();
    }
}

function f(x, y) {
    with (Math) {
        return min(round(x), sqrt(y));
    }
}
status("connecting"); // => "Status: connecting"
Widget.prototype.info = "[[Widget info]]";
status("connected"); // => "Status: [[Widget info]]"
