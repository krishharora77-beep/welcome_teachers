// =======================================================
// 1. ADD OR EDIT YOUR TEACHERS HERE
// =======================================================
const teachersData = {
    
    // The key (e.g. "SCI-7429") is the secret code. 
    // It will be converted to uppercase automatically during login.
    "PHY-3Y26": {
        name: "Mr. DEEPAK SAINI",
        subject: "Physics",
        themeColor: "#2E8B57", // Optional: Sea Green
        
        // NOTICE: We use backticks (`) here. 
        // This lets you press Enter and write paragraphs naturally!
        letter: `Dear Sir,

Three years is actually a long time.

Long enough for a teacher to become much more than just the person who walks into the classroom, teaches a chapter, checks our notebooks and leaves. And after having you as my Physics teacher and also as our class teacher, I think you have become one of those teachers whose presence has quietly become a part of our everyday school life.

If I had to describe you, I'd probably start with chill, friendly, patient and motivating. But there is one quality that, in my opinion, deserves a special mention:

You almost never say no.

At least, not directly. 😂

Your legendary technique is:

"Yes, of course you can... but..."

And then comes a condition so perfectly designed that the person who asked for the permission eventually goes,

"Nahi sir, I'm fine."

Honestly, I don't know whether that's a teaching technique, a negotiation skill, or some highly advanced application of Physics that hasn't made it into our syllabus yet. But somehow, it works every single time.

Jokes apart, one thing I've genuinely appreciated about you is that you have always been approachable. You can be our teacher without making us feel that we have to be afraid of approaching you. That matters more than it might seem.

And I think that's also something you've taught us beyond Physics: to be curious.

Physics is obviously about formulas, laws and concepts, but you've also made it feel like it is about asking, "What if?" and trying to understand why something happens instead of simply accepting that it does.

I think one of the funniest examples of that was something that happened very recently. A few of us had been discussing a rather... ambitious Physics idea, and today when you mentioned in front of the entire class what "today's minds" were thinking, we immediately knew exactly what you were talking about. 😂

I won't say that our idea was particularly sensible, but I will say that the fact that we were thinking about Physics outside the textbook was partly because of the kind of curiosity you encourage in us.

And perhaps that's one of the best things a Physics teacher can give a student: not just answers, but the habit of asking better questions.

After three years, there are obviously going to be countless small moments that I won't remember perfectly. The individual chapters, questions, homework and lectures will eventually blur together. But I'll remember the teacher who was patient when we needed things explained again, who could make the classroom lighter with his humour, who encouraged us to think, and who somehow managed to be both our teacher and someone we could comfortably talk to.

So, Sir, on Teacher's Day, I just want to say thank you.

Thank you for the three years of teaching, guidance, patience, conversations, corrections, encouragement, and of course, all those "Yes, of course... but..." moments.

I don't know where Physics will take me in the future, or how much of what we learn today I'll remember years from now.

But I'm pretty sure I'll remember the teacher who taught it to me.

Happy Teacher's Day, Sir. ❤️

— Krishnam Arora`,
        
        stats: {
            "Patience": 98,
            "Explanation": 89,
            "Motivation": 93,
            "Humour": 96
        },
        
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

    "MENT-2701": {
        name: "Mr. Priyanshu Mehrotra",
        subject: "All-Round Mentor",
        themeColor: "#E056FD", // Optional: Purple
        
        letter: `Dear Mr. Mehrotra Bro,

I joined your coaching in February because, honestly, Maths and I were not exactly best friends. 😭

But somehow, you managed to get me through the entire syllabus months before I expected. And the funniest part? Sometimes I genuinely wondered whether I had come to a Maths class or just my bro's place to hang out. 😂

You somehow have every personality possible. Sometimes you're stricter than a teacher should be, and sometimes you're more lenient than a bro should be.

But beyond Maths, you've helped me understand things about myself that I had never really understood before. You've listened, explained, suggested, and somehow always managed to understand what I was trying to say.

I'll also admit that I still haven't completely forgiven you for that "surprise" with the red ink. I genuinely thought something amazing was coming, and then I saw the paper. 💀

And yes, I'm sorry for giving up on that test. I know you were angry for a reason.

Thank you for being more than just my Maths teacher. You've made these months genuinely unforgettable.

Happy Teacher's Day, Sir. ❤️

— Krishhu Bro` ,
        
        stats: {
            "Patience": 100,
            "Explanation": 100,
            "Motivation": 100,
            "Humour": 100
        },
        
        resources: [
            {
                title: "Desmos Calculator",
                description: "A beautiful, free online graphing calculator.",
                url: "https://www.desmos.com/"
            }
        ],
        
        finalMessage: "Thank you for teaching me; THE CORRECT WAY OF LIVING LIFE..."
        special: "priyanshu-cart",

gifts: [
    {
        name: "Coffee Set",
        icon: "☕",
        description: "For all those classes, conversations and late-day BAK-BAK."
    },

    {
        name: "WILD STONE RED",
        icon: "🌊",
        description: "Because teaching is tiring enough. Might as well smell good while doing it."
    }

    // Add more gifts here later
]
    },
    
    // To add more teachers, copy a block above and paste it here with a comma between them!
};


// =======================================================
// 2. WEBSITE LOGIC (Do not change below this line)
// =======================================================

const loginBtn = document.getElementById('login-btn');
const codeInput = document.getElementById('secret-code');
const errorMsg = document.getElementById('error-msg');

const loginSection = document.getElementById('login-section');
const contentSection = document.getElementById('content-section');

function handleLogin() {
    const enteredCode = codeInput.value.trim().toUpperCase();

    if (enteredCode === "") {
        errorMsg.textContent = "Please enter your secret code first.";
        errorMsg.classList.remove('hidden');
        return;
    }

    if (teachersData[enteredCode]) {
        const teacher = teachersData[enteredCode];
        buildTeacherPage(teacher);
        
        loginSection.classList.add('hidden');
        loginSection.classList.remove('active');
        contentSection.classList.remove('hidden');
        contentSection.classList.add('active');
    } else {
        errorMsg.textContent = "Hmm... that doesn't seem to be your code. Try again!";
        errorMsg.classList.remove('hidden');
    }
}

function buildTeacherPage(teacher) {
    if (teacher.themeColor) {
        document.documentElement.style.setProperty('--primary', teacher.themeColor);
    }

    document.getElementById('teacher-name').textContent = `Welcome, ${teacher.name}!`;
    document.getElementById('teacher-subject').textContent = teacher.subject;
    document.getElementById('teacher-letter').textContent = teacher.letter;
    document.getElementById('teacher-final-msg').textContent = teacher.finalMessage;

    const statsContainer = document.getElementById('teacher-stats');
    statsContainer.innerHTML = '';
    
    for (const [statName, statValue] of Object.entries(teacher.stats)) {
        const statHtml = `
            <div class="stat-row">
                <div class="stat-label">
                    <span>${statName}</span>
                    <span>${statValue}%</span>
                </div>
                <div class="progress-bg">
                    <div class="progress-fill" style="width: ${statValue}%"></div>
                </div>
            </div>
        `;
        statsContainer.innerHTML += statHtml;
    }

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
    if (teacher.special === "priyanshu-cart") {
    createPriyanshuCart(teacher.gifts);
    }
}

loginBtn.addEventListener('click', handleLogin);

codeInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        handleLogin();
    }
});

// =======================================================
// PRIYANSHU SIR — SECRET GIFT CART
// =======================================================

function createPriyanshuCart(gifts = []) {

    // Prevent duplicate creation
    if (document.getElementById("priyanshu-cart-button")) {
        return;
    }

    // ---------------- CART BUTTON ----------------

    const cartButton = document.createElement("button");

    cartButton.id = "priyanshu-cart-button";
    cartButton.innerHTML = `
        🛒
        <span>1</span>
    `;

    document.body.appendChild(cartButton);


    // ---------------- STORE ----------------

    const store = document.createElement("div");

    store.id = "priyanshu-secret-store";

    store.innerHTML = `
        <div class="priyanshu-store-header">

            <button id="priyanshu-close-store">
                ←
            </button>

            <div class="priyanshu-store-title">

                <strong>
                    The Beta AI Feature
                </strong>

                <small>
                    Got something in your cart,
                    it thought u actually needed...
                </small>

            </div>

            <span class="priyanshu-store-cart">
                🛒
            </span>

        </div>


        <div class="priyanshu-store-body">

            <div class="priyanshu-ai-note">
                <span>🤖</span>

                <div>
                    <strong>
                        Beta AI Recommendation
                    </strong>

                    <p>
                        Based on absolutely questionable
                        calculations.
                    </p>
                </div>
            </div>


            <div id="priyanshu-gift-list"></div>


            <div class="priyanshu-checkout">

                <div>
                    <span>Items</span>
                    <strong>${gifts.length + 1}</strong>
                </div>

                <div>
                    <span>Delivery</span>
                    <strong>Check Out Yourself...</strong>
                </div>

                <hr>

                <div class="priyanshu-total">
                    <span>Total</span>
                    <strong>Just Some Love...🫶🏻</strong>
                </div>

                <button id="priyanshu-order-button">
                    PLACE ORDER →
                </button>

            </div>

        </div>
    `;

    document.body.appendChild(store);


    // ---------------- GIFT CARDS ----------------

    const giftList =
        document.getElementById("priyanshu-gift-list");


    gifts.forEach(gift => {

        const card = document.createElement("div");

        card.className = "priyanshu-gift-card";

        card.innerHTML = `
            <div class="priyanshu-gift-icon">
                ${gift.icon}
            </div>

            <div class="priyanshu-gift-info">

                <h3>
                    ${gift.name}
                </h3>

                <p>
                    ${gift.description}
                </p>

                <small>
                    ✓ Added by Beta AI
                </small>

            </div>
        `;

        giftList.appendChild(card);

    });


    // ---------------- FINAL SPECIAL ITEM ----------------

    const finalCard = document.createElement("div");

    finalCard.className =
        "priyanshu-gift-card priyanshu-final-gift";

    finalCard.innerHTML = `
        <div class="priyanshu-gift-icon">
            ⏳
        </div>

        <div class="priyanshu-gift-info">

            <h3>
                Some More Time
            </h3>

            <p>
                Some more time for teaching,
                after wasting time in
                <strong>BAK-BAK...</strong>
            </p>

            <small>
                Quantity: ∞
            </small>

        </div>
    `;

    giftList.appendChild(finalCard);


    // ---------------- BUTTON EVENTS ----------------

    cartButton.addEventListener("click", () => {

        store.style.display = "block";

        document.body.style.overflow = "hidden";

    });


    document
        .getElementById("priyanshu-close-store")
        .addEventListener("click", () => {

            store.style.display = "none";

            document.body.style.overflow = "";

        });


    document
        .getElementById("priyanshu-order-button")
        .addEventListener("click", showPriyanshuOrder);


    // ---------------- CSS ----------------

    const style = document.createElement("style");

    style.id = "priyanshu-cart-style";

    style.textContent = `

        #priyanshu-cart-button {

            position: fixed;

            right: 20px;
            bottom: 20px;

            width: 58px;
            height: 58px;

            border: none;
            border-radius: 50%;

            background: #111;
            color: white;

            font-size: 24px;

            display: flex;
            align-items: center;
            justify-content: center;

            cursor: pointer;

            z-index: 9998;

            box-shadow:
                0 8px 25px rgba(0,0,0,.25);

        }


        #priyanshu-cart-button span {

            position: absolute;

            top: -3px;
            right: -3px;

            width: 21px;
            height: 21px;

            background: #e53935;

            border-radius: 50%;

            font-size: 11px;

            display: flex;
            align-items: center;
            justify-content: center;

        }


        #priyanshu-secret-store {

            display: none;

            position: fixed;

            inset: 0;

            background: #f6f6f6;

            z-index: 9999;

            overflow-y: auto;

            font-family:
                Arial,
                sans-serif;

        }


        .priyanshu-store-header {

            position: sticky;

            top: 0;

            min-height: 65px;

            background: white;

            display: flex;

            align-items: center;

            gap: 12px;

            padding: 10px 16px;

            border-bottom:
                1px solid #ddd;

            z-index: 2;

        }


        .priyanshu-store-header button {

            border: none;

            background: none;

            font-size: 26px;

            cursor: pointer;

        }


        .priyanshu-store-title {

            display: flex;

            flex-direction: column;

            gap: 3px;

        }


        .priyanshu-store-title strong {

            font-size: 18px;

        }


        .priyanshu-store-title small {

            color: #777;

            font-size: 11px;

            max-width: 240px;

        }


        .priyanshu-store-cart {

            margin-left: auto;

            font-size: 22px;

        }


        .priyanshu-store-body {

            max-width: 650px;

            margin: auto;

            padding: 15px;

        }


        .priyanshu-ai-note {

            background: white;

            border-radius: 14px;

            padding: 15px;

            display: flex;

            gap: 12px;

            margin-bottom: 15px;

            box-shadow:
                0 2px 8px rgba(0,0,0,.05);

        }


        .priyanshu-ai-note > span {

            font-size: 27px;

        }


        .priyanshu-ai-note strong {

            font-size: 14px;

        }


        .priyanshu-ai-note p {

            margin: 4px 0 0;

            font-size: 12px;

            color: #777;

        }


        .priyanshu-gift-card {

            background: white;

            border-radius: 14px;

            padding: 15px;

            margin-bottom: 12px;

            display: flex;

            gap: 14px;

            box-shadow:
                0 2px 8px rgba(0,0,0,.05);

        }


        .priyanshu-gift-icon {

            width: 62px;
            height: 62px;

            flex-shrink: 0;

            border-radius: 11px;

            background: #eeeeee;

            display: flex;

            align-items: center;
            justify-content: center;

            font-size: 28px;

        }


        .priyanshu-gift-info {

            flex: 1;

        }


        .priyanshu-gift-info h3 {

            margin: 0 0 6px;

            font-size: 16px;

        }


        .priyanshu-gift-info p {

            margin: 0;

            color: #666;

            font-size: 13px;

            line-height: 1.45;

        }


        .priyanshu-gift-info small {

            display: block;

            margin-top: 9px;

            color: #16803c;

            font-size: 11px;

        }


        .priyanshu-final-gift {

            background: #fffdf5;

            border: 1px dashed #aaa;

        }


        .priyanshu-checkout {

            background: white;

            border-radius: 14px;

            padding: 18px;

            margin-top: 18px;

            margin-bottom: 30px;

        }


        .priyanshu-checkout > div {

            display: flex;

            justify-content: space-between;

            margin-bottom: 12px;

            font-size: 13px;

        }


        .priyanshu-checkout hr {

            border: none;

            border-top:
                1px solid #ddd;

            margin: 14px 0;

        }


        .priyanshu-checkout .priyanshu-total {

            font-size: 17px;

            font-weight: bold;

        }


        #priyanshu-order-button {

            width: 100%;

            padding: 15px;

            margin-top: 10px;

            border: none;

            border-radius: 10px;

            background: #111;

            color: white;

            font-weight: bold;

            cursor: pointer;

        }


        @media (max-width: 500px) {

            .priyanshu-store-body {

                padding: 12px;

            }

            .priyanshu-gift-card {

                padding: 13px;

            }

            .priyanshu-gift-icon {

                width: 56px;
                height: 56px;

            }

        }

    `;

    document.head.appendChild(style);
}


// =======================================================
// PRIYANSHU — ORDER CONFIRMATION
// =======================================================

function showPriyanshuOrder() {

    const popup = document.createElement("div");

    popup.id = "priyanshu-order-popup";

    popup.innerHTML = `

        <div>

            <div style="font-size:45px;">
                📦
            </div>

            <h2>
                Order Confirmed!
            </h2>

            <p>
                Your order has been successfully placed.
            </p>

            <p>
                Please check your surroundings.<br>
                Your delivery may already be on its way. 👀
            </p>

            <button id="close-priyanshu-order">
                Okay, Sir 😌
            </button>

        </div>

    `;


    const style = document.createElement("style");

    style.textContent = `

        #priyanshu-order-popup {

            position: fixed;

            inset: 0;

            background:
                rgba(0,0,0,.55);

            z-index: 10000;

            display: flex;

            align-items: center;

            justify-content: center;

            padding: 20px;

        }


        #priyanshu-order-popup > div {

            background: white;

            width: 100%;

            max-width: 350px;

            padding: 30px 22px;

            border-radius: 20px;

            text-align: center;

        }


        #priyanshu-order-popup h2 {

            margin: 12px 0 8px;

        }


        #priyanshu-order-popup p {

            color: #555;

            font-size: 14px;

            line-height: 1.5;

        }


        #close-priyanshu-order {

            width: 100%;

            padding: 13px;

            margin-top: 10px;

            border: none;

            border-radius: 9px;

            background: #111;

            color: white;

            cursor: pointer;

        }

    `;

    document.head.appendChild(style);


    document
        .getElementById("close-priyanshu-order")
        .addEventListener("click", () => {

            popup.remove();
            style.remove();

        });


    document.body.appendChild(popup);

}
