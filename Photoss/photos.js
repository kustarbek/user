const divuser = document.querySelector("#divuser");

fetch('https://jsonplaceholder.typicode.com/photos')
  .then(res => {
    if (!res.ok) {
      throw new Error("Ошибка сети");
    }
    return res.json();
  })
  .then((data) => {
    console.log(data); 
    data.slice(0, 50).forEach((user) => {
      const userDiv = document.createElement("div");
      userDiv.innerHTML = `
         <div class"">
         <h1>${user.id}</h1>
         <img src="${user.thumbnailUrl}" alt="userimage">
         </div>
      `;
      divuser.appendChild(userDiv); 
    });
  })
  .catch(error => {
    console.error("Error:", error); 
  });
