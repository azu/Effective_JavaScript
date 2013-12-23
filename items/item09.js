function swap(a, i, j) {
    var temp = a[i];
    a[i] = a[j];
    a[j] = temp;
}

var ary = ["a", "b"];
swap(ary, 0, 1);
ary;// => ["b", "a"]