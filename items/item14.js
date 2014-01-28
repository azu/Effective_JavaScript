var f = function find(tree, key) {
    if (!tree) {
        return null;
    }
    if (tree.key === key) {
        return tree.value;
    }
    return find(tree.left, key) || find(tree.right, key);
};
var myTree = {
    left: {},
    right: {
        "foo": {
            value: "value"
        }
    }
};

find(myTree, "foo"); // => Error


//  Object.prototype
