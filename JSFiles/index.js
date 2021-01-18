if (sessionStorage.getItem("teamScores") === null) { //if scores have not been set already
    sessionStorage.setItem("teamScores", JSON.stringify([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]));
}
let teamScores = JSON.parse(sessionStorage.getItem("teamScores"));
window.onload = function () {
    let clicked = document.getElementsByClassName("btn");
    clicked[0].onclick = clearSecurity;
    clicked[1].onclick = goThank;
    clicked[2].onclick = goResults; //buttons clicked by user
}

function clearSecurity() { //get rid of code to make sure multiple user doesnt vote twice
    let code = document.getElementById("userCode").value;
    let modal = document.getElementById("modal")
    if (code.length > 15) { //checks if users code should work
        modal.style.display = "none";
    } 
    else {
        alert("The code is incorrect, please try again!");
    }
}

function goThank() {
    let teams = document.getElementsByClassName("userIn");
    let count = 0;
    for (let i = 0; i < teams.length; i++) {
        if (teams[i].value == null) { //checks if they gave every team a score
            alert("Please give each team a rating from 1 - 10");
            break;
        } else if (teams[i].value > 10 || teams[i].value < 1) //makes sure that the score is within the range
        {
            alert("Please give each team a rating from 1 - 10");
            break;
        } else { //adds it to the array of scores
            teamScores[i] = parseInt(teams[i].value) + parseInt(teamScores[i]);
        }
        count++;
    }
    if (count == 10) { //adds to storage and goes to thank you page
        sessionStorage.setItem("teamScores", JSON.stringify(teamScores));
        window.location.href = "thank.html";
    }
}

function goResults() { //go to the results
    window.location.href = "results.html";
}