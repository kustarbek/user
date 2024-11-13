const userList = document.querySelector("#userList") 
 
fetch('https://jsonplaceholder.typicode.com/users') 
.then(res => { 
    if (!res.ok){ 
        throw new Error("Ошибка сети"); 
    } 
    return res.json(); 
}) 
.then((data) =>{ 
    console.log(data); 
    data.forEach((user) => { 
        const userDiv = document.createElement("div"); 
        userDiv.innerHTML = ` 
         <div class = "textold"  ">
         <h1 class = "text-[25px] font-[500]">${user.id}</h1> 
         <h2>${user.username}</h2> 
         <h2>${user.name}</h2> 
         <h2>${user.email}</h2> 
         <h2>${user.address.city}</h2> 
         <h2>${user.address.street}</h2> 
         <h2>${user.address.suite}</h2> 
         <h2>${user.address.zipcode}</h2> 
         <h2>${user.address.geo.lat}</h2> 
         <h2>${user.address.geo.lng}</h2> 
         <h2>${user.company.name}</h2> 
         <h2>${user.company.catchPhrase}</h2> 
         <h2>${user.company.bs}</h2> 
         <h2>${user.phone}</h2> 
         <h2>${user.website}</h2> 
         </div>
           ` 
        userList.appendChild(userDiv); 
    }); 
     
}) 

