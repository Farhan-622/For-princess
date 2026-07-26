// ======================================================
// MEMORY DATA
// ======================================================


const memories = {


    moments: {

        title: "Your Voice",

        text: "If comfort had a sound, it would be your voice. It's gentle enough to quiet my worries and beautiful enough to stay in my mind long after our conversation ends."

    },


    laughs: {

        title: "Your Beautiful Heart",

        text: "Before I admired your smile or your eyes, I unknowingly admired your heart. The way you care, the way you understand, and the way you make people feel valued—those are the reasons you'll always be extraordinary to me."

    },


    dreams: {

        title: "Walk With The Princess",

        text: "There's a quiet kind of happiness in walking beside you. Our footsteps may leave the path behind, but the memories we create stay with me long after the walk is over."

    }


};







// ======================================================
// ELEMENTS
// ======================================================


const planets = document.querySelectorAll(".planet");


const windowBox = document.getElementById("memoryWindow");


const title = document.getElementById("memoryTitle");


const text = document.getElementById("memoryText");


const closeButton = document.getElementById("close");







// ======================================================
// PLANET CLICK
// ======================================================


planets.forEach(planet => {


    planet.addEventListener("click",()=>{


        const memoryName = planet.dataset.memory;


        const memory = memories[memoryName];



        if(!memory){

            console.log("Memory missing");

            return;

        }



        // planet glow


        planet.classList.add("active");



        setTimeout(()=>{


            planet.classList.remove("active");


        },1000);





        // fill card


        title.textContent = memory.title;


        text.textContent = memory.text;





        // open window


        windowBox.classList.add("show");



    });


});








// ======================================================
// CLOSE MEMORY
// ======================================================


closeButton.addEventListener("click",()=>{


    windowBox.classList.remove("show");


});





windowBox.addEventListener("click",(event)=>{


    if(event.target === windowBox){


        windowBox.classList.remove("show");


    }


});







// ======================================================
// SHOOTING STARS
// ======================================================


function createShootingStar(){


    const star = document.createElement("div");


    star.className="shooting-star";



    star.style.top = Math.random()*50+"%";


    star.style.left = Math.random()*80+"%";



    document.body.appendChild(star);



    setTimeout(()=>{


        star.remove();


    },1500);


}



setInterval(createShootingStar,5000);







// ======================================================
// NEXT PAGE
// ======================================================


function goNext(){


    window.location.href="lastpage.html";


}