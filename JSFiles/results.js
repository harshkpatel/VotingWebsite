if (sessionStorage.getItem("teamScores") === null) { //if scores have not been set already
    sessionStorage.setItem("teamScores", JSON.stringify([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]));
}
let teamScores = JSON.parse(sessionStorage.getItem("teamScores"));
window.onload = function () { //array of images to display the winning team and their poster
    let imgs = ["Images/Team 1.jpg", "Images/Team 2.jpg", "Images/Team 3.jpg", "Images/Team 4.png", "Images/Team 5.jpg", "Images/Team 6.png", "Images/Team 7.jpg", "Images/Team 8.jpg", "Images/Team 9.jpg", "Images/Team 10.jpg"]
    let check = 0;
    for (let i = 0; i < teamScores.length; i++) {
        if (teamScores[check] < teamScores[i]) //for loop and if statement to determine winning team
        {
            check = i;
        }
    }
    document.getElementById("img").src = imgs[check]; //display picture
    check++;
    document.getElementById("winner").innerHTML += "Team " + check;
    document.getElementById("home").onclick = newPage;
}

function newPage() { //goes back to the voting page
    window.location.href = "index.html";
}
var ctx = document.getElementById('resultsGraph').getContext('2d'); //displays graph
var myChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
        labels: ['Team 1', 'Team 2', 'Team 3', 'Team 4', 'Team 5', 'Team 6', 'Team 7', 'Team 8', 'Team 9', 'Team 10'],
        datasets: [{
            maxBarThickness: 100,
            minBarLength: 10,
            data: teamScores,
            backgroundColor: [
                'rgba(169, 169, 169, 0.5)',
                'rgba(255, 250, 10, 0.5)',
                'rgba(136, 10, 136, 0.5)',
                'rgba(255, 190, 200, 0.5)',
                'rgba(65, 105, 255, 0.5)',
                'rgba(255, 100, 75, 0.5)',
                'rgba(0, 255, 255, 0.5)',
                'rgba(0, 0, 0, 0.5)',
                'rgba(218,165,32, 0.5)',
                'rgba(34,139,34, 0.5)'
            ],
            borderColor: [
                'rgba(169, 169, 169, 1)',
                'rgba(255, 250, 10, 1)',
                'rgba(136, 10, 136, 1)',
                'rgba(255, 190, 200, 1)',
                'rgba(65, 105, 255, 1)',
                'rgba(255, 100, 75, 1)',
                'rgba(0, 255, 255, 1)',
                'rgba(0, 0, 0, 1)',
                'rgba(218,165,32,1)',
                'rgba(34,139,34, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        title: {
            display: true,
            text: 'Votes per Video',
            fontSize: 25
        },
        legend: {
            display: false
        },
        scales: {
            xAxes: [{
                gridLines: {
                    offsetGridLines: true
                }
            }]
        }
    }
});