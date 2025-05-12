var i=0;
const txt="Hey, I'm Eshwar — a 19-year-old ECE student from India, mastering circuits by day and Thunder Breathing by night. I craft websites, capture moments, and debug life itself.";
const speed=40;
function Typewriter(){
    if(i<txt.length){
        document.getElementById("About-typewriter").innerHTML+=txt.charAt(i);
        i++;
        setTimeout(Typewriter,speed);
    }
}
window.onload = Typewriter();
var sidenav=document.querySelector('.side-navbar');
sidenav.style.display="block";