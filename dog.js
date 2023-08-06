const dogImageDiv = document.getElementById("dogImage")
const dogButton = document . getElementById("dogButton")
// promise method:
// const getNewdog=()=>{
//  fetch("https://dog.ceo/api/breeds/image/random")
//   .then (response => response.json())
//    .then (json => {
//     console.log(json.message)
//     dogImageDiv.innerHTML = `<img src='${json.message}'height=300 width=300/>`
//    })
//    .catch(error => {
//     console.error("Error:", error);
// });
// }
// dogButton.onclick=()=>getNewdog();

// async-await method: 
async function getNewdog() {
  const url = "https://dog.ceo/api/breeds/image/random";
  const response = await fetch(url);
  const data = await response.json();
  // console.log(data); 
  dogImageDiv.innerHTML = `<img src="${data.message}"height=600 width=600/>`;
}
dogButton.onclick= () =>getNewdog();
   
 

