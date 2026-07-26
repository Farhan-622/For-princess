// ======================================================
// MEMORY DATABASE
// ======================================================


const memories = {


    meeting: {

        image: "Photo 7.jpeg",

        title: "Us together",

        text: "If someone asked me what happiness looked like, I'had simply point to us. Two hearts, countless laughs, endless conversations, and future with beautiful 'what ifs'"

    },


    conversation: {

        image: "Photo 9.jpeg",

        title: "Your Beauty",

        text: "What makes you beautiful isn't just the way you look. It's the warmth you carry, the kindness in your heart, and the light you bring into the lives of those around you. That's the kind of beauty that never fades."

    },


    smile: {

        image: "Photo 10.jpeg",

        title: "This Smile",

        text: "A little smile that somehow made the whole moment feel brighter."

    },


    special: {

        image: "Photo 1.jpeg",

        title: "This Look",

        text: "There's something about this look that I can't quite put into words. It isn't just beautiful—it feels like a moment my heart wants to pause and keep forever."

    }


};







// ======================================================
// ELEMENTS
// ======================================================


const stars = document.querySelectorAll(".star");


const overlay = document.getElementById("memoryOverlay");


const image = document.getElementById("memoryImage");


const title = document.getElementById("memoryTitle");


const description = document.getElementById("memoryDescription");


const closeBtn = document.getElementById("close");







// ======================================================
// STAR CLICK FUNCTION
// ======================================================


stars.forEach(star => {


    star.addEventListener("click",()=>{


        const memoryName = star.dataset.memory;


        const memory = memories[memoryName];



        if(!memory){

            console.log("Memory not found");

            return;

        }



        // star glow

        star.classList.add("clicked");



        setTimeout(()=>{

            star.classList.remove("clicked");

        },1000);




        // insert memory data


        image.src = memory.image;


        title.textContent = memory.title;


        description.textContent = memory.text;



        // open paper


        overlay.classList.add("show");



    });


});







// ======================================================
// CLOSE MEMORY
// ======================================================


closeBtn.addEventListener("click",()=>{


    overlay.classList.remove("show");


});





overlay.addEventListener("click",(event)=>{


    if(event.target === overlay){


        overlay.classList.remove("show");


    }


});








// ======================================================
// SHOOTING STARS
// ======================================================


function createShootingStar(){


    const shooting = document.createElement("div");


    shooting.className="shooting-star";


    shooting.style.top = Math.random()*40+"%";


    shooting.style.left = Math.random()*80+"%";



    document.body.appendChild(shooting);



    setTimeout(()=>{


        shooting.remove();


    },1200);


}



setInterval(createShootingStar,5000);







// ======================================================
// PAGE NAVIGATION
// ======================================================


function goNext(){


    window.location.href="galaxy.html";


}