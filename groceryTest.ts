class Grocery{
    product: string;
    constructor(public name: string, public quantity: number, public price: number){
        this.product= name + "  |  " + "Qty: " + quantity + "  |  " + "$" + (price*quantity)
    }
}

interface Grocery{
    name: string;
    quantity: number;
    price: number;
}

function list(product: Grocery){
    return product.name + "  |  " + "Qty: " + product.quantity + "  |  " + "$" + (product.price*product.quantity)
}

let groceries=[
    new Grocery("Milk", 2, 3.10),
    new Grocery("Bread", 1, 2.40),
    new Grocery("Eggs", 24, 5.50),
    new Grocery("Eggs", 24, 5.50),
    new Grocery("Lawrys", 1, 2.49)
];

function getGroceries(groceries){
    for (let i of groceries){
        list(i);
    }
    return groceries;
}

document.body.textContent = getGroceries(groceries);