// Only change code below this line
function localScope() {
    var myVariable = "I am here!";
    console.log(myVariable);
}

localScope(); // logs "I am here!"
console.log(myVariable = "undefined");
// Only change code above this line
// myVariable is not definde outside of localScope
localScope(); 

if (typeof myVariable != "undefined") {
    console.log('outside localScope', myVariable)

} else {
    console.log('outside localScope UNDEFINED!!!')
}
module.exports = (localScope);