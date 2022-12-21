const img=document.querySelector('#Image');
const Name=document.querySelector("#name");
const Position=document.querySelector('#position');
const Discript=document.querySelector('#disc');
const next= document.querySelector('#next');
const prevs=document.querySelector('#Prev');
const submt=document.querySelector('#submit');

const detail=[
{
    id:1,
    img:'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
    Name:'Jacksie',
    job:'Designer',
    Discript:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters ',
},
{
    id:2,
    img:'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg',
    Name:'wanda',
    job:'Backend-Developer',
    Discript:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
},
{
    id:3,
    img:'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
    Name:'Sam',
    job:'Data Analyst',
    Discript:'This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
},
{
    id:4,
    img:'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
    Name:'Buckus',
    job:'Business Relations',
    Discript:'This book is a treatise on the theory of ethics.',
},
];

function showperson(){
    //let random= Math.floor(Math.random()*detail.length);
    let detailarry=detail[random()];
    img.src=detailarry.img;
    Name.textContent=detailarry.Name;
    Position.textContent=detailarry.job;
    Discript.textContent=detailarry.Discript;
}
function random(){
    return Math.floor(Math.random()*detail.length);
    
}

submt.addEventListener('click',submitfunction);

function submitfunction(){
    showperson()

}


let countnuber=0;

next.addEventListener('click',nextfunction);

function nextfunction(){
    let countplus=countnuber++;
    if(countplus > detail.length){
        countnuber=0;
    }
    showperson(countplus);
    
}

prevs.addEventListener('click',prevfunction);

function prevfunction(){
    let countminus=countnuber--;
    if(countminus < 0){
        countnuber=detail.length;
    }
    showperson(countminus);
    
}