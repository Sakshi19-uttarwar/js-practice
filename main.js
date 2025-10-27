// function sumOfNumbers(a,b){
//    return a+b;
// }
// let sum = sumOfNumbers(5,3);
// console.log(sum);



// function evenOdd(a){
//     if(a%2 == 0){
//         console.log("Even");
//     }
//     else{
//         console.log("odd");
//     }
// }
// evenOdd(4);


// function largestNumber(a,b,c){
//     let num = Math.max(a,b,c);
//     return num;
// }
// let result = largestNumber(4,9,7);
// console.log(result);


// function calculator(a,b, operator){
//     if(operator == "+"){
//         console.log(a+b);
//     }
//     else if(operator == "-"){
//         console.log(a-b);
//     }
//     else if(operator == "*"){
//         console.log(a*b);
//     }
//     else if(operator == "/"){
//         console.log(a/b);
//     }
//     else{
//         console.log("Inavlid")
//     }
// }
// calculator(8,2, "+");



// for(i=1;i<=10;i++){
//     console.log(i);
// }


// function multiplicationOfNumber(a){
//     for(i=1; i<=10; i++){
//         let multiply = a*i;
//         console.log(multiply);
//     }
// }
// multiplicationOfNumber(5);


// function convertCelcius(num){
//     let fahrenheit = (num * 9/5)+32;
//     return fahrenheit;
// }
// let result = convertCelcius(0);
// console.log(result);


// function remainderRemain(a,b){
//     let num = a%b;
//     return num;
// }
// let result = remainderRemain(10,3);
// console.log(result);



// function compareNumbers(a,b){
//     if(a> b){
//         console.log(a , "is greater");
//     }else if(a<b){
//         console.log(b, "is greater");
//     }
//     else if(a == b){
//         console.log("both are equal");
//     }
//     else{
//         console.log("Inavalid")
//     }
// }
// compareNumbers(7,7);


// function checkNumber(a){
//     if(a > 0){
//         console.log(a, "is positive");
//     }
//     else if(a <0){
//         console.log(a, "is negative");
//     }
//     else if(a == 0){
//         console.log(a, "is zero");
//     }
//     else{
//         console.log("Invalid")
//     }
// }
// checkNumber(-5);



// for(i=1; i<=100; i++){
//     console.log(i);
// }


// for(i=1; i<=50; i++){
//     if(i%2 === 0){
//         console.log(i);
//     }
// }


// function sumOfArray(arr){
//     let sum = 0;
//     for(i=0; i<arr.length; i++){
//         sum = sum+arr[i];
//     }
//     return sum;
// }
// console.log(sumOfArray([1,2,3,4,5]));


// function repeatString(str, num){
//     let result = "";
//     for(i=0; i<num; i++){
//         result = str+result;
//     }
//     return result;
// }
// console.log(repeatString("Hii", 3));


// let name = prompt("Enter a name:"); 
// function GreetingMessage(msg, name){
//     let result = msg+name;
//     return result;
// }
// console.log(GreetingMessage("Hello ", name));


// function factorial(num){
//     let fact = 1;
//     for(i=1; i<=num; i++){   
//         fact = fact*i; 
//     }
//     return fact;
// }
// console.log(factorial(5));


// function fibonacciSeries(num){
//     let a = 0; b = 1;
//     let result = [];

//     for(i=0; i<num; i++){
//         result.push(a);
//         let next = a+b;
//         a=b;
//         b=next;
//     }
//     console.log(result.join(" , "));
// }
// fibonacciSeries(10);



// function reverseString(str){
//     let reverse = "";
//     for(i=str.length-1;i>=0; i--){
//         reverse += str[i]; 
//     }
//     console.log(reverse);
// }
// reverseString("hello");



// function primeNumber(num){
//     for(i=2; i<=Math.sqrt(num); i++)
//     if(num%i !== 0){
//         console.log(num, "is prime");
//         return;
//     }
// }
// primeNumber(7);


// let count = 0;
// function sumOfDigits(num){
//     while(num >0){
//         let digit = num%10;
//         count += digit;
//         num = Math.floor(num/10);
//     }
//     console.log(count);
// }
// sumOfDigits(1234);



// function vowelCount(str){
//     let count = 0;
//     let vowels = "aeiouAEIOU";
//     for(i=0; i<str.length; i++){
//         if(vowels.includes(str[i])){
//             count ++;
//         }
//     }
//     console.log(count);
// }
// vowelCount("Javascript");


// function secondLargestNumber(arr){
//     arr.sort((a,b) => b-a);
//     console.log(arr[1]);
// }
// secondLargestNumber([1,4,9,3,7]);


function palindromeChecker(str){
    let reversed = str.split('').reverse().join('');
    if(str === reversed){
        console.log("palindrome")
    }else{
        console.log("not palindrome")
    }
}
palindromeChecker("radar");