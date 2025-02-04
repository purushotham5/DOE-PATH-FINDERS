let solutions = {
    "solution1": "Solution 1: All criteria met.",
    "solution2": "Solution 2: Invalid DOE and mismatched information.",
    "solution3": "Solution 3: Business doesn't recognize reviewer, invalid DOE, and mismatched info.",
    "solution4": "Solution 4: Business doesn't recognize reviewer and mismatched info.",
    "solution5": "Solution 5: Only valid DOE confirmed, info mismatch detected."
};

// Mapping all input combinations to the 5 solutions
let solutionMapping = {
    "yes-yes-yes": "solution1",  
    "yes-no-no": "solution2",    
    "no-no-no": "solution3",     
    "no-yes-no": "solution4",    
    "yes-yes-no": "solution5",   
    "no-no-yes": "solution3",    
    "yes-no-yes": "solution2",   
    "no-yes-yes": "solution4"    
};

function getSolution() {
    let q1 = document.querySelector('input[name="q1"]:checked');
    let q2 = document.querySelector('input[name="q2"]:checked');
    let q3 = document.querySelector('input[name="q3"]:checked');

    if (!q1 || !q2 || !q3) {
        alert("Please answer all questions.");
        return;
    }

    let key = `${q1.value}-${q2.value}-${q3.value}`;
    
    let solutionKey = solutionMapping[key];
    let solutionText = solutions[solutionKey];

    let solutionBox = document.getElementById("solution-box");
    let solutionDisplay = document.getElementById("solution");

    solutionDisplay.innerText = solutionText;
    solutionBox.style.display = "block";
}

// Highlight selected option
function highlight(element) {
    let parentDiv = element.closest(".options");
    let labels = parentDiv.querySelectorAll(".option-label");

    labels.forEach(label => {
        label.classList.remove("selected-yes", "selected-no");
    });

    let selectedLabel = element.parentElement;
    if (element.value === "yes") {
        selectedLabel.classList.add("selected-yes");
    } else {
        selectedLabel.classList.add("selected-no");
    }
}
