// function palindrome(str) {
//
//     console.log(str);
//     str = str.toLowerCase();
//     for (let i =0;i<str.length;i++){
//         while(!/^[a-zA-Z0-9]+$/.test(str[i])){
//             str = str.replace(str[i],'')
//         }
//
//
//     }
//     console.log(str);
//     let second=str.length-1;
//     for(let i=0;i<str.length;i++){
//         if(str[i]==str[second]){
//             second--;
//         }
//         else{
//             return false;
//         }
//     }
//     return true;
// }
//
//
//
// console.log(palindrome("A man, a plan, a canal. Panama"));


// SUCH FUN
// function convertToRoman(num) {
//     var ref = [['M', 1000], ['CM', 900], ['D', 500], ['CD', 400], ['C', 100], ['XC', 90], ['L', 50], ['XL', 40], ['X', 10], ['IX', 9], ['V', 5], ['IV', 4], ['I', 1]];
//     var res = [];
//     ref.forEach(function(p) {
//         while (num >= p[1]) {
//             res.push(p[0]);
//             num -= p[1];
//         }
//     });
//     return res.join('');
// }
// convertToRoman(36);
