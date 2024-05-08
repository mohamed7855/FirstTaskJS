// Q1
// var num = Number(prompt("Enter Your Number"));
// console.log(num);

// Q2
// var num = Number(prompt("Enter Your Number"));
// if (num%3==0 && num%4==0) {
//     console.log("Yes");
// }else{
//     console.log("No");
// }

// Q3
// var num1 = Number(prompt("Enter First Number"));
// var num2 = Number(prompt("Enter Second Number"));
// if (num1>num2) {
//     console.log("Max is num1: ",num1);
// } else {
//     console.log("Max is num2: ",num2);
// }

// Q4
// var num = Number(prompt("Enter Your Number"));
// if (num<0) {
//     console.log("Negative");
// } else {
//     console.log("Positive");
// }

// Q5
// var num1 = Number(prompt("Enter First Number"));
// var num2 = Number(prompt("Enter Second Number"));
// var num3 = Number(prompt("Enter Third Number"));
// if (num1 > num2 && num1 > num3) {
//     console.log("Max is num1: ", num1);
//     if (num2 > num3) {
//         console.log("Mini is num3: ", num3);
//     } else { console.log("Mini is num2: ", num2); }
// } else if (num2 > num1 && num2 > num3) {
//     console.log("Max is num2: ", num2);
//     if (num1 > num3) {
//         console.log("Mini is num3: ", num3);
//     } else {
//         console.log("Mini is num1: ", num1);
//     }
// }else{
//     console.log("Max is num3: ", num3);
//     if (num1 > num2) {
//         console.log("Mini is num2: ", num2);
//     } else {
//         console.log("Mini is num1: ", num1);
//     }
// }

// Q6
// var num = Number(prompt("Enter Your Number"));
// if (num%2 == 0) {
//     console.log("Even");
// } else {
//     console.log("Odd");
// }

// Q7
// var char = prompt("Enter Your Character");
// if (char == "a" || char == "A" || char == "e" || char == "E" || char == "i" || char == "I" || char == "o" || char == "O"|| char == "u" || char == "U") {
//     console.log("Vowel");
// } else {
//     console.log("Consonant");
// }

// Q8
// var num = Number(prompt("Enter Your Number"));
// for (var i = 1; i<=num; i++) {
//     console.log(i);
// }

// Q9
// var num = Number(prompt("Enter Your Number"));
// for (var i = 1; i<=12; i++) {
//     console.log(num*i);
// }

// Q10
// var num = Number(prompt("Enter Your Number"));
// for (var i = 2; i<=num; i++) {
//     if (i%2==0) {
//         console.log(i);
//     }
// }

// Q11
// var num = Number(prompt("Enter Your Number"));
// var powerOf = Number(prompt("Enter Power Of Number"));
// var result=1;
// for (var i = 1; i<=powerOf; i++) {
//     result *= num
// }
// console.log(result);

// Q12
// var subject1 = Number(prompt("Enter Your Marks of Subject1"));
// var subject2 = Number(prompt("Enter Your Marks of Subject2"));
// var subject3 = Number(prompt("Enter Your Marks of Subject3"));
// var subject4 = Number(prompt("Enter Your Marks of Subject4"));
// var subject5 = Number(prompt("Enter Your Marks of Subject5"));
// var totalMarks= subject1+subject2+subject3+subject4+subject5
// console.log("Total marks: ",totalMarks);
// console.log("Average marks: ",totalMarks/5);
// console.log("Percentage marks: ",(totalMarks/500)*100);

// Q13
// var monthNumber = Number(prompt("Enter Your Month Number"));
// if (monthNumber==1) {
//     console.log("Days in Month January: 31");
// } else if(monthNumber==2){
//     console.log("Days in Month February: 28/29");
// }else if(monthNumber==3){
//     console.log("Days in Month March: 31");
// }else if(monthNumber==4){
//     console.log("Days in Month April: 30");
// }else if(monthNumber==5){
//     console.log("Days in Month May: 31");
// }else if(monthNumber==6){
//     console.log("Days in Month June: 30");
// }else if(monthNumber==7){
//     console.log("Days in Month July: 31");
// }else if(monthNumber==8){
//     console.log("Days in Month August: 31");
// }else if(monthNumber==9){
//     console.log("Days in Month September: 30");
// }else if(monthNumber==10){
//     console.log("Days in Month October: 31");
// }else if(monthNumber==11){
//     console.log("Days in Month November: 30");
// }else if(monthNumber==12){
//     console.log("Days in Month December: 31");
// }else{
//     console.log("Enter a valid month number between 1 and 12");
// }

// Q14
// var physicsMarks = Number(prompt("Enter Your Marks of Physics"));
// var chemistryMarks = Number(prompt("Enter Your Marks of Chemistry"));
// var biologyMarks = Number(prompt("Enter Your Marks of Biology"));
// var mathematicsMarks = Number(prompt("Enter Your Marks of Mathematics"));
// var computerMarks = Number(prompt("Enter Your Marks of Computer"));

// var totalMarks = physicsMarks+chemistryMarks+biologyMarks+mathematicsMarks+computerMarks;
// var percentage = (totalMarks/500)*100;

// if (percentage>=90) {
//     console.log("Percentage =>",percentage,"% :Grade A");
// }else if (percentage>=80) {
//     console.log("Percentage =>",percentage," :Grade B");
// }else if (percentage>=70) {
//     console.log("Percentage =>",percentage," :Grade C");
// }else if (percentage>=60) {
//     console.log("Percentage =>",percentage," :Grade D");
// }else if (percentage>=40) {
//     console.log("Percentage =>",percentage," :Grade E");
// }else if (percentage<40) {
//     console.log("Percentage =>",percentage," :Grade F");
// }

// Q15
// var monthNumber = Number(prompt("Enter Your Month Number"));
// switch (monthNumber) {
//     case 1:
//         console.log("Days in Month January: 31");
//         break;
//     case 2:
//         console.log("Days in Month February: 28/29");
//         break; 
//     case 3:
//         console.log("Days in Month March: 31");
//         break; 
//     case 4:
//         console.log("Days in Month April: 30");
//         break; 
//     case 5:
//         console.log("Days in Month May: 31");
//         break; 
//     case 6:
//         console.log("Days in Month June: 30");
//         break; 
//     case 7:
//         console.log("Days in Month July: 31");
//         break; 
//     case 8:
//         console.log("Days in Month August: 31");
//         break; 
//     case 9:
//         console.log("Days in Month September: 30");
//         break; 
//     case 10:
//         console.log("Days in Month October: 31");
//         break; 
//     case 11:
//         console.log("Days in Month November: 30");
//         break; 
//     case 12:
//         console.log("Days in Month December: 31");
//         break;
//     default:
//         console.log("Enter a valid month number between 1 and 12");
//         break;
// }


// Q16
// var char = prompt("Enter Your Character");
// switch (char) {
//     case "a":
//     case "A":
//     case "e":
//     case "E":
//     case "i":
//     case "I":
//     case "o":
//     case "O":
//     case "u":
//     case "U":
//         console.log("Vowel");
//         break;
//     default:
//         console.log("Consonant");
//         break;
// }
// ########################### Another Solution ###########################
// switch (true) {
//     case (char == "a" || char == "A" || char == "e" || char == "E" || char == "i" || char == "I" || char == "o" || char == "O"|| char == "u" || char == "U"):
//         console.log("Vowel");
//         break;

//     default:
//         console.log("Consonant");
//         break;
// }


// Q17
// var num1 = Number(prompt("Enter First Number"));
// var num2 = Number(prompt("Enter Second Number"));
// switch (true) {
//     case num1>num2:
//         console.log("Max is num1: ",num1);
//         break;
//     default:
//         console.log("Max is num2: ",num2);
//         break;
// }

// Q18
// var num = Number(prompt("Enter Your Number"));
// switch (true) {
//     case num%2 == 0:
//         console.log("Even");
//         break;
//     default:
//         console.log("Odd");
//         break;
// }


// Q19
// var num = Number(prompt("Enter Your Number"));
// switch (true) {
//     case num<0:
//         console.log("Negative");
//         break;
//     default:
//         console.log("Positive");
//         break;
// }


// Q20
// var num1 = Number(prompt("Enter First Number"));
// var num2 = Number(prompt("Enter Second Number"));
// console.log("Add : ",num1+num2);
// console.log("Subtract : ",num1-num2);
// console.log("Multiply : ",num1*num2);
// console.log("Divide : ",num1/num2);