// 1. Print numbers 1 to 10 using a for loop.
/*for(let i=1; i<= 10; i++){
    console.log(i);
}
*/

//2. Print even numbers between 1 to 20.
/*for (let i=1; i<= 20; i++){
    if(i%2 === 0){
        console.log(i);
    }    
}
    */


// 3. Print odd numbers between 1 to 20.
/*for(let i=1; i<=20; i++){
    if(i%2 !== 0){
        console.log(i);
    }
}
*/


// 4. Find the sum of numbers from 1 to 100.
/*let sum = 0;
for(i=1; i<= 100; i++){
    sum = sum+i;
}
{
    console.log(sum);
}
*/

// 5. Print the multiplication table of any number (e.g., 5).
/*for(i=1; i<=50; i++){
    if(i % 5==0){
        console.log(i);
    }
}
*/

//6. Ask the user for a number and print all numbers up to that number.
/*let num= prompt("Enter a num:");
for(i=1; i<= num; i++){
    console.log(i);
}
*/


// 7. Print squares of numbers from 1 to 10.
/*for(i=1; i<= 10; i++){
      console.log(i*i);
}
*/

// 8. Count backward from 10 to 1.
/*for(i=10; i>=1; i--){
    console.log(i);
}
*/


//9. Print all numbers divisible by 3 from 1 to 50.
/*for(i=1; i<=50; i++){
    if(i%3==0){
        console.log(i);
    }
}
*/


// 10. Print sum of even and odd numbers separately from 1 to 50.
/*let evenSum =0;
let oddSum = 0;
for(i=1; i<=50; i++){
    if(i%2 ==0){
        evenSum += i;
    }else{
        oddSum += i;
    }
}
console.log("even:", evenSum);
console.log("odd", oddSum);
*/


// 11. Calculate factorial of a number (e.g., 5! = 120).
/*let num = 6;;
let fact =1;
for(i=1; i<=num; i++){
    fact = fact*i;
}
console.log(fact);
*/


// 12. Print star pattern
// *
// **
// ***
// ****
// *****

/*for(i=5; i>=1; i--){
    let pattern ="";
    for (j=1; j<=i; j++){
        pattern += "*";
    }
    console.log(pattern);
}
*/


// 13. Reverse star pattern
// *****
// ****
// ***
// **
// *

/*
for(i=1; i<=5; i++){
    let pattern ="";
    for(j=1; j<=i; j++){
        pattern += "*";
    }
    console.log(pattern);
}
*/

// 14. Number pattern (increasing)
// 1
// 12
// 123
// 1234
// 12345

/*for(i=1; i<=5; i++){
    let pattern = "";
    for (j=1; j<=i; j++){
        pattern += j;
    }
    console.log(pattern);
}
*/


// 15. Number pattern (decreasing)
// 12345
// 1234
// 123
// 12
// 1

/*for(i=5; i>=1; i--){
    let pattern = "";
    for(j=1; j<=i; j++){
        pattern += j;
    }
    console.log(pattern);
}
*/



// 16. Pattern
// 1
// 22
// 333
// 4444
// 55555

/*for(i=1; i<=5; i++){
    let pattern= "";
    for(j=1; j<=i; j++){
        pattern += i;
    }
    console.log(pattern);
}
*/