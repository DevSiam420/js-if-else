const address = 'potuakhali';
const part = address.slice(5, 10 );
console.log(part);





//  splite-----------------



const friendstr = 'siam,jihad,hamim,sakib,polahs';
const friends = friendstr.split(',');
console.log(friends);




// opposite systame ---------------


const realfirends  = [ 'siam', 'jihad', 'hamim', 'sakib', 'polahs' ];
console.log(realfirends.join());
console.log(realfirends.join(','));
console.log(realfirends.join('|'));


//  useing concat ----------------

const first  = 'Md.'; 
const  last = "Siam";

// const fullname = first + ' '+ last ;
// console.log(fullname);


const fullname2 =first.concat(' ').concat(last);

console.log(fullname2);  // "Md. Siam"



// includes--------------------


console.log(last.includes("i"));


