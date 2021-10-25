class Grocery{
    name: string;
    quantity: number;
    price: number;
    total: number

    constructor(name: string, quantity: number, price: number){
        this.name=name;
        this.quantity=quantity;
        this.price=price;
        this.total=quantity*price
    }
}

let milk=new Grocery("Milk", 2, 3.10)
let bread=new Grocery("Bread", 1, 2.40)
let eggs=new Grocery("Eggs", 24, 5.50)
let butter=new Grocery("Butter", 1, 3.42)
let lawrys=new Grocery("Lawrys", 1, 2.49)

let groceries: Grocery[]=[];
groceries.push(milk)
groceries.push(bread)
groceries.push(eggs)
groceries.push(butter)
groceries.push(lawrys)

const list=document.getElementById('grocery');

groceries.map(grocery => {
    const {name, quantity, total}= grocery;
    const p= document.createElement("p");
    p.textContent='${grocery.name}  |  ${grocery.quantity}  |  $${grocery.total}'
    list.appendChild(p)
});