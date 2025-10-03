// -------  1 

// const number = [1, 2, 3, 4, 5, 6, 7];
// console.log(number);
// number.reverse();
// console.log(number);


// ------------2 useing variable 

// const number = [1, 2, 3, 4, 5, 6, 7];
// console.log(number);
// const reversed = number.reverse();  
// console.log(reversed);


// useing for of loop--------

// const number = [1, 2, 3, 4, 5, 6, 7]; 

// const rev_numbers = [];
// for (const num of number){
//     console.log(num);
//     rev_numbers.unshift(num);
//     console.log(rev_numbers);


// }


// normal for loop ==========


// const number = [1, 2, 3, 4, 5, 6, 7];

// let rev_numbers = [];

// for ( let i = 0 ; i < number.length ; i++){
//     const  num = number[i];
//     rev_numbers.unshift(num);
// }

// console.log(rev_numbers);


// ________________________________________________________________

// const person = ['aman', 'jaman', 'baman', 'daman', 'haman'];
// person.sort();
// console.log(person);



// this is for of loop 

 
const color = ['red', 'blue', 'green', 'yellow', 'orange'];

const reversed_color = [];

for (const col of color){
    console.log(col);
    reversed_color.unshift(col);
   


}console.log(reversed_color)



