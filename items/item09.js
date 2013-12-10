function swap(a, i, j) {
    var temp = a[i];
    a[i] = a[j];
    a[j] = temp;
}

var res = swap(["a", "b"], 1, 2);
res;// => ["b", "a"]