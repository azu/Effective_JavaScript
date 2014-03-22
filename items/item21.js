/**
 * Created by azu on 2014/02/25.
 * LICENSE : MIT
 */
"use strict";

function getAllScores() {
    return [1, 2, 3];
}
function average() {
    var args = [].slice.call(arguments);// 配列化
    // 平均を求める
    return args.reduce(function (prev, current) {
        return prev + current;
    }, 0) / args.length;
}
var scores = getAllScores();
average.apply(null, scores);// => 2


var buffer = {
    state: [],
    append: function () {
        for (var i = 0; i < arguments.length; i++) {
            var arg = arguments[i];
            this.state.push(arg);
        }
    },
    dump : function(){
        return this.state.join("");
    }
};

buffer.append("Hello, ");
buffer.append("Boy!");
buffer.dump();// => "Hello, Boy!"

buffer.append.apply(buffer, ["one", "two", "three"]);
buffer.dump();// => "Hello, Boy!onetwothree"