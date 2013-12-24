function sandwichMaker(magicIngredient) {
    function make(filling) {
        return magicIngredient + " and " + filling;
    }

    return make;
}
var hamAnd = sandwichMaker("ham");

hamAnd("jelly");// => "ham and jelly"
hamAnd("bananas");// => "ham and bananas"
hamAnd("marshmallows");// => "ham and marshmallows"
var turkeyAnd = sandwichMaker("turkey");
turkeyAnd("swiss"); // => "turkey and swiss"