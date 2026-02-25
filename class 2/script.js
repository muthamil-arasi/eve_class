// adding the elements inside the array

let arra = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < arra.length; i++) {
    sum += arra[i];
}
console.log("Total = " + sum);

//find the repeated number in the array 
let array=[1,2,3,2,2];
let current=0;

for(let i=0;i<array.length;i++){
    if(current[i]==array[i]){
        console.log("the number"+arr[i]+"is repeated");
    }
    else{
        console.log("the numbers in the above array is not repeated");
    }
}


//find the repeated number in the array using two for loop

let arr=[1,2,2,3,4];
let repeat=0;
for(let i=0;i<arr.length;i++){
    for(let j=0;j<i;j++){
        if(arr[i]==arr[j]){
            console.log("the repeated number is"+ arr[i]);
        }
    }
}

//find the repeated number in the array by using the seen object
//seen object will store visited numbers.

let ar=[1,2,2,2,3,4,5];
let seen={};
for(let i=0;i<ar.length;i++){
    if(seen[ar[i]]){
        console.log("the repeated number is" + ar[i]);
    }
}
