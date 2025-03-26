let repeat = true

while (repeat) {

let numberOfAssignments = parseInt(prompt("How many assignments would you like to grade?"));
    if (numberOfAssignments > 10) {
        alert("Please do not enter more than 10 assignments");
    }


    let totalScore = 0

    for (let i = 0; i < numberOfAssignments; i++) {
        let assignmentScore = (parseInt(prompt("Please enter the assignment score out of 100")));
        totalScore += assignmentScore;
       
    }
    let total = 100;
    let averagePercentage = (totalScore / (numberOfAssignments * 100)) * 100
    let grade = convertScoreToGrade(averagePercentage)

    function convertScoreToGrade (averagePercentage) {
        if (averagePercentage >= 90) {
            return "A"
        } else if (averagePercentage >= 80) {
            return "B"
        } else if (averagePercentage >= 70) {
            return "C"
        } else if (averagePercentage >= 60) {
            return "D"
        } else {
            return "F"
        }
    }

    

    console.log("The average score is " + (averagePercentage) + " and your grade is " + (grade));

    let repeat = prompt("Would you like to repeat the program");
        if (repeat !== "yes") {
            alert("Thank you for using the program!")
            repeat = false;
            
         }
    

    
        }
