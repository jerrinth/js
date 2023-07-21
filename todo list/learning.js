// function createAlertViaDOM(message) {
//     const main = document.getElementById("main");
  
//     // Creating div element
//     const div = document.createElement("div");
//     const textNode = document.createTextNode(message);
  
//     // Assigning className
//     div.className = "alert";
  
//     // Append
//     div.append(textNode);
//     main.prepend(div);
//   }
  
//   createAlertViaDOM("Food is updated!");
// const food =[
//   "chicken briyani",  
//   "mutton briyani",  
//   "fish briyani"  
// ]
// let fragment = document.createDocumentFragment()
// let foodContainerel = document.getElementById("food-container");

// food.forEach(food => {
//   const li = document.createElement("li")
//   li.className= "food-item"
//   li.textContent=food
//    fragment.append(li)
// }); 

// foodContainerel.append(fragment)
// const bod = document.querySelector("body");
// console.log(bod);

// bod.addEventListener("copy", (event)=>{
//     event.preventDefault()
 
// })
const Formel = document.forms.feedback

const fetchapi=(event) =>
{
event.preventDefault()
 const formData = new FormData(Formel)
 //console.log([...formData.entries()]);

//  console.log([...new FormData(Formel)]);
  const dataString = new URLSearchParams(formData).toString()
//console.log(dataString);

fetch("https://reqres.in/api/users?page=2",{
    method: "GET",

})
.then((res)=>res.json())
.then((data)=>{
    document.getElementById("response").innerText=JSON.stringify(data.data)
})
}
Formel.addEventListener("submit",fetchapi)
