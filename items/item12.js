function isWinner(player, others) {
    var highest = 0;
    for (var i = 0; i < others.length; i++) {
        var player = others[i];
        if (player.score > highest) {
            highest = player.score;
        }
    }
    return player.score > highest;
}

function trimSections(header, body, footer) {
    for (var i = 0; i < header.length; i++) {
        header[i] = header[i].trim();
    }
    for (var i = 0; i < body.length; i++) {
        body[i] = body[i].trim();
    }
    for (var i = 0; i < footer.length; i++) {
        footer[i] = footer[i].trim();
    }
}

function test() {
    var x = "var", result = [];
    result.push(x);
    try{
        throw "exception";
    }catch(x){
        x = "catch";
    }
    result.push(x);
    return result;
}

test(); // => ["var","var"]


