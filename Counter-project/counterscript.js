const counter=document.querySelector('#counter');
const btn=document.querySelectorAll('.btns');

let count=0;

btn.forEach(function(btns){
   btns.addEventListener('click',function(e){
        const cls = e.currentTarget.classList;
        //or we can use this like this format instead of current target
        //const cls=this.classList;
        
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

        // for color change of number count text

        if(count > 0 ){
            counter.style.color="green";
        }
        if(count < 0){
            counter.style.color="red";
        }
        if(count == 0){
            counter.style.color="black";
        }

        // switch(count){
        //     case 1:
        //         count > 0;
        //         counter.style.color="green";
        //         break;
        //     case  2:
        //         count < 0;
        //         counter.style.color="red";
        //         break;
        //     case 3:
        //         count == 0;
        //         counter.style.color="black";
        //         break;
        //     default:
        //         counter.style.color="black";       
        // }
   });
});
