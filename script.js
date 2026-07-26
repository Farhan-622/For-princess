// ============================
// PAGE LOAD
// ============================

window.addEventListener("load", () => {

    document.body.style.opacity = "1";

});

// ============================
// STARS
// ============================

const stars = document.querySelector(".stars");

for(let i=0;i<250;i++){

    const star=document.createElement("span");

    star.className="star";

    const size=Math.random()*3+1;

    star.style.width=size+"px";
    star.style.height=size+"px";

    star.style.left=Math.random()*100+"%";
    star.style.top=Math.random()*100+"%";

    star.style.animationDuration=
    (2+Math.random()*5)+"s";

    star.style.animationDelay=
    (Math.random()*5)+"s";

    stars.appendChild(star);

}

// ============================
// PARTICLES
// ============================

const bg=document.querySelector(".background");

for(let i=0;i<35;i++){

    const p=document.createElement("span");

    p.className="particle";

    p.style.left=Math.random()*100+"%";

    p.style.animationDuration=
    (10+Math.random()*12)+"s";

    p.style.animationDelay=
    (Math.random()*10)+"s";

    bg.appendChild(p);

}

// ============================
// SHOOTING STARS
// ============================

function shootingStar(){

    const s=document.createElement("div");

    s.className="shooting-star";

    s.style.top=Math.random()*35+"%";

    s.style.left="-250px";

    document.body.appendChild(s);

    setTimeout(()=>{

        s.remove();

    },2500);

    const next=8000+Math.random()*12000;

    setTimeout(shootingStar,next);

}

shootingStar();

// ============================
// MOUSE GLOW
// ============================

const glow=document.createElement("div");

glow.className="cursor-glow";

document.body.appendChild(glow);

document.addEventListener("mousemove",(e)=>{

    glow.style.left=e.clientX+"px";

    glow.style.top=e.clientY+"px";

});

// ============================
// NAVBAR SCROLL
// ============================

const nav=document.querySelector("nav");

window.addEventListener("scroll",()=>{

    if(window.scrollY>60){

        nav.classList.add("scrolled");

    }

    else{

        nav.classList.remove("scrolled");

    }

});

// ============================
// MUSIC BUTTON
// ============================

const music=document.querySelector(".music-button");

let playing=false;

music.onclick=()=>{

    playing=!playing;

    music.classList.toggle("playing");

};

// ============================
// PARALLAX
// ============================

const moon=document.querySelector(".moon");

window.addEventListener("scroll",()=>{

    moon.style.transform=
    `translateY(${window.scrollY*.15}px)`;

});

// ============================
// PAGE TRANSITION
// ============================

document
.getElementById("beginJourney")
.addEventListener("click",()=>{

    document.body.style.opacity="0";

    setTimeout(()=>{

        location.href="thebeginning.html";

    },800);

});