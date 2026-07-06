const PASSWORD = "22/07/2000";

// Elements
const lock = document.getElementById("lock");
const main = document.getElementById("main");
const pass = document.getElementById("pass");
const error = document.getElementById("error");
const unlockBtn = document.getElementById("unlockBtn");
const musicBtn = document.getElementById("musicBtn");
const music = document.getElementById("music");

// Unlock Button
unlockBtn.addEventListener("click", unlockPage);

// Enter Key
pass.addEventListener("keydown", function(e){
    if(e.key === "Enter"){
        unlockPage();
    }
});

function unlockPage(){

    if(pass.value.trim() === PASSWORD){

        lock.style.display = "none";
        main.style.display = "block";

        music.play().catch(()=>{});

        hearts();

    }else{

        error.innerHTML = "❌ Wrong Password";

    }

}

// Music Button
musicBtn.addEventListener("click",function(){

    music.play().catch(()=>{});

});

// Floating Hearts

function hearts(){

setInterval(function(){

let heart=document.createElement("div");

heart.innerHTML="🩷";

heart.style.position="fixed";
heart.style.left=Math.random()*100+"vw";
heart.style.top="100vh";
heart.style.fontSize=(18+Math.random()*15)+"px";
heart.style.pointerEvents="none";
heart.style.zIndex="9999";
heart.style.transition="6s linear";

document.body.appendChild(heart);

setTimeout(function(){

heart.style.transform="translateY(-120vh)";
heart.style.opacity="0";

},100);

setTimeout(function(){

heart.remove();

},6100);

},400);

}