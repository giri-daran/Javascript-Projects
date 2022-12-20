const colorcode=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

const colorHex=document.querySelector('.colorhex');

const BntH=document.querySelector('.BtnsHex');

BntH.addEventListener('click',hexcolor);

function hexcolor(){
    let Hash="#";
    for(let i=0;i< 6;i++){
        Hash=Hash+colorcode[GendrateRandom()];
        
    }
    colorHex.textContent=Hash;
    document.body.style.backgroundColor=Hash;
}

function GendrateRandom(){
    return Math.floor(Math.random()*colorcode.length);
}

