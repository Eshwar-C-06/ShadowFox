let InnerCursor=document.querySelector('.inner-cursor');
let OuterCursor=document.querySelector('.outer-cursor');
document.addEventListener("mousemove",MoveCursor);

function MoveCursor(e){
    let x=e.clientX;
    let y=e.clientY;
    InnerCursor.style.left = `${x}px`;
    InnerCursor.style.top = `${y}px`;
    OuterCursor.style.left = `${x}px`;
    OuterCursor.style.top = `${y}px`;
}