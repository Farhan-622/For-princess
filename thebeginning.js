// ===========================================
// MEMORY DATA
// ===========================================

const memories = {

    meeting: {

        image: "Photo 5.jpeg",

        caption: "The First Hand Hold",

        title: "Holding The Presious Petal",

        text: "I held your hand carefully, as though I was holding something precious. Your fingers fit perfectly between mine, and for a moment, the rest of the world faded into the background. All that remained was the quiet rhythm of our hearts and the comfort of being close to you."

    },

    conversation: {

        image: "Photo 6.jpeg",

        caption: "The Mehndi",

        title: "Closest To My Heart",

        text: "The thought of my name hidden within the intricate patterns of your mehndi makes my heart smile. It isn't just ink on your hand; it's a beautiful reminder that even something as simple as a name can feel extraordinary when it's carried by someone special."

    },

    smile: {

        image: "Photo 2.jpeg",

        caption: "The First Smile",

        title: "The Smile I Never Forgot",

        text: "The first time you smiled at me, time seemed to slow down. It was one of those rare moments that didn't need grand words or gestures. That smile was enough to make my heart quietly choose you."

    }

};

// ===========================================
// ELEMENTS
// ===========================================

const bookmarks = document.querySelectorAll(".bookmark");

const overlay = document.getElementById("memoryOverlay");

const book = document.getElementById("book");

const image = document.getElementById("memoryImage");

const caption = document.getElementById("memoryCaption");

const title = document.getElementById("memoryTitle");

const text = document.getElementById("memoryText");

const closeButton = document.getElementById("closeLetter");

// ===========================================
// OPEN MEMORY
// ===========================================

bookmarks.forEach(button=>{

    button.addEventListener("click",()=>{

        bookmarks.forEach(btn=>btn.classList.remove("active"));

        button.classList.add("active");

        const memory = memories[button.dataset.memory];

        image.style.opacity = "0";

        title.style.opacity = "0";

        text.style.opacity = "0";

        caption.style.opacity = "0";

        setTimeout(()=>{

            image.src = memory.image;

            caption.textContent = memory.caption;

            title.textContent = memory.title;

            text.textContent = "";

            typeWriter(memory.text);

        },250);

        setTimeout(()=>{

            image.style.opacity = "1";

            caption.style.opacity = "1";

            title.style.opacity = "1";

            text.style.opacity = "1";

        },350);

        overlay.classList.add("active");

        book.classList.add("open");

    });

});

// ===========================================
// TYPEWRITER
// ===========================================

function typeWriter(sentence){

    text.textContent = "";

    let i = 0;

    const speed = 25;

    const typing = setInterval(()=>{

        text.textContent += sentence.charAt(i);

        i++;

        if(i >= sentence.length){

            clearInterval(typing);

        }

    },speed);

}

// ===========================================
// CLOSE LETTER
// ===========================================

closeButton.addEventListener("click",()=>{

    overlay.classList.remove("active");

    book.classList.remove("open");

});

// ===========================================
// CLICK OUTSIDE TO CLOSE
// ===========================================

overlay.addEventListener("click",(e)=>{

    if(e.target === overlay){

        overlay.classList.remove("active");

        book.classList.remove("open");

    }

});

// ===========================================
// NEXT PAGE
// ===========================================

const next = document.getElementById("next");

const transition = document.querySelector(".page-transition");


next.addEventListener("click",()=>{


    transition.classList.add("leave");


    setTimeout(()=>{


        window.location.href="firstbloom.html";


    },1300);


});


// ===========================================
// PREVIOUS PAGE
// ===========================================

document.getElementById("back").addEventListener("click",()=>{

    window.location.href = "index.html";

});

// ===========================================
// FLOATING PARTICLES
// ===========================================

const particleContainer = document.querySelector(".particles");

for(let i=0;i<35;i++){

    const particle = document.createElement("span");

    particle.style.position="absolute";

    particle.style.width=(2+Math.random()*4)+"px";

    particle.style.height=particle.style.width;

    particle.style.borderRadius="50%";

    particle.style.background="rgba(255,255,255,.35)";

    particle.style.left=Math.random()*100+"%";

    particle.style.top=Math.random()*100+"%";

    particle.style.animation=`float ${10+Math.random()*10}s linear infinite`;

    particle.style.animationDelay=Math.random()*10+"s";

    particleContainer.appendChild(particle);

}

const style=document.createElement("style");

style.innerHTML=`

@keyframes float{

0%{

transform:translateY(40px);

opacity:0;

}

20%{

opacity:.5;

}

80%{

opacity:.5;

}

100%{

transform:translateY(-120px);

opacity:0;

}

}

`;

document.head.appendChild(style);