var y = "global";
function test(src) {
    (function () {
        eval(src);// 動的に結合されるかもしれない
    })();
    return y;
}
test("var y = 'local';");// => "global"
test("var z = 'local';");// => "global"