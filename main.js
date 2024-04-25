// ****************Task************************
import chalk from "chalk";
console.log(chalk.magenta("\n01 String Equality and Inequality"));
let myName = "Ayesha Iqbal";
let sisterName = "Shawana";
if (myName == "Ayesha Iqbal") {
    console.log("Your 1st Answer Is:", true);
}
else {
    console.log(false);
}
if (sisterName == "Areeba") {
    console.log("Your  Answer Is:", true);
}
else {
    console.log("Your 2nd Answer Is:", false);
}
if (sisterName.length == 8) {
    console.log("Your Answer Is:", true);
}
else {
    console.log("Your 3rd Answer Is:", false);
}
if (sisterName !== myName) {
    console.log("Your 4th Answer Is:", true);
}
else {
    console.log("Your Answer Is:", false);
}
// ******************02*****************************
console.log(chalk.magenta("\n02 Using LowerCase Function"));
let my_name = "Ali";
let my_name2 = "ali";
if (my_name2.toLowerCase() === "ali") {
    console.log("Your Answer Is tolowerCase:", true);
}
else {
    console.log(false);
}
if (my_name.toLowerCase() === "Ali") {
    console.log(true);
}
else {
    console.log("Your Answer Is Not  In tolowerCase:", false);
}
//*******************03**************************
console.log(chalk.magenta("Numerical Comparisons:"));
let num1 = 10;
let num2 = 15;
//Greater Than And Less Than
if (num1 > num2) {
    console.log("10 Is Greater Than 15?: ", true);
}
else {
    console.log("10 > 15:", false);
}
if (num1 < num2) {
    console.log("10 Is less than 15?:", true);
}
else {
    console.log(false);
}
// Equal and not Equal
if (num1 !== num2) {
    console.log("10 Is not Equal To 15:?", true);
}
else {
    console.log(false);
}
if (num1 === num2) {
    console.log("10 Is Equal to 15:?", true);
}
else {
    console.log("10 === 15:", false);
}
//*******************04******************************
console.log(chalk.magenta("Logical Operator."));
let a = "Apple";
let b = "Orange";
//For False
if (a >= b && b <= a) {
    console.log("Condition Is:", true);
}
else {
    console.log("Condition Is:", false);
}
if (a < b || a > b) {
    console.log("Condition Is:", false);
}
else {
    console.log("Condition Is:", true);
}
//For True
if (b > a && b >= a) {
    console.log("Condition Is:", true);
}
else {
    console.log("Condition Is:", false);
}
if (a < b || a <= b) {
    console.log("Condition Is:", true);
}
else {
    console.log("Condition Is:", false);
}
//*********************05************************
console.log(chalk.magenta("Checking Items in an Array."));
let Items = ["Apple", "Orange", "Banana", "Kivi"];
//Checking Items in an Array and conditions are true
if (Items[0] === "Apple") {
    console.log("Yes Apple is in 0 Index");
}
else {
    console.log("Item is not in 0 Index");
}
if (Items[1] === "Orange") {
    console.log("Yes Orange is in 1 Index");
}
else {
    console.log("Item is not in 1 Index");
}
if (Items[2] === "Banana") {
    console.log("Yes Banana is in 2 Index");
}
else {
    console.log("Item is not in 2 Index");
}
if (Items[3] === "Kivi") {
    console.log("Yes Kivi is in 3 Index");
}
else {
    console.log("Item is not in 3 Index");
}
//*********************06*****************************
console.log(chalk.magenta("Checking Items Not in an Array"));
//Checking Items Not in an Array and conditions are false
if (Items[3] === "Grape") {
    console.log("Yes Grape is in an Array");
}
else {
    console.log("Grape is not in an Array");
}
if (Items[2] === "Mango") {
    console.log("Yes Mango is in an Array");
}
else {
    console.log("Mango is not in an Array");
}
if (Items[1] === "watermelon") {
    console.log("Yes watermelon is in an Array");
}
else {
    console.log("Watermelon is not in an Array");
}
if (Items[0] === "Lemon") {
    console.log("Yes Lemon is in an Array");
}
else {
    console.log("Lemon is not in an Array");
}
