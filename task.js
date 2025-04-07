//Function to create Fibonacci Series
let fib = [0, 1]; // Start with 0, 1
for (let i = 2; i < 10; i++) {
  fib.push(fib[i-1] + fib[i-2]); // Keep adding numbers
}
console.log(fib); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

function fibonacci(n) {
    let a = 0;
    let b = 1;
    let temp;
  
    for (let i = 0; i < n; i++) {
      console.log(a);
      temp = a;
      a = a + b;
      b = temp;
    }
  }
  
  fibonacci(10);

// Function to Check if the given number is prime number
function checkPrime(num) {
    
        let count = 0;

    // Check for 0 (special case)
    if (num <=1) {
        console.log(num + " is not prime");
        return;
    }

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            count++;
        }
    }

   
    if (count > 0) { 
        console.log(num + " is not a prime number.");
    } else {
        console.log(num + " is a prime number.");
    }
}

// Run the function
checkPrime(17);


function oddOrEven(n){
    if(n/2==0){
        console.log(n + " is a even number")
    }
    else{
        console.log(n + " is a odd number")
    }
}
oddOrEven(8)


function fact(number){
    let sum = 1;
    for(let i = 1;i<=number;i++){
        sum = sum*i;
    }
    console.log("factorial of the given number is " + sum)
}
fact(5)

//using recursive function
function factorial(n){
    if(n<=1){
        return 1;
    }
    return n * factorial(n-1)
}

console.log( factorial(5))


function reverseStr(str){
    
    let a = str.split("")
    let b = a.reverse()
    let c = b.join("")
    console.log(c)  
    
    let num = 54321
    num = num.toString()
    let rev = num.split("").reverse().join("")
    let reversed = rev.
    console.log(reversed)

}
reverseStr("hello")

const str = "abc";
const duplicated = str.split("").map(char => char.repeat(2)).join("")
console.log(duplicated); // "aabbcc"

const numbers = [5, 2, 9, 1, 5, 6];
let largest = numbers[0];
for(let i=1;i<numbers.length;i++){
    if(numbers[i]>largest){
        largest = numbers[i]
    }
}
console.log(largest)


