const counter=document.querySelector('#counter');
const btn=document.querySelectorAll('.btns');
//const start=document.querySelector('StartresetBtn');
let count=0;

btn.forEach(function(btns){
   btns.addEventListener('click',function(e){
        const cls = e.currentTarget.classList;

        //if(c)
        if(cls.contains("StartresetBtn")){
            
            
            counter.textContent=count++;
        }
        if(cls.contains("ReversBtn")){
            counter.textContent=count--;
        }
        if(cls.contains("resetBtn")){
            count=0;
            counter.textContent=count;
        }

        if(count > 0 ){
            counter.style.color="green";
        }
        if(count < 0){
            counter.style.color="red";
        }
        if(count == 0){
            counter.style.color="black";
        }
   });
});
