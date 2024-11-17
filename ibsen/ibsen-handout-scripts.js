function openTab(evt, tabName) {
    console.log(`Attempting to open tab: ${tabName}`);
    const tabcontent = document.getElementsByClassName("tabcontent");
    console.log(`Found ${tabcontent.length} tabcontent elements.`);

    // Hide all tabs
    for (let i = 0; i < tabcontent.length; i++) {
        console.log(`Hiding tabcontent: ${tabcontent[i].id}`);
        tabcontent[i].style.display = "none";
    }

    const tablinks = document.getElementsByClassName("tablinks");
    console.log(`Found ${tablinks.length} tablinks.`);

    // Remove 'active' class from all tab buttons
    for (let i = 0; i < tablinks.length; i++) {
        console.log(`Removing active class from tablink: ${tablinks[i].textContent}`);
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the target tab
    const targetTab = document.getElementById(tabName);
    if (targetTab) {
        console.log(`Showing tab: ${tabName}`);
        targetTab.style.display = "block";
        evt.currentTarget.className += " active";
    } else {
        console.error(`Tab with id '${tabName}' not found.`);
    }
}

// Default open tab
const defaultTab = document.getElementById("defaultOpen");
if (defaultTab) {
    console.log("Clicking default tab to open it.");
    defaultTab.click();
} else {
    console.error("Default tab not found. Ensure an element has id 'defaultOpen'.");
}


function toggleFlashcard(element) {
    const answer = element.querySelector('.flashcard-answer');
    if (answer) {
        const isCurrentlyVisible = answer.style.display === 'block';
        console.log(`Toggling flashcard. Current state: ${isCurrentlyVisible ? "visible" : "hidden"}`);
        answer.style.display = isCurrentlyVisible ? 'none' : 'block';
    } else {
        console.error("Flashcard answer not found.");
    }
}

function showMapInfo(location) {
    console.log(`Showing map info for location: ${location}`);
    const info = document.getElementById('mapInfo');
    const content = {
        norway: 'Born in Skien, Norway (1828)',
        germany: 'Lived in Germany (1868-1891)',
        italy: 'Lived in Italy (1866-1868)'
    };
    if (info && content[location]) {
        info.innerHTML = content[location];
        info.style.display = 'block';
        console.log(`Displayed map info: ${content[location]}`);
    } else {
        console.error(`Map info or content for location '${location}' not found.`);
    }
}

function verifyAnswer(element, isCorrect) {
    console.log(`Answer selected. Is correct: ${isCorrect}`);
    if (element.classList.contains('correct') || element.classList.contains('incorrect')) {
        console.warn("Answer already selected. Skipping.");
        return;
    }

    element.className += isCorrect ? ' correct' : ' incorrect';
    calculateProgress();
}

function calculateProgress() {
    const total = document.getElementsByClassName('quiz-option').length;
    const answered = document.getElementsByClassName('correct').length + document.getElementsByClassName('incorrect').length;
    const progress = Math.round((answered / total) * 100);

    console.log(`Progress: ${answered}/${total} answered (${progress}%).`);

    const progressBar = document.getElementById('quiz-progress');
    if (progressBar) {
        progressBar.style.width = progress + '%';
        progressBar.textContent = progress + '%';
        console.log("Progress bar updated.");
    } else {
        console.error("Progress bar element not found.");
    }
}
function drag(event) {
    console.log(`Dragging element with id: ${event.target.id}`);
    event.dataTransfer.setData("text", event.target.id);
}


// Touch-friendly drag and drop
const draggables = document.getElementsByClassName('draggable');
console.log(`Found ${draggables.length} draggable elements.`);
for (let i = 0; i < draggables.length; i++) {
    draggables[i].addEventListener('touchstart', function (e) {
        e.preventDefault();
        console.log("Touch start on draggable element.");
        this.classList.add('dragging');
});

draggables[i].addEventListener('touchend', function (e) {
    e.preventDefault();
    console.log("Touch end on draggable element.");
    this.classList.remove('dragging');
    const dropZone = document.getElementById('dropZone1');
    if (!dropZone) {
        console.error("Drop zone not found.");
        return;
    }

    const rect = dropZone.getBoundingClientRect();
    const touch = e.changedTouches[0];
    if (touch.clientY > rect.top && touch.clientY < rect.bottom && touch.clientX > rect.left && touch.clientX < rect.right) {
            console.log("Dropping element into drop zone.");
            dropZone.appendChild(this);
            calculateProgress();
        } else {
            console.warn("Element not dropped in drop zone.");
        }
    });
}
function drop(event) {
    event.preventDefault();
    const data = event.dataTransfer.getData("text");
    const draggable = document.getElementById(data);
    if (draggable) {
        console.log(`Dropped element: ${data}`);
        event.target.appendChild(draggable);
    } else {
        console.error(`Draggable element with id '${data}' not found.`);
    }
}

function allowDrop(event) {
    event.preventDefault();
}

// function openTab(evt, tabName) {
//     var tabcontent = document.getElementsByClassName("tabcontent");
//     for (var i = 0; i < tabcontent.length; i++) {
//         tabcontent[i].style.display = "none";
//     }
    
//     var tablinks = document.getElementsByClassName("tablinks");
//     for (var i = 0; i < tablinks.length; i++) {
//         tablinks[i].className = tablinks[i].className.replace(" active", "");
//     }
    
//     document.getElementById(tabName).style.display = "block";
//     evt.currentTarget.className += " active";
// }

// document.getElementById("defaultOpen").click();

// function toggleFlashcard(element) {
//     var answer = element.querySelector('.flashcard-answer');
//     answer.style.display = answer.style.display === 'none' ? 'block' : 'none';
// }

// function showMapInfo(location) {
//     var info = document.getElementById('mapInfo');
//     var content = {
//         'norway': 'Born in Skien, Norway (1828)',
//         'germany': 'Lived in Germany (1868-1891)',
//         'italy': 'Lived in Italy (1866-1868)'
//     };
//     info.innerHTML = content[location];
//     info.style.display = 'block';
// }


// function checkAnswer(element, isCorrect) {
//     if (element.classList.contains('correct') || element.classList.contains('incorrect')) {
//         return; // Prevent re-answering
//     }
//     element.className += isCorrect ? ' correct' : ' incorrect';
//     updateProgress();
// }

// function updateProgress() {
//     const totalQuestions = document.querySelectorAll('.quiz-container .quiz-option').length;
//     const answeredQuestions = document.querySelectorAll('.quiz-option.correct, .quiz-option.incorrect').length;
//     const progressPercent = Math.round((answeredQuestions / totalQuestions) * 100);
//     const progressBar = document.getElementById('quiz-progress');
//     progressBar.style.width = progressPercent + '%';
//     progressBar.textContent = progressPercent + '%';
// }

//     element.className = 'quiz-option ' + (isCorrect ? 'correct' : 'incorrect');
//     updateProgress();
// }

// function updateProgress() {
//     var total = document.getElementsByClassName('quiz-option').length;
//     var answered = document.getElementsByClassName('correct').length + 
//                   document.getElementsByClassName('incorrect').length;
//     var progress = Math.round((answered / total) * 100);
//     document.getElementById('quiz-progress').style.width = progress + '%';
//     document.getElementById('quiz-progress').innerHTML = progress + '%';
// }

// // Touch-friendly drag and drop
// var draggables = document.getElementsByClassName('draggable');
// for (var i = 0; i < draggables.length; i++) {
//     draggables[i].addEventListener('touchstart', function(e) {
//         e.preventDefault();
//         this.classList.add('dragging');
//     });
    
//     draggables[i].addEventListener('touchend', function(e) {
//         e.preventDefault();
//         this.classList.remove('dragging');
//         var dropZone = document.getElementById('dropZone1');
//         var rect = dropZone.getBoundingClientRect();
//         var touch = e.changedTouches[0];
//         if (touch.clientY > rect.top && touch.clientY < rect.bottom &&
//             touch.clientX > rect.left && touch.clientX < rect.right) {
//             dropZone.appendChild(this);
//             updateProgress();
//         }
//     });
// }