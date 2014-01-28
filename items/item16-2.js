var y = "global";
function test(x) {
    if (x) {
        eval("var y = 'local';");// 動的結合
    }
    return y;
}
test(true); // => "local"
test(false); // => "global"
