
// Change the educational level

function changeLevel() {

    let level = document.getElementById("educationLevel").value;

    let scoreLabel = document.getElementById("scoreLabel");

    let scoreInput = document.getElementById("studentScore");

    scoreInput.value = "";

    document.getElementById("errorMessage").innerHTML = "";

    document.getElementById("displayScore").innerHTML = "--";

    document.getElementById("classification").innerHTML = "--";

    document.getElementById("comment").innerHTML = "--";


    if (level === "primary" || level === "secondary") {

        scoreLabel.innerHTML = "Total Score (0 - 100)";

        scoreInput.max = 100;

        scoreInput.placeholder = "Enter your score";

    }

    else if (level === "polytechnic") {

        scoreLabel.innerHTML = "GPA (0 - 4.00)";

        scoreInput.max = 4;

        scoreInput.placeholder = "Enter your GPA";

    }

    else if (level === "university") {

        scoreLabel.innerHTML = "CGPA (0 - 5.00)";

        scoreInput.max = 5;

        scoreInput.placeholder = "Enter your CGPA";

    }

    else if (level === "college") {

        scoreLabel.innerHTML = "CGPA (0 - 5.00)";

        scoreInput.max = 5;

        scoreInput.placeholder = "Enter your CGPA";

    }

}


// Check the student's classification

function checkClassification() {

    let level = document.getElementById("educationLevel").value;

    let scoreInput = document.getElementById("studentScore").value;

    let score = Number(scoreInput);

    let classification = "";

    let comment = "";

    let maximum = 100;


    // Set the maximum score

    if (level === "primary" || level === "secondary") {

        maximum = 100;

    }

    else if (level === "polytechnic") {

        maximum = 4;

    }

    else if (level === "university" || level === "college") {

        maximum = 5;

    }


    // Validate the input

    if (scoreInput === "") {

        document.getElementById("errorMessage").innerHTML =
            "Please enter your score.";

        return;

    }

    else if (!Number.isFinite(score)) {

        document.getElementById("errorMessage").innerHTML =
            "Please enter a valid number.";

        return;

    }

    else if (score < 0 || score > maximum) {

        document.getElementById("errorMessage").innerHTML =
            "Invalid score! Your score must be between 0 and " + maximum + ".";

        return;

    }


    // Primary School Classification

    if (level === "primary") {

        if (score >= 70) {

            classification = "Excellent";

            comment = "Outstanding performance";

        }

        else if (score >= 60) {

            classification = "Very Good";

            comment = "Keep it up";

        }

        else if (score >= 50) {

            classification = "Good";

            comment = "Good performance";

        }

        else if (score >= 40) {

            classification = "Pass";

            comment = "You can do better";

        }

        else {

            classification = "Needs Improvement";

            comment = "More effort is required";

        }

    }


    // Secondary School Classification

    else if (level === "secondary") {

        if (score >= 70) {

            classification = "A";

            comment = "Excellent";

        }

        else if (score >= 60) {

            classification = "B";

            comment = "Very Good";

        }

        else if (score >= 50) {

            classification = "C";

            comment = "Good";

        }

        else if (score >= 45) {

            classification = "D";

            comment = "Fair";

        }

        else if (score >= 40) {

            classification = "E";

            comment = "Pass";

        }

        else {

            classification = "F";

            comment = "Fail";

        }

    }


    // Polytechnic Classification

    else if (level === "polytechnic") {

        if (score >= 3.50) {

            classification = "Distinction";

            comment = "Excellent performance";

        }

        else if (score >= 3.00) {

            classification = "Upper Credit";

            comment = "Very good performance";

        }

        else if (score >= 2.50) {

            classification = "Lower Credit";

            comment = "Good performance";

        }

        else if (score >= 2.00) {

            classification = "Pass";

            comment = "You have passed";

        }

        else {

            classification = "Fail";

            comment = "More effort is required";

        }

    }


    // University Classification

    else if (level === "university") {

        if (score >= 4.50) {

            classification = "First Class";

            comment = "Outstanding academic performance";

        }

        else if (score >= 3.50) {

            classification = "Second Class Upper";

            comment = "Excellent performance";

        }

        else if (score >= 2.40) {

            classification = "Second Class Lower";

            comment = "Good performance";

        }

        else if (score >= 1.50) {

            classification = "Third Class";

            comment = "Keep improving";

        }

        else if (score >= 1.00) {

            classification = "Pass";

            comment = "You have passed";

        }

        else {

            classification = "Fail";

            comment = "More effort is required";

        }

    }


    // College of Education Classification

    else if (level === "college") {

        if (score >= 4.50) {

            classification = "Distinction";

            comment = "Excellent performance";

        }

        else if (score >= 3.50) {

            classification = "Upper Credit";

            comment = "Very good performance";

        }

        else if (score >= 2.40) {

            classification = "Lower Credit";

            comment = "Good performance";

        }

        else if (score >= 1.50) {

            classification = "Pass";

            comment = "You have passed";

        }

        else {

            classification = "Below Pass";

            comment = "More effort is required";

        }

    }


    // Display the result

    document.getElementById("errorMessage").innerHTML = "";

    document.getElementById("displayScore").innerHTML = score;

    document.getElementById("classification").innerHTML =
        classification;

    document.getElementById("comment").innerHTML = comment;


    console.log("Score: " + score);

    console.log("Classification: " + classification);

    console.log("Comment: " + comment);

}


// View grading scales

function showScales() {

    document.getElementById("grading-scales").scrollIntoView({
        behavior: "smooth"
    });

}


// Set the correct input when the page opens

changeLevel();
