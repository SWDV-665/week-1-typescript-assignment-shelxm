var Grocery = /** @class */ (function () {
    function Grocery(name, quantity, price) {
        this.name = name;
        this.quantity = quantity;
        this.price = price;
        this.total = quantity * price;
    }
    return Grocery;
}());
var milk = new Grocery("Milk", 2, 3.10);
var bread = new Grocery("Bread", 1, 2.40);
var eggs = new Grocery("Eggs", 24, 5.50);
var butter = new Grocery("Butter", 1, 3.42);
var lawrys = new Grocery("Lawrys", 1, 2.49);
var groceries = [];
groceries.push(milk);
groceries.push(bread);
groceries.push(eggs);
groceries.push(butter);
groceries.push(lawrys);
var list = document.getElementById("app");
groceries.forEach(function (e) {
    var p = document.createElement("p");
    p.textContent = '${e.name}  |  Qty: ${e.quantity}  |  $${e.total}';
    list.appendChild(p);
});
