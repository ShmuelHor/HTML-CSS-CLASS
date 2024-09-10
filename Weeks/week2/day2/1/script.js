const list_of_missions = [];

const inputUp = document.getElementById("inputUp");
const butUp = document.getElementById("butUp");
const table = document.getElementById("table");

document.getElementById('divUp').addEventListener('submit', function(event) {
    event.preventDefault();});

    if(localStorage.getItem('todos')) {
        list_of_missions.push(...JSON.parse(localStorage.getItem('todos')));
        TableViewer();
    }

    if(list_of_missions.length == 0){
        const obj  = {"id": "Id", "toDo": "To Do", "Status": "Status","Actions":"Actions"};
        list_of_missions.push(obj);
    }


console.log(table)
butUp.addEventListener("click", OnClick);

function OnClick(){
    const nameMission = inputUp.value;
    let newObj  = {"id": generateId(), "toDo": nameMission, "Status": "Active" };
    list_of_missions.push(newObj);
    inputUp.value = '';
    TableViewer();
    saveToLocalStorage();
}

function TableViewer(){
    
    table.innerHTML = "";

    list_of_missions.forEach((val)=>{
        const tr1 = document.createElement("tr");
        const tdId = document.createElement("td");
        const tdToDo = document.createElement("td");
        const tdStatus = document.createElement("td");
        const tdActions = document.createElement("td");
        tdId.innerHTML = val.id;
        tdToDo.innerHTML = val.toDo;
        tdStatus.innerHTML = val.Status;

        if(val.Status === "inactive"){
            tdToDo.classList.add('done');
        }

        if(val.Actions != null){
        tdActions.innerHTML = val.Actions;
        }
        else{
        const Div = document.createElement("div");
        const done = document.createElement("button");
        const edit = document.createElement("button");
        const delete1 = document.createElement("button");
        done.innerText = "done";
        edit.innerText = "edit";
        delete1.innerText = "delete";

        const elememt = list_of_missions.find(x => x.id === val.id);

        done.addEventListener("click", () => {
            elememt.Status = "inactive";
            console.log(tdToDo);
            TableViewer(); 
                saveToLocalStorage();
            });
            
        edit.addEventListener("click",() =>{
            if(val.Status !== "inactive"){
                elememt.toDo = prompt();
                TableViewer(); 
                saveToLocalStorage();
            }
        })

        delete1.addEventListener("click",()=>{
            list_of_missions.splice(list_of_missions.findIndex((num)=> num.id === elememt.id),1)
            TableViewer(); 
            saveToLocalStorage();
        })

        Div.appendChild(done);
        Div.appendChild(edit);
        Div.appendChild(delete1);
        tdActions.appendChild(Div);
        }

        tr1.appendChild(tdId);
        tr1.appendChild(tdToDo);
        tr1.appendChild(tdStatus);
        tr1.appendChild(tdActions);
        table.appendChild(tr1);
    })
}

function generateId() {
    let time = Date.now().toString();
    return time.slice(-3);
}

function saveToLocalStorage() {
    localStorage.setItem('todos', JSON.stringify(list_of_missions));
}

