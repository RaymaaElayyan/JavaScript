async function FectData(PPage) {
    Sorce = "https://reqres.in/api/users?PPage=2"
    const response=await fetch(Sorce);
    const data=await response.json();
   console.log(data);
const dataFiltering=[];//new array to include the filtered data
if (data.includes('id')){
data.filter(!(data.id % 2 ==0))=dataFiltering;//new result will be stored into the new array 
dataFiltering.sort((a,b)=>a-b);
}
const arrayWithEmailAndAvatar=[];
if(dataFiltering.includes('email') && dataFiltering.includes('avatar')){
    if(true){
        console.log("Yes it includes avatar and email keys , heres the filtered array")
        arrayWithEmailAndAvatar=dataFiltering.includes(email) && dataFiltering.includes('avatar');
    console.log(arrayWithEmailAndAvatar)
    }else{
        console.log("no email and avatar found through the paggee ")
    }
}

}
async function GetPromise(data){
    return new Promise ((resolve, reject)=>{
      setTimeout(()=>{
        if(data){
        resolve(`Data is here done ${data} ` );
        }
        else{
            reject("errors here..")
        }
      },3000)
    })
  }
GetPromise()
.then((user) => {
        return FectData(user);
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
