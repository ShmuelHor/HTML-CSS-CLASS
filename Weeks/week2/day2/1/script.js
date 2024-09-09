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
        let a  = {"id": "Id", "toDo": "To Do", "Status": "Status","Actions":"Actions"};
        list_of_missions.push(a);
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

        if(val.Actions != null){
        tdActions.innerHTML = val.Actions;
        }

        else{
        const Div = document.createElement("div");
        const statusChanges = document.createElement("button");
        const update = document.createElement("button");
        const delete1 = document.createElement("button");
        statusChanges.innerText = "Changes status";
        update.innerText = "update";
        delete1.innerText = "delete";
        
        statusChanges.addEventListener("click",()=>
            {list_of_missions.filter(x => x.id === val.id)[0].Status = "in activ";
            TableViewer(); saveToLocalStorage();})
        update.addEventListener("click",()=>
            {list_of_missions.filter(x => x.id === val.id)[0].toDo = prompt();
                TableViewer(); saveToLocalStorage();
            });
        delete1.addEventListener("click",()=>
            {list_of_missions.filter(x => x.id === val.id)[0].toDo})


        Div.appendChild(statusChanges);
        Div.appendChild(update);
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
    let a = Date.now().toString();
    return a.slice(-3);
}
console.log(list_of_missions)

function saveToLocalStorage() {
    localStorage.setItem('todos', JSON.stringify(list_of_missions));
}

