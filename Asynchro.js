// // //2
// // // // console.log("start");
// // // // setTimeout(() => {
// // // //   //delay for once
// // // //   console.log("Between Start And End");
// // // // }, 2000);
// // // console.log("end");

// // // // setInterval(() => {//its running more evenely
// // // //   console.log("set interval");
// // // // }, 1000);
// // // // setInterval(callback , delay)
// // // function test() {
// // //   console.log("set interval");
// // // }
// // // // setInterval(test, 1000);
// // // //set interval--->returns IP

// // // let counter = 0;
// // // function PrintCounter() {
// // //   console.log("counter", counter);
// // //   counter++;
// // // }
// // // const intervalID = setInterval(PrintCounter, 1000);
// // // console.log(intervalID); //origin for time out

// // // setTimeout(() => {
// // //   clearInterval(intervalID);
// // //   console.log("stopped !");
// // // }, 5005); //so 5 sec-2//close to 6 5515 so 6-2=4sec stopped

// // // //js->single thread: Cooking op ,ur alone eventhough u have multiple htings to do
// // // console.log("hello At first ");
// // // setTimeout(function()  {
// // //     console.log(`your  datta`);
// // // }, 5000);

// // // console.log("At the end");
// // // //line that depends on it i makes it wait
// // // // ---->ifs not for it ->to the webAPi
// // //3
// // setTimeout(() => {
// //   console.log("HI");
// // }, 0);
// // console.log("call Stack");

// // //4
// // //waits it till its blanck then execute it :
// // // eventLoop?

// // //5
// // const start = new Date();
// // while (Date.now() - start < 5000) {}
// // console.log("Call Stack");
// // //call stack evenloop and get all its things with APis to the stack...
// // //synchrononus op without?
// // //Web Apis?

// // //6
// // //whats event loop --> webApis, callStack,CallBackQueue..->iin interviewsss issues
// // // Api -> application web interface,, idunno how setTimeOut was build i know only how it works and execute things its it browser not via js itself , (abstraction)
// // //FASAD Function?
// // //every synchrounous is a blocking

// // //7
// // //Asynchrononus prgraming:js is non blocking nature -->

// //8___>> CAll Back Hell XXDD
// //   // wianting to print:
// /**1
//  * 2
//  * 3
//  * 4
//  */
// // setTimeout(() => {
// //   console.log(setTimeout("1"))
// // }, 1000);//so many loops inside eachotherss
// // setTimeoutout(() => {
// //   console.log(setTimeout("2"))
// // }, 2000)

// //1
// // //open it synchrononus
// const fs=require("fs")
// const filepath="./dd.txt";
// const content= fs.readFile(filepath, "utf-8",(error,data)=>{
//     if(data){
// console.log("data...");
//     }else{ //error}
//    console.og("error...");
// }});
// console.log("after")
// // //so its execution if :Before
// // //After
// //then data

// //9
// //  promises asynchrouncse instead of cbh(call back hell)
// //promise when u finish i will be returning sth
// // 3 types of promises:
// //pending:task in API after 10 sec -fullfilled-or rejected
// //after pending furfill if yes , reject is no
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("result");
//   }, 5000);
// });

// //...
// // const promise = new Promise((resolve, reject) => {
// //   setTimeout(() => {
// //     reject("error");
// //   }, 5000);
// // });
// // // console.log(promise);//output : Promise { <pending> }
// // // console.log((result) => {
// // //   console.log(result.toString());
// // // });

// // //...
// // promise.then((rr)=>{
// //   console.log(rr)
// // })

// //10
// const asyncPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let rand = Math.random();
//     console.log(rand);
//     if (rand > 0.5) {
//       resolve("Async Success");
//     } else {
//       console.log("Async Failure");
//     }
//   }, 200); ///here we wait data from interent then we edit it ..
// });
// asyncPromise
//   .then((rresult) => {
//     console.log(rresult);
//   })
//   .catch((error) => {
//     console.log(error); //maintanence easier ..
//   });
//asynchron
///non blocking
//non defined/error

//to handle pending -
//then in backgroung wait if ful full ->handle
//(.then)--> to wait annd handle it 
//in pending i dont want promise i want handling.
//handle reject go to error
//handle success
//promise to do optimize the call back hell ->
// A " heller "came newely XD "promise hell"

// function rollDice() {
//   return new Promise((reject, resolve) => {
//     setTimeout(() => {
//       // let roll = Math.random()*6;//get nums between 1 and 5 
//       let roll=Math.floor(1+(Math.random()*6));
//       // console.log(roll);
//       if (roll == 1 || roll==2) {
//         reject("Oops! Dice rolled off the table");
//       } 
//       else{
//         resolve(`You rolled a ${roll}.`);

//       }
//   },(Math.random*1000)+5000);
// });
// } 
// rollDice()
// .then((rresult) => {
//   console.log(rresult);
// })
// .catch((error) => {
//   console.log(error); 
// });

//async cover the promise thing and return it .
// await needs asyncro.->waitt for promise.
//every await shall have async in the begging if we put " async " without await==> no benefecial point at all !


//Async , wait promise ==>



// const fs = require('fs');

// const filePath = 'big.txt'; // Replace with the actual path to your large file

// console.log("Before Reading the files")
// const content = fs.readFileSync(filePath, 'utf8');
// console.log(content);  //  💡 You can access the file content directly
// console.log("After Reading the files")


// const fetchUser = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve({ name: 'John', age: 30 });
//     }, 2000);
//   });
// };

// const fetchPosts = (user) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(['post1', 'post2', 'post3']);
//     }, 2000);
//   });
// };

// fetchUser()
//   .then((user) => {
//     return fetchPosts(user);
//   })
//   .then((posts) => {
//     console.log(posts);
//   })
//   .catch((error) => {
//     console.error(error);
//   });











////////////////////////////////////////////////////////////////////////////////////
function GetPromiseAsync(data){
  return new Promise ((resolve, reject)=>{
    setTimeout(()=>{
      resolve(data);

    },1000)
  })
}
//await means the lines after depends on this line specifically:-->creates blocking to it .
// async function resolveData(){
//   const data1 =await GetPromiseAsync("1");//we used await to wait it even 10000 second and not throw it to the API , its dependency isnt an option , its related .
//   console.log(data1);
// }//await inside async waits for the function but the outter function syood in run 
//theres an invironment that opens for the function 
// 
 async function resolveData(){
  const data1 = await GetPromiseAsync('1');console.log(data1);// if we removed this "await" will print an obj  Promise { <pending> }
  const data2 = await GetPromiseAsync(`2`); console.log(data2);
  const data3 = await GetPromiseAsync(`3`);console.log(data3);
  
}
// async function resolveData(){
//   const data1 =GetPromiseAsync('1');console.log(data1);
//   const data2 = GetPromiseAsync(`2`); console.log(data2);
//   const data3 = GetPromiseAsync(`3`);console.log(data3);
  
// }//This above will be prinitng objz:Promise { <pending> }
// Promise { <pending> }
// Promise { <pending> }//cuz its promised that u will get a result it throws it to the web API and pending it cuz u didnt want to await it till u see whats going on , its just giving that the obj is promised to be pended , and when"await " u will see the result "


console.log("before")
resolveData();
console.log("After")
//Async Needs Await word-->

//MYCRO TASKK?
//await only used inside the asyncrononus function()?
//multi thread vs asynchrononus function?
//threads?
//http->hyper transfer protocol ?response http after requesting from google
//socket bidirection But http with server?
//http is stateless?
//bash changes data
//post instead of the field another one
//Api made by outter->
//free APi ->free ApI
//restor routing?



async function getNAme(Name){
  const urlPath=`https://api.genderize.io/?name=${Name}`;
  const response=await fetch(urlPath);
  const data=await response.json();
  console.log(data);
}
getNAme(`Raymaa`);
