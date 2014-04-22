/**
 * Created by azu on 2014/04/22.
 * LICENSE : MIT
 */
"use strict";
function CSVReader(separators) {
    this.spearators = separators || [","];
    this.regexp = new RegExp(this.spearators.map(function (sep) {
        return "\\" + sep[0];
    }).join("|"));
}
CSVReader.prototype.read = function (str) {
    var lines = str.trim().split(/\n/);
    return lines.map(function (line) {
        return line.split(this.regexp);
    }, this);
};

var reader = new CSVReader();
reader.read("a,b,c\nd,e,f\n");// => [["a","b","c"], ["d","e","f"]]