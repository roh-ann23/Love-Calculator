


// once we genarate percentage with pair of name, then it'll not shows percentage again for that pair of name .


let lovePercentages = {}; 

function calculateLove() {
    var yourName = document.getElementById("yourName").value.trim();
    var partnerName = document.getElementById("partnerName").value.trim();
    
    if (yourName === "" || partnerName === "") {
        alert("Please enter both names");
        return;
    }

    var key = yourName + "_" + partnerName; 
    var lovePercentage;

    if (lovePercentages.hasOwnProperty(key)) {
        lovePercentage = lovePercentages[key]; 
    } else {
        lovePercentage = Math.floor(Math.random() * 101);
        lovePercentages[key] = lovePercentage; 
    }

    document.getElementById("result").innerHTML = `Love Percentage between ${yourName} and ${partnerName} is: ${lovePercentage}%`;
}




// this will generate percentage again and again for the same pair of name.

/*
function calculateLove() {
    var yourName = document.getElementById("yourName").value.trim();
    var partnerName = document.getElementById("partnerName").value.trim();
    
    if (yourName === "" || partnerName === "") {
        alert("Please enter both names");
        return;
    }

    var lovePercentage = Math.floor(Math.random() * 101); // Random percentage between 0 and 100
    
    document.getElementById("result").innerHTML = `Love Percentage between ${yourName} and ${partnerName} is: ${lovePercentage}%`;
}

*/