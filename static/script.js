
var global_data = {
    grade: "",
    subject: "",
    difficulty: ""
}

function goToSelection(role) {
    // Hide the welcome screen
    document.getElementById('welcomeScreen').style.display = 'none';

    // Show the selection screen
    document.getElementById('selectionScreen').style.display = 'block';

    // Change the selection screen heading based on the role
    var headingText = role === 'student' ? "Student - Select Your Preferences" : "Educator - Select Your Preferences";
    document.getElementById('selectionHeading').innerText = headingText;
}


function submitSelection() {
    var grade = document.getElementById('gradeLevel').value;
    var subject = document.getElementById('subject').value;
    var difficulty = document.getElementById('difficultyLevel').value;

    // Log the selections to the console
    console.log('Grade:', grade, 'Subject:', subject, 'Difficulty:', difficulty);

    global_data.difficulty = difficulty
    global_data.subject = subject
    global_data.grade = grade

    localStorage.setItem("global_data_json", JSON.stringify(global_data));

    let global_data2 = JSON.parse(localStorage.getItem("global_data_json"))

    console.log("global_data2 = " + global_data2);

    // Check if all selections are made
    if (grade !== "" && subject !== "" && difficulty !== "") {
        // All selections made, redirect to index.html
        window.location.href = '/app';
    } else {
        // Not all selections made, alert the user
        alert('Please select all options before submitting.');
    }
}

function goBack() {
    document.getElementById('gradeLevel').selectedIndex = 0;
    document.getElementById('subject').selectedIndex = 0;
    document.getElementById('difficultyLevel').selectedIndex = 0;
    // Show the welcome screen
    document.getElementById('welcomeScreen').style.display = 'block';

    // Hide the selection screen
    document.getElementById('selectionScreen').style.display = 'none';
}

window.addEventListener('pageshow', function (event) {
    if (event.persisted || (window.performance && window.performance.navigation.type == 2)) {
        document.getElementById('gradeLevel').selectedIndex = 0;
        document.getElementById('subject').selectedIndex = 0;
        document.getElementById('difficultyLevel').selectedIndex = 0;
    }
});
