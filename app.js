// 2) Bir method olsun iki parametr qəbul etsin və bu parametrlərdən birincini ikinciyə bölüb nəticəni geri qaytarsın.

// function sum(num1,num2){
//     return num1 / num2
// }

// console.log(sum(10,5));

//arrow function
// let sum = (num1,num2) =>{
// return num1 / num2 
// } 
// console.log(sum(10,5))




// 3) Repeat deyə bir method olsun və iki parametr qəbul etsin biri "word" digəri "count" yəni bu şəkildə "Repeat(string word, int count)" 
//bu method göndərilən word-ü göndərilən count qədər yan-yana yazdırıb geri qaytarsın. Məsələn:
// Repeat("Ha!") //Ha!
// Repeat("Ha!", 2) //Ha!Ha!
// Repeat("Ha!", 3) //Ha!Ha!Ha!

// function repeat(word,count){
//     let result = '';
//     for(let i=0; i<count ; i++){
        
//        result += word

//     }
//     console.log(result)

// } 
// repeat('ha',3)

//arrow function
// let repeat = (word,count) =>{
//     let result = '';
//     for(let i=0; i<count ; i++){
        
//        result += word

//     }
//     console.log(result)

// }
// repeat('ha',3)



// 4) Bir method olsun göndərilən "n" sayda ədədin hamsını toplayıb geri qaytarsın.

// function sum() {
//  let result = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     result += arguments[i];
    
//   }

//   return result;
// }

// console.log(sum(10,20,30,30,10))



// 5) Sahe deyə Method(lar) yaradılır.




// Çevrənin sahəsi - S = p*r² (p=3)

// function sahe(r){
//     const p = 3;
   
//     r *= r;
//     let s = p * r;
//     return s ; 
// }
// console.log(sahe(5));


// Düzbucaqlının sahəsi - S = a*b
// function sahe(a ,b){
//  let s = a * b;
//  return s ;
// }
// console.log(sahe(5,5))

// Üçbucaqlının daxilinə çəkilmiş çevrənin sahəsi - S=p*r; p=(a+b+c)/2
function sahe (a , b ,c , r){
    let p = (a + b +c)/2
    let s = p*r
    return s ;
}
console.log(sahe(5,5,5,2))