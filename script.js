// =======================================================
// 1. ADD OR EDIT YOUR TEACHERS HERE
// =======================================================
const teachersData = {
    
    // The key (e.g. "SCI-7429") is the secret code. 
    // It will be converted to uppercase automatically during login, so case doesn't matter.
    "PHY-3Y26": {
        name: "Mrs. Deepak Saini",
        subject: "Physics",
        themeColor: "#2E8B57", // Optional: Sea Green
        
        // Write the letter here. Use <br><br> for new paragraphs.
        letter: "## Dear Sir,

Three years is actually a long time.

Long enough for a teacher to become much more than just the person who walks into the classroom, teaches a chapter, checks our notebooks and leaves. And after having you as my Physics teacher—and also as our class teacher—I think you have become one of those teachers whose presence has quietly become a part of our everyday school life.

If I had to describe you, I'd probably start with **chill, friendly, patient and motivating**. But there is one quality that, in my opinion, deserves a special mention:

**You almost never say no.**

At least, not directly. 😂

Your legendary technique is:

*"Yes, of course you can... but..."*

And then comes a condition so perfectly designed that the person who asked for the permission eventually goes,

*"Nahi sir, I'm fine."*

Honestly, I don't know whether that's a teaching technique, a negotiation skill, or some highly advanced application of Physics that hasn't made it into our syllabus yet. But somehow, it works every single time.

Jokes apart, one thing I've genuinely appreciated about you is that you have always been approachable. You can be our teacher without making us feel that we have to be afraid of approaching you. That matters more than it might seem.

And I think that's also something you've taught us beyond Physics: **to be curious.**

Physics is obviously about formulas, laws and concepts, but you've also made it feel like it is about asking, *"What if...?"* and trying to understand why something happens instead of simply accepting that it does.

I think one of the funniest examples of that was something that happened very recently. A few of us had been discussing a rather... ambitious Physics idea, and today when you mentioned in front of the entire class what "today's minds" were thinking, we immediately knew exactly what you were talking about. 😂

I won't say that our idea was particularly sensible—or particularly safe—but I will say that the fact that we were thinking about Physics outside the textbook was partly because of the kind of curiosity you encourage in us.

And perhaps that's one of the best things a Physics teacher can give a student: **not just answers, but the habit of asking better questions.**

After three years, there are obviously going to be countless small moments that I won't remember perfectly—the individual chapters, questions, homework and lectures will eventually blur together. But I'll remember the teacher who was patient when we needed things explained again, who could make the classroom lighter with his humour, who encouraged us to think, and who somehow managed to be both our teacher and someone we could comfortably talk to.

So, Sir, on Teacher's Day, I just want to say **thank you**.

Thank you for the three years of teaching, guidance, patience, conversations, corrections, encouragement—and, of course, all those *"Yes, of course... but..."* moments.

I don't know where Physics will take me in the future, or how much of what we learn today I'll remember years from now.

But I'm pretty sure I'll remember **the teacher who taught it to me.**

### Happy Teacher's Day, Sir. ❤️

Krishnam Arora
"
        // Keep the numbers out of 100
        stats: {
            "Patience": 98,
            "Explanation": 89,
            "Motivation": 96,
            "Humour": 97
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
        name: "Mr. Vikas Tiwari",
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
