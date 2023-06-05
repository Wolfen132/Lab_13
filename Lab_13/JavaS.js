// Завдання №1
// let arr = [7,"line",true,null];
// //alert(arr.length);
// arr[4]= prompt("Enter number");
// //alert(arr[4]);
// arr.shift();
// alert(arr);

// Завдання №2
// let cities = ["Ternopil", "Lviv", "Warsaw"];
// let str = cities[0]+"*"+cities[1]+"*"+cities[2];
// alert(str);

// Завдання №3
// let arr = [2,3,4,5];
// let P=1;
// for(let i=0;i<arr.length;i++)
// {
//     P*=arr[i];
// }
// alert(P);

// let i=0;
// while(i<arr.length)
// {
//     P*=arr[i];
//     i++;
// }
// alert(P);

// Завдання №4
// for(let i=0;i<=15;i++)
// {
//     if(i%2)
//     {
//         console.log(i+" is odd");
       
//     }
//     else{
//         console.log(i+" is even");
//     }
// }

// Завдання №5
// function randArray(k){
//     let arr =  [];
//     let min = Math.ceil(1);
//     let max = Math.floor(500);
//     for(let i=0;i<k;i++)
//     {
//         arr[i]= Math.floor(Math.random() * (max - min + 1)) + min;
//     }
//     return arr;
// }
// let number = prompt("Enter number");
// alert(randArray(number));

// Завдання №6
// function raiseToDegree(a,b)
// {
//     return a**b;
// }
// let a = prompt("Введіть число");
// let b = prompt("Введіть степінь");
// alert(raiseToDegree(a,b));

// Завдання №7
// function findMin()
// {
// let min = arguments[0];
// for(let i=0;i<arguments.length;i++)
// {
//     if(arguments[i]<min)
//     {
//         min = arguments[i];
//     }
// }
// return min;
// }
// console.log("Min = " + findMin(4,56,3,67,32,-2,6,435,5));

// Завдання №8
// function findUnique(arr){
//     let Unique = true;
//     for(let i =0;i<arr.length;i++)
//     {
//     for(let j=i+1;j<arr.length;j++)
//     {
//         if(arr[i] == arr[j])
//         {
//             Unique=false;
//             break;
//         }
//     }
//     }
//     return Unique;
// }
// let arr = [1,5,765,43,23,76324,4];
// console.log(findUnique(arr));

// Завдання №9
// let arr = new Array(5,13,6,12,76,123);
// function lastArr(arr, num){
// for(let i = arr.length-num;i<arr.length;i++){
// console.log(arr[i]);
// }
// }
// lastArr(arr, 3);

// Завдання №10
let str = "i love java script";
