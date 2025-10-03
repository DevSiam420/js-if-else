// const salary = 20000 ;
// const height = 57 ;
// const isBcs = true ;


// if ( (salary >= 23000 || height > 60) && isBcs == true){
//   console.log("eso baba kobul ");

// }
// else{
//   console.log("vagg sala")
// }

// const price = 3000 ;
 
// if (price >= 5000){
//   // 10 % discount ======
//   discount = price * 10 / 100 ;
//   console.log(discount);
//    payamount = (price - discount);
//    console.log(payamount);

// }

// else if ( price > 2500 ){
//   // 5 % discount 
//   const discount = price * 5 / 100 ;
//   console.log(discount);

//   const payamount = price - discount;
//   console.log(payamount);

// }



// example


const  age = 18;
const price = 600 ; 

if ( age <= 15){
  // 10% discount 
  const discount = price * 10 / 100 ;
  console.log(discount)
  const payAmount = (price - discount);
  console.log(payAmount);
}

else if (age <= 20 ){
  // 5% discount 
  const discount = price * 5 /100 ;
 const payAmount = price - discount ;
  console.log(payAmount);
}
else if ( age >= 60 ){
  // 50% DISCOUNT
  const discount = price * 50 / 100 ; 
  console.log(discount);
   const payAmount = price - discount ;
  console.log(payAmount);
  

}
else{
  console.log(price);
  
}
