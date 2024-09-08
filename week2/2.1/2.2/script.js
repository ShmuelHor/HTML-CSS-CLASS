const mainbody = document.body;
const h1 = document.createElement("h1");
h1.innerHTML = "Mouse Out";

mainbody.appendChild(h1);

h1.addEventListener("mouseover", mouseIn);
h1.addEventListener("mouseout", mouseOut);
h1.addEventListener("click", clickh1);

function mouseIn() {
    h1.innerHTML = "Mouse in";
}

function mouseOut() {
    h1.innerHTML = "Mouse Out";
}

function clickh1() {
    h1.style.backgroundColor = "blue";
    h1.style.color = "red";
    h1.style.textDecoration = "underline";
}

const box = document.createElement("div");
box.style.backgroundColor = "greenyellow";
box.style.height = "250px";
box.style.width = "250px";

mainbody.appendChild(box);

const btn = document.createElement("button");
btn.innerHTML = "שנה צבע";
btn.addEventListener("click", clickBtn);
mainbody.appendChild(btn);

function clickBtn() {
    box.style.backgroundColor = select.value;
}

const select = document.createElement("select");

const red = document.createElement("option");
red.value = "red";
red.textContent = "red";

const blue = document.createElement("option");
blue.value = "blue";
blue.textContent = "blue";

const black = document.createElement("option");
black.value = "black";
black.textContent = "black";

select.appendChild(black);
select.appendChild(red);
select.appendChild(blue);

mainbody.appendChild(select);
box.style.display = "none";
box.style.display = "block";

const btn1 = document.createElement("button");
btn1.innerHTML ="off";
btn1.addEventListener("click", clickBtn1);
mainbody.appendChild(btn1);

function clickBtn1() {
    if (box.style.display === 'none') {
        box.style.display = 'block';
        btn1.innerHTML ="off";
    } 
    else {
        box.style.display = 'none';
        btn1.innerHTML ="on";
    }
}

const btnInput = document.createElement("button");
btnInput.innerHTML ="Input";
btnInput.addEventListener("click", clickBtnInput);
mainbody.appendChild(btnInput);

function clickBtnInput(){
    const a = prompt(`הכנס שם של צבע`);
    const neww = document.createElement("option");
    neww.value = a;
    neww.textContent = a;

select.appendChild(neww);
}

