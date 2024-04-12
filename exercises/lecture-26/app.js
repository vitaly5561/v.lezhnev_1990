//Пункт 1

const arr = [1,2,4];
function calculate(operation, initialValue, numbers) {
   let result = initialValue;
  for (const number of numbers) {
    result = operation(result, number);
  }
  return result;
}
 
  
  // sum() - це функція, яка описує операцію додавання. 
    function sum (n1, n2) {
     return n1 + n2;
  }
  
  // multiply() - це функція, яка описує операцію множення.
  
  function multiply(n1, n2) {
     return n1 * n2;
  }


 const sumNumber  = calculate(sum , 0 , arr);
 console.log(sumNumber);

 const multiplyNumber  = calculate(multiply , 1 , arr);
 console.log(multiplyNumber);

 //Пункт 2
 let student_names = ["Wick", "Malcolm", "Smith"];
 
 const student = student_names.map((item, index , student_names) =>{
   return `name: ${item} | index: ${index} | array: ${student_names}`;
 });

 console.log(student);

 //Пункт 3

let students_information = 
[
   {"name": "Wick", "degree": 375}, 
   {"name": "Malcolm", "degree": 405}, 
   {"name": "Smith", "degree": 453},
];


const maxDegree = 600;

const percentages = students_information.map((student) => {
   const percentage = (student.degree / maxDegree) * 100;
   return {
     name: student.name,
     degree: student.degree,
     percentage: percentage.toFixed(1), 
   };
 });
 
 console.log(percentages);


  //Пункт 4

 const arr4 =  [1, 2, 3, [10, 11, 12], 21, 22, 23, [31, 32, 33, 34], [41, 42]];

//  цей пункт не зміг зробити


//  Пункт 5


Array.prototype.upperCase = function() {
   for (let i = 0; i < this.length; i++) {
     this[i] = this[i].toUpperCase();
   }
   return this; 
 };


function myFunc() {
   let arr = ["Algorithm", "Data Structure", "Operating System", "html"];
   arr.upperCase();
   console.log(arr);
}

myFunc(); 



