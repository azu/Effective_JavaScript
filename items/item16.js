function test(x) {
    eval("var y = x");// 動的結合
    return y;
}
test("hello");// => "hello"
