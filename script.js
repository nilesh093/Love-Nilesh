// Screens
const screens = document.querySelectorAll(".screen");

function showPage(id){
    screens.forEach(s=>s.classList.remove("active"));
    document.getElementById(id).classList.add("active");
}

// Buttons
const startBtn=document.getElementById("startBtn");
const letterNext=document.getElementById("letterNext");
const dreamNext=document.getElementById("dreamNext");
const promiseNext=document.getElementById("promiseNext");
const galleryNext=document.getElementById("galleryNext");
const gameNext=document.getElementById("gameNext");
const proposalNext=document.getElementById("proposalNext");

// Messages
const letterMessage=`Dear Aastha,

Happy Girlfriend Day ❤️

Thank you for coming into my life.

No matter how far we are...

You are always inside my heart.

❤️ Yours,
Nilesh`;

const dreamMessage=`One day...

You will become a successful Lawyer.

I believe in you.

I will always support your dreams.

❤️`;

const promiseMessage=`I Promise...

To stay beside you.

To support every dream.

To make you smile.

To love you forever.

❤️`;

const proposalMessage=`No matter where life takes us...

I choose You.

Today.

Tomorrow.

Forever.

❤️`;

// Typing
function typeText(id,text,nextBtn){

    const box=document.getElementById(id);

    box.innerHTML="";

    if(nextBtn)
        nextBtn.style.display="none";

    let i=0;

    const timer=setInterval(()=>{

        box.innerHTML+=text.charAt(i);

        i++;

        if(i>=text.length){

            clearInterval(timer);

            if(nextBtn)
                nextBtn.style.display="inline-block";

        }

    },35);

}

// Start
startBtn.onclick=()=>{

    showPage("letter");

    typeText("letterText",letterMessage,letterNext);

};

// Letter
letterNext.onclick=()=>{

    showPage("dream");

    typeText("dreamText",dreamMessage,dreamNext);

};

// Dream
dreamNext.onclick=()=>{

    showPage("promise");

    typeText("promiseText",promiseMessage,promiseNext);

};

// Promise
promiseNext.onclick=()=>{

    showPage("gift");

};

// Gift → Gallery
galleryNext.onclick = () => {
    showPage("gallery");
};

// Gallery → Game
gameNext.onclick = () => {
    showPage("game");
};

// Game → Proposal
proposalNext.onclick = () => {
    showPage("proposal");
    typeText("proposalText", proposalMessage, endNext);
};

// Proposal → End
const endNext = document.getElementById("endNext");

endNext.onclick = () => {
    showPage("end");
};

// Back Buttons
document.getElementById("backHome").onclick = () => {
    showPage("welcome");
};

document.getElementById("backLetter").onclick = () => {
    showPage("letter");
};

document.getElementById("backDream").onclick = () => {
    showPage("dream");
};

document.getElementById("backPromise").onclick = () => {
    showPage("promise");
};

document.getElementById("backGift").onclick = () => {
    showPage("gift");
};

document.getElementById("backGallery").onclick = () => {
    showPage("gallery");
};

document.getElementById("backGame").onclick = () => {
    showPage("game");
};

// Floating Hearts
const hearts = document.getElementById("hearts");

function createHeart() {
    const heart = document.createElement("div");

    heart.className = "floating";
    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (20 + Math.random() * 20) + "px";
    heart.style.animationDuration = (4 + Math.random() * 4) + "s";

    hearts.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 8000);
}

setInterval(createHeart, 350);

// Game
let score = 0;

const heartGame = document.getElementById("heartGame");
const scoreBox = document.getElementById("score");

heartGame.onclick = () => {

    score++;

    scoreBox.innerHTML = "Score : " + score;

    heartGame.style.left = Math.random() * 80 + "%";
    heartGame.style.top = Math.random() * 75 + "%";
};

document.getElementById("restartBtn").onclick = () => {

    showPage("welcome");

    score = 0;

    scoreBox.innerHTML = "Score : 0";

};


const music = document.getElementById("bgMusic");

document.addEventListener("click", async () => {
    try {
        music.currentTime = 95;
        await music.play();
    } catch (e) {
        alert(e.message);
    }
}, { once: true });

function createHeart() {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.top = window.innerHeight + "px";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 4000);
}

setInterval(createHeart, 350);

for(let i=0;i<80;i++){
    const star=document.createElement("div");
    star.className="star";
    star.style.left=Math.random()*100+"vw";
    star.style.top=Math.random()*100+"vh";
    star.style.animationDelay=Math.random()*2+"s";
    document.body.appendChild(star);
}

function firework(){
    const fw=document.createElement("div");
    fw.className="firework";

    fw.style.left=Math.random()*window.innerWidth+"px";
    fw.style.top=Math.random()*window.innerHeight+"px";

    document.body.appendChild(fw);

    setTimeout(()=>{
        fw.remove();
    },1000);
}
