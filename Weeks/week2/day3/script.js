const numCompetitorsInput = document.getElementById("numCompetitorsInput");
const submitButton = document.getElementById("submitButton");
const allTracks = document.getElementById("allTracks");
const resultBoard = document.getElementById("resultBoard");
const Reset = document.getElementById("Reset");

document.getElementById('carRaceForm').addEventListener('submit', function(event) {
    event.preventDefault();});

submitButton.addEventListener("click", OnClick);

function OnClick(){
    const numCompetitors = numCompetitorsInput.value;
    DeleteAllTracks();
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
        move(image);
    }
    
}

function DeleteAllTracks(){
    allTracks.innerHTML = " ";
    resultBoard.innerHTML  = " ";
    
}


const listInterval = [];
const listFinish = [];

function move(img) {
  
    const dateTime = Date.now();

    let a = setInterval(() => {
        listInterval.push(a);
        let randomnum = Math.floor(Math.random() * 1.2) + 0.2;
        img.style.marginLeft = `${parseInt(img.style.marginLeft) + randomnum}%`;

        if (parseInt(img.style.marginLeft) > 89) {
            clearInterval(a);
            listFinish.push((Date.now() - dateTime) / 1000);
            
            if (listFinish.length ==  numCompetitorsInput.value -2) {
                console.log(listFinish.length);
               printt();
            }
        }
    }, 5);
    
}

const a = [1,2,3,4];
function printt(){
    const p = document.createElement("p");
    p.innerHTML = `מקום ${a[0]} הגיע ב  ${listFinish[0]} שניות`;
    a.shift();
    listFinish.shift();
    resultBoard.appendChild(p);
}

const ResetButton = document.createElement("button");
Reset.appendChild(ResetButton)
ResetButton.classList.add('ResetButton');
ResetButton.innerHTML ="איפוס";
ResetButton.addEventListener("click", ()=>{DeleteAllTracks();
    numCompetitorsInput.value = " ";
    a = [1,2,3,4]
}); 
