/**
 * Created by azu on 2013/12/10.
 * LICENSE : MIT
 */
    // 良くない var i, n , sum; // グローバル変数
function averageScore(players) {
    var sum = 0;
    var playerNumbers = players.length;
    for (var j = 0; j < playerNumbers; j++) {
        sum += score(players[j]);
    }
    return sum / playerNumbers;
}
function score(player) {
    var levelNumber = player.levels.length;
    var sum = 0;
    for (var i = 0; i < levelNumber; i++) {
        sum += player.levels[i].score;
    }
    return sum;
}

this.foo; // => undefined
foo = "global foo";
this.foo; // => "global foo"

var foo = "global foo";
this.foo = "changed";
foo; // "changed"
