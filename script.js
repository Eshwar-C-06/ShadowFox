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

/*Side navigation bar*/

var sidenav=document.querySelector('.side-navbar');
function ShowNavBar()
{
sidenav.style.left="0";
}
function CloseNavBar()
{
sidenav.style.left="-40%";
}
