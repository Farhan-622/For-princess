// ======================================================
// PAGE ENTRANCE
// ======================================================


window.addEventListener("load",()=>{


    document.body.classList.add("loaded");


});








// ======================================================
// MEMORY SPARKLES
// ======================================================


function createSparkle(){


    const sparkle = document.createElement("div");


    sparkle.className="sparkle";


    sparkle.style.left = Math.random()*100+"%";


    sparkle.style.top = Math.random()*100+"%";



    document.body.appendChild(sparkle);



    setTimeout(()=>{


        sparkle.remove();


    },4000);


}




setInterval(createSparkle,1200);








// ======================================================
// PHOTO CLICK EFFECT
// ======================================================


const photo = document.querySelector(".photo-card");



photo.addEventListener("click",()=>{


    photo.classList.toggle("remember");


});








// ======================================================
// OPTIONAL BACK NAVIGATION
// ======================================================


function goBack(){


    window.location.href="galaxy.html";


}