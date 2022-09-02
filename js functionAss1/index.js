//1.Create one function with zero parameter having a console statement;

function kk(){
    console.log ("function1")
}
kk()
//2.Create one function which takes two values as a parameter and print the sum of them as "Sum of 3, 4 is 7"


function sum(a,b){

    console.log(a+b)
}
sum(3,4)

//3.Create one arrow function

let test=(k)=>{
    console.log(k)
}
test(10)

/*4."Print output: 
var x = 21;
var girl = function () {
    console.log(x);
    var x = 20;
};
girl ();  */
console.log("Undefined")

/*5."Print output: 
var x = 21;
girl ();
console.log(x)
function girl() {
    console.log(x);
    var x = 20;
};   */
console.log("undefined'  and     '21' ")

/*6."Print output

var x = 21;
a();
b();
console.log(a);
a = function() {
    
   x = 20;
  console.log(x);
};
b = function() {
    
    x = 40;
   console.log(x);
};
*/
console.log ("a is not defined ")

//7.Write a function that accepts parameter n and returns factorial of n*/

function fact(n) {
    let factorial = 1;
    for (let i=1; i<=n; i++){
        factorial = factorial * i;
    }
    console.log( factorial);
}
fact(5);
