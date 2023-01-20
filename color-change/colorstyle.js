const color=['green', 'orange', 'yellow','blue','red','pink','purple','white','DarkGray'];

const spancolor=document.querySelector('.colorh1');
const Baner=document.querySelector('.contentOne');
const btns=document.querySelector('.Btns');
const header=document.getElementsByTagName('header');

btns.addEventListener('click',colorchange);

function colorchange(){
    const colors=Math.floor(Math.random()*color.length);
    document.body.style.background=color[colors];
    spancolor.textContent=color[colors];
}
