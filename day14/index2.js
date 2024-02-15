function hello(){
 console.log("hello");
}

console.log("Call The Function Every 2 Seconds");
const sI=setInterval(hello,2000);

//clearInterval - to clear the interval after 5 seconds
setTimeout(()=>{clearInterval(sI)},5000)