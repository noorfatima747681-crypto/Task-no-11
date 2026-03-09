let burger = 500;
let fries = 200;
let total = burger + fries;
console.log("Total Bill:" + total);

let discount = 100;
let finalprice = total - discount;
console.log("After discount:" + finalprice)

let bill = 1000;
bill += 500;
console.log("Updated bill:" +bill);

let age= 18;
console.log("Is age 18?:", age == 18);
console.log("Is age 18?:", age === 18);

let hasEmail = true;
let hasPassword = false;
console.log("Login allowed?" , hasEmail && hasPassword);


let points = 10;
points++;
console.log("points:" + points);
let result = (points > 5) ? "Winner" : "Looser";
console.log("Result:" +result);


let marks = 85;
if (marks >=90){
    console.log("Grade A+");   
} else if (marks >=70){
    console.log("Grade B"); 
} else {
    console.log("Try Again");
}

let day = "Monday"
switch(day){
    case "Monday": console.log("Working day"); break;
    case "Sunday": console.log("Holiday"); break;
    default: console.log("Normal day");  
}


let totalAmount = 6000;
let discountApplied;

if (totalAmount > 5000) {
    discountApplied = totalAmount * 0.10;
    console.log("Discount Mil gaya: " + discountApplied);
} else {
    console.log("No discount for bills below 5000");
}
let finalBill = totalAmount - (discountApplied || 0);
console.log("Final Payable Amount: " + finalBill);


