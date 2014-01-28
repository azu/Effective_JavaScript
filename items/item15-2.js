function f() {
    return "global";
}
function test(x) {
    var result = [];
    if (x) {
        // ブロックローカルな関数宣言??
        function f() {
            return "local";
        }

        result.push(f());
    }
    result.push(f());
    return result;
}
// ブロックスコープはないから、両方共localのままだ
// "use strict"; だとそもそもエラー
test(true); // => ["local", "local"]
test(false); // => ["local"]
