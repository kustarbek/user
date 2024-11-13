const todo = document.querySelector("#todo") 
 
fetch('https://jsonplaceholder.typicode.com/todos') 
.then(res => { 
    if (!res.ok){ 
        throw new Error("Ошибка сети"); 
    } 
    return res.json(); 
}) 
.then((data) =>{ 
    console.log(data); 
    data.slice(0, 100).forEach((user) => { 
        const userDiv = document.createElement("user"); 
        userDiv.innerHTML = ` 
        <div class"m-auto">
        <h1>${user.id}</h1> 
        <h1>${user.title}</h1> 
        <h1>${user.completed}</h1> 
        
        </div>
   
           ` 
        todo.appendChild(userDiv); 
    }); 
     
}) 


