//Creating the array

var arr1=[1,2,3];

var arr2 = new Array(1,2,3);

var arr3 =new Array(2);

arr3=[1,2];


// console.log(arr1,arr2,arr3)

//push()

// console.log(arr1);

arr1.push(8);

// console.log(arr1)

//pop();

arr1.pop();

// console.log(arr1)

//unshift();

var arrc=['a','b','c'];
// console.log(arrc);

arrc.unshift("r");
// console.log(arrc);

//shift()

arrc.shift();

// console.log(arrc)

//reverse()

arrc.reverse();

// console.log(arrc);



//sort()
let arrs=[1,8,7,5,2];

// console.log(arrs)

arrs.sort();

// console.log(arrs);

//splice()

let arr=[1,2,3,4,5];

// console.log(arr);

arr.splice(2,2,10,11);

// console.log(arr);

arr.splice(2,2);

// console.log(arr);

//concat()

let arrst=["hello", "hi"];
let arrst2=["good",'by'];

// console.log(arrst.concat(arrst2));


//indexOf();

// console.log(arrst.indexOf("hi"));
// console.log(arrst.indexOf("good"));


//lastIndexOf();
let arrn=[1,22,22,22,22,8,9,4,2,22,22,45,8];

// console.log(arrn.lastIndexOf(22));

//join()

let arrj=["a","b","c"];
// console.log(arrj.join());
// console.log(arrj.join(":"));
// console.log(arrj.join(""));

//slice();

// console.log(arrn);
let newARRN=arrn.slice(2,4);
// console.log(newARRN);
// console.log(arrn)

//filter();

let arr5= [1,5,10,15,78,75,90,99,45];
console.log(arr5);
let arr55=arr5.filter((value)=>{
 return value%5==0;
})

// console.log(arr55);


// console.log(arr5.find((val)=>val==0));



arr5.forEach((val)=>{
 console.log(val);
})


var k=arr5.reduce((a,b)=>{
 return a+b
})

console.log(k)