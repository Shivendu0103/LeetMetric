document.addEventListener("DOMContentLoaded", function() {
    const searchButton = document.getElementById("Seacrh-button");
    const usernameInput = document.getElementById("User-input");
    const statContainer = document.querySelector(".Stats-Container");
    const easyProgressCircle = document.querySelector(".easy-progress");
    const mediumProgressCircle = document.querySelector(".medium-progress");
    const hardProgressCircle = document.querySelector(".hard-progress");


    const easyLabel = document.getElementById("easy-label");
    const mediumLabel = document.getElementById("medium-label");
    const hardLabel = document.getElementById("hard-label");
    const cardStatsContainer = document.querySelector(".stats-card");



    function validateUsername(username) {
        if(username.trim() === ""){
            alert("Username should not be empty");
            return false;
        }
        const regex = /^[a-zA-Z0-9_-]{1,15}$/;
        const isMatching = regex.test(username);
        return isMatching;
    }



    searchButton.addEventListener('click', function(){
        const username = usernameInput.value;
        console.log("loggin username", username);
    })



}) 
