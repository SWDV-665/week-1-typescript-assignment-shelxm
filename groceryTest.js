var Grocery = /** @class */ (function () {
    function Grocery(name, quantity, price) {
        this.name = name;
        this.quantity = quantity;
        this.price = price;
        this.product = name + "  |  " + "Qty: " + quantity + "  |  " + "$" + (price * quantity);
    }
    return Grocery;
}());
function list(product) {
    return product.name + "  |  " + "Qty: " + product.quantity + "  |  " + "$" + (product.price * product.quantity);
}
var groceries = [
    new Grocery("Milk", 2, 3.10),
    new Grocery("Bread", 1, 2.40),
    new Grocery("Eggs", 24, 5.50),
    new Grocery("Eggs", 24, 5.50),
    new Grocery("Lawrys", 1, 2.49)
];
function getGroceries(groceries) {
    for (var _i = 0, groceries_1 = groceries; _i < groceries_1.length; _i++) {
        var i = groceries_1[_i];
        list(i);
    }
    return groceries;
}
document.body.textContent = getGroceries(groceries);
