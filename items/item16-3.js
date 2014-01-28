var y = "global";
function test(src) {
    eval(src);// 動的に結合されるかもしれない
    return y;
}
test("var y = 'local';");// => "local"
test("var z = 'local';");// => "global"