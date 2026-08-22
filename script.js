// =======================================================
// 1. ADD OR EDIT YOUR TEACHERS HERE
// =======================================================
const teachersData = {
    
    // The key (e.g. "SCI-7429") is the secret code. 
    // It will be converted to uppercase automatically during login, so case doesn't matter.
    "SCI-7429": {
        name: "Mrs. Sharma",
        subject: "Science",
        themeColor: "#2E8B57", // Optional: Sea Green
        
        // Write the letter here. Use <br><br> for new paragraphs.
        letter: "Dear Mrs. Sharma,\n\nThank you for making Science so much fun! We love your experiments and the way you explain difficult concepts.\n\nYou always make sure everyone understands before moving on. Happy Teacher's Day!",
        
        // Keep the numbers out of 100
        stats: {
            "Patience": 98,
            "Explanation": 100,
            "Motivation": 96,
            "Humour": 91
        },
        
        // Add as many links as you want
        resources: [
            {
                title: "PhET Interactive Simulations",
                description: "Amazing interactive science simulations.",
                url: "https://phet.colorado.edu/"
            },
            {
                title: "National Geographic Education",
                description: "Great classroom resources and videos.",
                url: "https://www.nationalgeographic.org/education/"
            }
        ],
        
        finalMessage: "Thank you for sparking our curiosity!"
    },

    "MAT-3816": {
        name: "Mr. Verma",
        subject: "Mathematics",
        themeColor: "#E056FD", // Optional: Purple
        
        letter: "Dear Mr. Verma,\n\nMath used to be scary, but your classes changed that. Thank you for your endless patience when we don't understand an equation the first time.\n\nHappy Teacher's Day!",
        
        stats: {
            "Patience": 96,
            "Explanation": 99,
            "Motivation": 94,
            "Humour": 88
        },
        
        resources: [
            {
                title: "Desmos Calculator",
                description: "A beautiful, free online graphing calculator.",
                url: "https://www.desmos.com/"
            }
        ],
        
        finalMessage: "Thank you for making maths logical and fun."
    }
    
    // Add more teachers below...
    // "ENG-1234": { ... }
};


// =======================================================
// 2. WEBSITE LOGIC (You don't need to change this)
// =======================================================

// Get elements from the HTML
const loginBtn = document.getElementById('login-btn');
const codeInput = document.getElementById('secret-code');
const errorMsg = document.getElementById('error-msg');

const loginSection = document.getElementById('login-section');
const contentSection = document.getElementById('content-section');

// Function to handle login
function handleLogin() {
    // Get what the user typed, remove extra spaces, and make it uppercase
    const enteredCode = codeInput.value.trim().toUpperCase();

    // Check if input is empty
    if (enteredCode === "") {
        errorMsg.textContent = "Please enter your secret code first.";
        errorMsg.classList.remove('hidden');
        return;
    }

    // Check if the code exists in our database
    if (teachersData[enteredCode]) {
        const teacher = teachersData[enteredCode];
        buildTeacherPage(teacher);
        
        // Hide login, show content
        loginSection.classList.add('hidden');
        loginSection.classList.remove('active');
        contentSection.classList.remove('hidden');
        contentSection.classList.add('active');
    } else {
        // Code is wrong
        errorMsg.textContent = "Hmm... that doesn't seem to be your code. Try again!";
        errorMsg.classList.remove('hidden');
    }
}

// Function to fill the HTML with the specific teacher's data
function buildTeacherPage(teacher) {
    
    // 1. Set Theme Color (if they have one, otherwise keep default)
    if (teacher.themeColor) {
        document.documentElement.style.setProperty('--primary', teacher.themeColor);
    }

    // 2. Set Basic Info
    document.getElementById('teacher-name').textContent = `Welcome, ${teacher.name}!`;
    document.getElementById('teacher-subject').textContent = teacher.subject;
    document.getElementById('teacher-letter').textContent = teacher.letter;
    document.getElementById('teacher-final-msg').textContent = teacher.finalMessage;

    // 3. Build Statistics Bars
    const statsContainer = document.getElementById('teacher-stats');
    statsContainer.innerHTML = ''; // Clear out any old data
    
    for (const [statName, statValue] of Object.entries(teacher.stats)) {
        const statHtml = `
            <div class="stat-row">
                <div class="stat-label">
                    <span>${statName}</span>
                    <span>${statValue}%</span>
                </div>
                <div class="progress-bg">
                    <!-- Inline style sets the width for the animation -->
                    <div class="progress-fill" style="width: ${statValue}%"></div>
                </div>
            </div>
        `;
        statsContainer.innerHTML += statHtml;
    }

    // 4. Build Useful Links / Resources
    const resourcesContainer = document.getElementById('teacher-resources');
    resourcesContainer.innerHTML = ''; 
    
    teacher.resources.forEach(resource => {
        const resourceHtml = `
            <div class="resource-item">
                <div class="resource-title">${resource.title}</div>
                <div class="resource-desc">${resource.description}</div>
                <a href="${resource.url}" target="_blank" class="btn-link">OPEN</a>
            </div>
        `;
        resourcesContainer.innerHTML += resourceHtml;
    });
}

// =======================================================
// 3. EVENT LISTENERS
// =======================================================

// When the button is clicked
loginBtn.addEventListener('click', handleLogin);

// Also allow pressing "Enter" on the keyboard
codeInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        handleLogin();
    }
});
