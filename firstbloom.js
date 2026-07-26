// ======================================================
// SCROLL REVEAL
// ======================================================

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll(){

    const trigger = window.innerHeight * 0.85;

    reveals.forEach(item=>{

        const top = item.getBoundingClientRect().top;

        if(top < trigger){

            item.classList.add("show");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);

window.addEventListener("load", revealOnScroll);







// ======================================================
// FALLING PETALS
// ======================================================

const petalsContainer = document.querySelector(".petals");

function createPetal(){

    const petal = document.createElement("div");

    petal.className = "petal";

    petal.innerHTML = "🌸";

    petal.style.left = Math.random()*100 + "%";

    petal.style.animationDuration = (6 + Math.random()*6) + "s";

    petal.style.opacity = .4 + Math.random()*.5;

    petal.style.fontSize = (18 + Math.random()*18) + "px";

    petal.style.transform = `rotate(${Math.random()*360}deg)`;

    petalsContainer.appendChild(petal);

    setTimeout(()=>{

        petal.remove();

    },12000);

}

setInterval(createPetal,700);







// ======================================================
// PHOTO HOVER PARALLAX
// ======================================================

document.querySelectorAll(".photo img").forEach(photo=>{

    photo.addEventListener("mousemove",(e)=>{

        const rect = photo.getBoundingClientRect();

        const x = (e.clientX - rect.left) / rect.width - .5;

        const y = (e.clientY - rect.top) / rect.height - .5;

        photo.style.transform =

        `perspective(800px)
        rotateY(${x*6}deg)
        rotateX(${-y*6}deg)
        scale(1.04)`;

    });

    photo.addEventListener("mouseleave",()=>{

        photo.style.transform = "";

    });

});







// ======================================================
// FLOWER CLICK
// ======================================================

const flower = document.querySelector(".flower");

flower.addEventListener("click",()=>{

    flower.animate([

        {

            transform:"scale(1)"

        },

        {

            transform:"scale(1.25) rotate(12deg)"

        },

        {

            transform:"scale(1)"

        }

    ],{

        duration:900,

        easing:"ease"

    });

});







// ======================================================
// SMOOTH PAGE TRANSITION
// ======================================================

function changePage(page){

    document.body.style.opacity = "0";

    document.body.style.transition = ".8s";

    setTimeout(()=>{

        window.location.href = page;

    },800);

}







// ======================================================
// NAVIGATION
// ======================================================

document.getElementById("back")

.addEventListener("click",()=>{

    changePage("thebeginning.html");

});



document.getElementById("next")

.addEventListener("click",()=>{

    changePage("constellation.html");

});
