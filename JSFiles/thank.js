window.onload = function () {
    plane.classList.add('animate'); //animation for the plane
    let select = document.getElementsByClassName("btn")
    select[0].onclick = goVote; //if user click a button
    select[1].onclick = goResults;
}

function goVote() {
    window.location.href = "index.html"; //for next voter
}

function goResults() {
    window.location.href = "results.html"; //go to results
}
setTimeout(function () {
    plane.style.display = 'initial'; //display for the plane
}, 1000);