/**
 * Created by azu on 2014/02/25.
 * LICENSE : MIT
 */
"use strict";

function averageOfArray(ary) {
    for (var i = 0 , sum = 0; i < ary.length; i++) {
        sum += ary[i];
    }
    return sum / ary.length;
}
function average() {
    return averageOfArray(arguments);
}
average(6, 10, 20); // => 12
