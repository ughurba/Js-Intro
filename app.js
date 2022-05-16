// 2) Bir method olsun iki parametr qəbul etsin və bu parametrlərdən birincini ikinciyə bölüb nəticəni geri qaytarsın.

// function sum(num1,num2){
//     return num1 / num2
// }

// console.log(sum(10,5));



// 3) Repeat deyə bir method olsun və iki parametr qəbul etsin biri "word" digəri "count" yəni bu şəkildə "Repeat(string word, int count)" 
//bu method göndərilən word-ü göndərilən count qədər yan-yana yazdırıb geri qaytarsın. Məsələn:
// Repeat("Ha!") //Ha!
// Repeat("Ha!", 2) //Ha!Ha!
// Repeat("Ha!", 3) //Ha!Ha!Ha!

function repeat(word,count){
    let result = '';
    for(i=0; i<count ; i++){
        
       result += word

    }
    console.log(result)

} 
repeat('ha',3)