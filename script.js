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
        
        finalMessage: "Thank you for teaching me; THE CORRECT WAY OF LIVING LIFE...",
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

"GEO-2908": {
        name: "Mrs. Himanshi Dubey",
        subject: "Geography",
        themeColor: "#2E8B57", // Optional: Sea Green
        
        // Write the letter here. Use <br><br> for new paragraphs.
        letter: `Dear Ma'am,

Two years of Geography, and somewhere along the way, our teacher-student relationship became a little more comfortable than usual.

You've always had a friendly way of interacting with students, while still knowing exactly where to draw the line. I think that's something I genuinely appreciate about you—you can be chill without ever losing the respect that a teacher deserves.

I've always tried to keep the same balance with you: comfortable enough to joke around and talk freely, but respectful enough to know when it's time to simply listen.

What I especially like is that you make it easy to approach you. There's never this feeling that every conversation has to be extremely formal or serious. Whether it's something related to class or just a random little conversation, you listen with the same patience and understanding. That simple comfort matters more than it seems, because it makes students feel like they can actually be themselves around you.

You may not realise it, but these little things are what make a teacher memorable.

Thank you for the kindness, understanding, and the comfortable atmosphere you've created over these two years.

Happy Teacher's Day, Ma'am. ❤️

— Krishnam Arora`,
        
        // Keep the numbers out of 100
        stats: {
            "Patience": 98,
            "Explanation": 95,
            "Motivation": 96,
            "Humour": 91
        },
        
        // Add as many links as you want
        resources: [
            {
                title: "Environment Over the Globe",
                description: "Amazing interactive over-the-globe simulations.",
                url: "https://earth.nullschool.net"
            },
            {
                title: "Soil Over the World",
                description: "Know About Soil Over The Globe.",
                url: "https://soilgrids.org"
            }
        ],
        
        finalMessage: "Thank you for sparking our curiosity!"
    },

    "EXPH-9999": {
        name: "Mr. Ashish Shukla",
        subject: "Ex-Physics",
        themeColor: "#2E8B57", // Optional: Sea Green
        
        // NOTICE: We use backticks (`) here. 
        // This lets you press Enter and write paragraphs naturally!
        letter: `Dear Sir,

Some teachers teach you a subject.

Some teachers make you good at it.

And then there are a few teachers who quietly change the way you think about learning itself.

You are one of those teachers.

You taught us Physics in Classes 6, 7 and 8, and at the time, I don't think most of us fully understood just how unusual that was.

We were learning things that we assumed were simply part of being in your class. Newton's three laws? We knew them in Class 7. Concepts that many students encounter much later were already being discussed, explained and drilled into our heads while we were still in middle school.

It was only later, when we reached those topics again, that I realised:

**"Wait... didn't Sir teach us this years ago?"**

And suddenly, a lot of things made sense.

But there was another part of your teaching that I understood much later.

Back then, I thought I was pretty good at Science. Actually, I *was* quite good at it. And naturally, like many students who discover that they're good at something, I sometimes wanted everyone else to know it too.

Especially you.

And somehow, every time I tried to demonstrate how much I knew, you had this incredible ability to make me feel like I had just said absolutely nothing.

No dramatic speech.

No big confrontation.

Just that feeling of:

**"Okay. Maybe sit down. You still have a lot to learn."**

At the time, I didn't understand it.

Neither did many of the other students.

We wondered what you were doing. Why were you always pushing us further? Why weren't you impressed when we thought we had already figured something out?

Now, looking back, I think I finally understand.

You weren't trying to prove that we didn't know enough.

You were showing us that **knowing something is not the same as knowing everything.**

And honestly, Sir, I think I needed that lesson.

Because curiosity is wonderful, but the moment curiosity turns into *"I already know this,"* learning stops.

You didn't let that happen.

You kept making us feel like there was another layer, another question, another concept waiting beyond whatever we thought we had mastered.

And perhaps that's why, even after three years, your teaching still stays with me.

There are also a few things about you that are simply unforgettable.

For example, your walking speed.

Sir, you didn't walk.

You **travelled.**

😂

I genuinely don't know how someone can walk that fast while looking completely normal. Running somehow seemed slower than your walking pace.

And then there was the legendary all-white outfit—the kind of simple, composed look that somehow made you look like you had stepped straight out of a Physics textbook written by a very stylish author.

But jokes aside, when I think about those three years now, I feel a kind of gratitude that I probably didn't have the maturity to express back then.

You taught us Physics far beyond what we expected.

You challenged our thinking.

You didn't flatter us just because we knew a little more than others.

And perhaps most importantly, you taught us that **being knowledgeable is not a reason to stop being a student.**

I think that lesson has stayed with me more than any individual formula.

And there is one slightly embarrassing thing I have to admit.

I walk very fast now too.

I don't know whether that's because of you, but considering the evidence...

**I'm blaming you.** 😂

So, Sir, thank you.

Thank you for teaching us more than we thought we were ready to learn.

Thank you for challenging the version of me who thought he already knew enough.

And thank you for giving me a lesson that I understand much better today than I did when you first taught it:

**There is always more to learn.**

I may not have appreciated that lesson completely at the time.

But today, I genuinely do.

And I think that's one of the clearest signs that a teacher has made a lasting difference.

Happy Teacher's Day, Sir.

-Krishnam Arora`,
        
        stats: {
            "Patience": 31,
            "Explanation": 98,
            "Motivation": 76,
            "Humour": 61
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
    
    "CHEM-4Y26": {
        name: "Mrs. Renu Srivastava",
        subject: "Chemistry",
        themeColor: "#2E8B57", // Optional: Sea Green
        
        // NOTICE: We use backticks (`) here. 
        // This lets you press Enter and write paragraphs naturally!
        letter: `Dear Ma'am,

Five years of Chemistry is quite a long time.

And when I look back at these five years, I realise that our journey has been a little different from the usual teacher-student story.

When you first taught me, I don't think you saw me as anything particularly different. I was just another student in your class. Even though I had already developed quite a bit of curiosity and knowledge for my age, you didn't really know that side of me yet.

Then, somewhere along the way, you discovered it.

You started noticing how much I liked learning things beyond what was simply written in the textbook. And slowly, I went from being just another student to someone you trusted and appreciated. Becoming one of your favourites was something I genuinely valued.

But then came the part where I let my own overconfidence get in the way.

I made a mistake. I bunked your period, and in doing so, I damaged the image you had built of me. Looking back, I understand why that mattered. Sometimes one careless decision can make someone question all the good things they had believed about you before.

And honestly, one consequence of that still stays with me.

The Science Exhibition.

I had really wanted to participate, and when you declined my request, it hurt. Especially because I knew that my own actions had played a part in why you didn't trust me with that opportunity.

I won't pretend that I wasn't disappointed.

But with time, I think I understood something more important: being capable isn't enough. Knowledge can make you stand out, but your actions decide whether people can trust you with responsibility.

That was probably one of the most valuable lessons I've received from you, one that had absolutely nothing to do with Chemistry.

And perhaps the part I'm happiest about is that the story didn't end there.

Over time, I grew again in your eyes. I worked my way back from the version of me you had been disappointed in, and today, you sometimes ask me,

"What new information about the world have you learned today?"

Honestly, Ma'am, I don't think you realise how much I like being asked that.

Because it's not really a question about how many facts I know.

It feels like you're asking me to keep being curious.

And that is something I will always appreciate about you.

You saw my curiosity when it was still something I was developing. You saw my overconfidence when I allowed it to get the better of me. You saw me make a mistake. And, eventually, you saw me grow beyond it.

I think that makes your place in my school journey different from that of many other teachers.

You didn't just teach me Chemistry.

In your own way, you taught me that knowledge without humility can become overconfidence, mistakes don't have to define you forever, and earning someone's trust back can be just as meaningful as earning it in the first place.

Maybe I didn't get the Science Exhibition opportunity I once dreamed about.

But I think I gained something from that experience that I will carry much further than one exhibition ever could.

So, Ma'am, thank you.

Thank you for noticing my curiosity.

Thank you for challenging me when I needed it.

Thank you for holding me accountable when I was wrong.

And most importantly, thank you for giving me the opportunity to grow back into the student you could believe in again.

And if you ask me tomorrow,

"What new information about the world have you learned today?"

I hope I always have something new to tell you.

Happy Teacher's Day, Ma'am.

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
