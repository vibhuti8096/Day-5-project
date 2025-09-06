
//1)Write a simple JavaScript program to print expected Output using following array.
//Sample array : myColor = ["Red", "Green", "White", "Black"];
//Red,Green,White,Black
//Red+Green+White+Black
//Red,Green,White
//Red
//Green,White
//Red,Green,White,Black,orange 
document.write("1)Write a simple JavaScript program to print expected Output using following array.");

let myColor = ["Red", "Green", "White", "Black"];

document.write("i: " + myColor.join(",") + "<br>");
console.log("i: " + myColor.join(","));       

document.write("ii: " + myColor.join("+") + "<br>");
console.log("ii: " + myColor.join("+"));       

document.write("iii: " + myColor.slice(0, 3) + "<br>");
console.log("iii: " + myColor.slice(0, 3).join(",")); 

document.write("iv: " + myColor[0] + "<br>");
console.log("iv: " + myColor[0]); 

document.write("v: " + myColor.slice(1, 3)+ "<br>");
console.log("v: " + myColor.slice(1, 3).join(","));

myColor.push("Orange");
document.write("vi: " + myColor + "<br>");
console.log("vi: " + myColor); 

//2)Write a JavaScript program to get sum of all array element using for loop and foreach loop.
document.write("2)Write a JavaScript program to get sum of all array element using for loop and foreach loop. <br> <hr>");
let array1 = [10, 23, 35, 65, 45, 87];
let sum = 0;
array1.forEach(val => {
    sum += val;
});
let array = document.querySelector(".array")
array.innerHTML = `Sum of all elements: ${sum}`;
console.log(`Sum of all elements: ${sum}`);

//3)Write a JavaScript program to print a maximum and minimum value of given array.(using function and logic)
document.write(" 3)Write a JavaScript program to print a maximum and minimum value of given array.(using function and logic). <br>");
function findMinMax(array) {

    let min = array2[0];
    let max = array2[0];
    array.forEach(element => {
        if (element > max) {
            max = element;
        }

        if (element < min) {
            min = element
        }
    });

    return { max: max, min: min };
}

let array2 = [10, 23, 35, 65, 45, 87];
const result = findMinMax(array2);

let minimum = document.querySelector(".array2");
console.log("Minimun number", result.min);
document.write("Maximun number: ", result.min + " <br>");

let maximum = document.querySelector(".array2");
console.log("Maximun number", result.max);
document.write("Maximun number: ", result.max, "<br> <hr>");

//4)Write a JavaScript program for convert all array element in ASCII value.
document.write("4)Write a JavaScript program for convert all array element in ASCII value.<br> ");
let arr1 = ["A", "B", "C", "D", "E"];
let ascii = [];
arr1.forEach(function (char) {
    ascii.push(char.charCodeAt(0));
});
console.log("ASCII values: " + ascii.join(" , "))
document.write("ASCII values: " + ascii.join(" , "));

//5)Write a JavaScript program for remove negative values using the filter array function.
//numbers = [-23,-20,-17, -12, -5, 0, 1, 5, 12, 19, 20];
document.write("5)Write a JavaScript program for remove negative values using the filter array function.<br> ");

let numbers = [-23, -20, -17, -12, -5, 0, 1, 5, 12, 19, 20];

let nonnegative = numbers.filter((number) => number >= 0);
console.log(nonnegative);
document.write(nonnegative, " <br> <hr>");

//6)Write a JavaScript program using array map() method and return the square of array element.
// arr = [2, 5, 6, 3, 8, 9];
document.write("6)Write a JavaScript program using array map() method and return the square of array element.<br> ");
let arr = [2, 5, 6, 3, 8, 9];
let square = arr.map((x) => x * 2);

console.log("Square of array : "+square);
document.write("Square of array : "+square, "<br> <hr>");

//7)Write a JavaScript program for sort array in ascending descending.
//numbers = [23,20,17, 12,5, 0, 1, 5, 12, 19, 20];
document.write("7)Write a JavaScript program for sort array in ascending descending.<br> ");
let number = [23, 20, 17, 12, 5, 0, 1, 5, 12, 19, 20];
number.sort((a, b) => a - b);
console.log("Ascending: ", number);
document.write(" Ascending : ", number, "<br> <hr>");

number.sort((a, b) => b - a);
console.log("Descending : ", number);
document.write("Descending : ", number, "<br> <hr>");

//8)Write a JavaScript program which filters out any string which is less than 8 characters. 
//words = ['Python', 'Javascript', 'Go', 'Java', 'PHP', 'Ruby'];
document.write("8)Write a JavaScript program which filters out any string which is less than 8 characters.<br>");

words = ['Python', 'Javascript', 'Go', 'Java', 'PHP', 'Ruby'];
let filteredStrings = words.filter(s => s.length >= 8);

console.log("Filtered string words:", filteredStrings);
document.write("Filtered string words: " + filteredStrings + "<br> <hr>");


//9)write a JavaScript program to  to print expected output for following string.
//x = "airplane";    output:- r
//x = "oxoxoxox";   output:- "oXoXoXoX"
//x = "A New Java Book";   
// output:-  "a new java book" , "A NEW JAVA BOOK"
document.write("9)write a JavaScript program to  to print expected output for following string.<br> ");
let x = "airplane";
let result1 = x[2];
console.log("Output : ", result1);
document.write("Output: ", result1, "<br>");

let x2 = "oxoxoxox";
let result2 = " "
x2.split('').forEach(char => {
    if (char === 'x') {
        result2 += 'X';
    } else {
        result2 += char;
    }
});
console.log("Output : ", result2);
document.write("Output: ", result2, "<br>");

let x3 = "A New Java Book";
console.log("Output: ' " + x3.toLowerCase() + " ' ", ",", " ' " + x3.toUpperCase() + " ' ");
document.write("Output: ' " + x3.toLowerCase() + " ' ", ",", " ' " + x3.toUpperCase() + " ' ", "<br> <hr>");

//10) write a JavaScript program for array reverse.
document.write("10)write a JavaScript program for array reverse. <br>")

let numbers1 = [23, 20, 17, 12, 5, 0, 1, 5, 12, 19, 20];

let arrayReverse = numbers1.reverse();
console.log("Array Reverse : ", arrayReverse);
document.write("Array Reverse : ", arrayReverse, "<br> <hr>");

//11)write a JavaScript program for check value is found or not?
document.write("11)write a JavaScript program for check value is found or not?<br>")
let student = ["vibhuti", "ayushi", "khushi", "diya", "mansi"];
console.log(" Ans : " + student.includes("khushi"));
document.write(" Ans : " + student.includes("khushi"), "<br>");
console.log("Ans : ", student.includes("veidehi"));
document.write(" Ans : " + student.includes("veidehi"), "<br> <hr>");

//12)write a JavaScript program for print your name and write the no of total character.
document.write("12)write a JavaScript program for print your name and write the no of total character.<br>")
let name = "vibhuti";
console.log("Name : ", name);
document.write("Name : ", name, "<br>")
console.log("Name : ", name.length);
document.write("The no of total character : ", name.length, "<br> <hr>");

//13)write a JavaScript program given this output using replace concept.
//Input : - "I often take a walk with my dog in the evening. His dog follows him everywhere. I don't feed my dog in the morning";
//Output:-  "I often take a walk with my cat in the evening. His cat follows him everywhere. I don't feed my cat in the morning";
document.write("13)write a JavaScript program given this output using replace concept. <br>")
let para = "I often take a walk with my dog in the evening. His dog follows him everywhere. I don't feed my dog in the morning";
console.log("Ans : ", para.replaceAll("dog", "cat"));
document.write("Ans : ", para.replaceAll("dog", "cat"), "<br> <hr>");

//14) write a JavaScript program convert string to array.
//Input :- "Hire the top 1% freelance developers";
//Output :- ["Hire", "the", "top", "1%"] 
document.write("14)write a JavaScript program convert string to array.<br>")
let input = "Hire the top 1% freelance developers";
let result3 = input.split(" ").slice(0, 4);
console.log("Output : ", result3);
document.write("Output: [" + result3.map(result3 => `"${result3}"`).join(", ") + "]", "<br> <hr>");//wraps each word in double quotes for proper array formatting.
//${result3} : Used inside ${} (is templete literals) to interpolate values

//15)write a JavaScript program convert for array to string.
//Input:- ['5', 32, 'Daniel'];
//Output: 5,32,Daniel
document.write("15)write a JavaScript program convert for array to string.<br>")
let input2 = ['5', 32, 'Daniel'];
let result4 = input2.join(",");

console.log("Output : ", result4);
document.write("Output : ", result4)

