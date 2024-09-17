const list = [];
const userName = document.getElementById("user-name");
const searchBut =document.getElementById("search-but");
const blok = document.getElementById("blok")

searchBut.addEventListener("click", Search);

async function Search(){
    console.log(userName.value);
    try {
        const response = await fetch(`https://api.github.com/users/${userName.value}`);
        if (response.ok) {
        const data = await response.json();
        if(!list.find(x => x.login == data.login)){
            list.push(data);
            CardViewer(data);
        }
        // console.log(list.find(x => x.login == data.login));
        } else {
            throw new Error("Fetching the information failed");
        }
        } catch (error) {
            console.log(error);
        }
} 

async function CardViewer(date){

    const imgUser = document.createElement("img");
    const h1UserName = document.createElement("h1");
    const repositories = document.createElement("p");
    imgUser.src = date.avatar_url;
    h1UserName.innerHTML = date.login;
    // repositories.innerHTML = (await fetch(date.repos_url)).json();

    blok.appendChild(imgUser);
    blok.appendChild(h1UserName);
    // blok.appendChild(repositories);
}

