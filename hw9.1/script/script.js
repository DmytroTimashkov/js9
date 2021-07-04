let arr =[1, 2, 3];

// let arr2 = arr.concat([4, 5, 6])
// console.log((arr2))

// arr.reverse();
// console.log(arr)

// arr.push(4, 5, 6);
// console.log(arr)

// arr.unshift(4, 5, 6);
// console.log(arr)

// let arr3 = ['js', 'css', 'jq'];
//
// console.log(arr3.shift())
// console.log(arr3.pop())


let arr4 = [1, 2, 3, 4, 5];
//
// console.log(arr4.slice(0,3))
// console.log(arr4.slice(3,5))
// console.log(arr4.splice(1,2))
// console.log(arr4.slice(1,4))

// arr4.splice(3,0,"a","b","c");
// console.log(arr4)

// arr4.splice(1,0,"a","b");
// arr4.splice(6,0,"c");
// arr4.splice(8,0,"e");
// console.log(arr4)

let arr5 = [3, 4, 1, 2, 7];

// arr5.sort()
// console.log(arr5)


let arr6 = [5, 6, 7, 8, 9];

// let sum = 0;
// for (let i = 0 ; i <= arr6.length - 1 ; i++){
//
//    sum += arr6[i];
// }
// console.log(sum)

// for (let i = 0 ; i <= arr6.length - 1 ; i++){
//     arr6.push(Math.pow(arr6[0],2))
//     arr6.shift()
//
// }
// console.log(arr6)


let arr7 = [1,-3, 5, 6,-7, 8, 9,-11];

// for (let i = 0 ; i <= arr7.length - 1 ; i++){;
//     if (arr7[i] > 0 )delete arr7[i];
//
// }
// console.log(arr7)
// for (let i = 0 ; i <= arr7.length - 1 ; i++){;
//     if (arr7[i] % 2 != 0 )delete arr7[i];
//
// }
// console.log(arr7)

let arr8 = ["aaa", "aaaqqq", "zzzqq", "zz", "qsaa", "q", "az"];

// for (let i = 0 ; i <= arr8.length - 1 ; i++){
//     if(arr8[i].length < 5)delete arr8[i]
// }
// console.log(arr8)

let arr9 = [1, 2, [3, 4], 5, [6, 7]];

// for (let i = 0 ; i <= arr9.length ; i++){
//     if (Array.isArray(arr9[i]) === false) delete arr9[i];
//
// }
// console.log(arr9)

let arr10 = [5,-3, 6,-5, 0,-7, 8, 9];

let sum = 0;
for (let i = 0 ; i <= arr10.length - 1 ; i++ ){
    if (arr10[i] < 0) sum++;
}
console.log(sum)


