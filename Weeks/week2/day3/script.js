const numCompetitorsInput = document.getElementById("numCompetitorsInput");
const submitButton = document.getElementById("submitButton");
const allTracks = document.getElementById("allTracks");
const resultBoard = document.getElementById("resultBoard");
document.getElementById('carRaceForm').addEventListener('submit', function(event) {
    event.preventDefault();});

submitButton.addEventListener("click", OnClick);

function OnClick(){
    DeleteAllTracks();
    const numCompetitors = numCompetitorsInput.value;
    numCompetitorsInput.value ="";
    if(numCompetitors >= 2 && numCompetitors <= 4)
    {
        CreateTracks(numCompetitors);
    }
    else{
        alert(`המספר צריך להיות בין 2 ל 4 ולא ${numCompetitors} `)
    }
}
function CreateTracks (numCompetitors){
    
    for(let i = 1; i <= numCompetitors ;i++){
        const FinishLine = document.createElement("div");
        const track = document.createElement("div");
        const image = document.createElement("img");

        track.classList.add('track');
        image.src = `./images/car${i}.png`; 
        image.alt = 'aaaa'; 
        image.style.marginLeft = "0%";
        image.classList.add('image');
        
        FinishLine.classList.add('FinishLine');
        
        track.appendChild(FinishLine);
        track.appendChild(image);
        allTracks.appendChild(track);     
        moev(image);
    }
    
}

function DeleteAllTracks(){
    allTracks.innerHTML = " ";
}


const listInterval = [];

function moev(img) {
    let intervalId = setInterval(() => {

        listInterval.push(intervalId);
        let randomnum = Math.floor(Math.random() * 3) + 2;
        img.style.marginLeft = `${parseInt(img.style.marginLeft) + randomnum}%`
        if(parseInt(img.style.marginLeft) > 89){

            listInterval.forEach(elm => {
                clearInterval(elm);
                
            });
        }
    }, 100)
}
function aa(elm){
    const p = document.createElement("p");
    p.innerHTML = `מקום רשאון הוא ${listInterval.findIndex(elm)  + 1}`;
    resultBoard.appendChild(p);
}

  
