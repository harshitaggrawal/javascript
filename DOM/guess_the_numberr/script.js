let chances=20;

let random=Math.trunc(Math.random()*20+1);
console.log(random);
document.querySelector(".number").textContent ="?";

document.querySelector(".check").addEventListener("click",() =>{
     let guessNumber=Number(document.querySelector('.guess').value);
    // console.log(document.querySelector('.guess').value);
   // console.log(typeof guessNumber);

    if(!guessNumber)
    {
        document.querySelector(".message").textContent="no number ";
    }
    else if(guessNumber==random)
    {
        document.querySelector(".message").textContent="correct number 😊😊 ";
        document.querySelector('body').style.backgroundColor="green";
document.querySelector(".number").textContent =random;

    }
    else if(guessNumber>random)
    {
        
        if(chances>1)
        {
            document.querySelector(".message").textContent ="To High 👆";
            chances--
            document.querySelector(".chance").textContent =chances;
        }
        else
        {
            document.querySelector(".message").textContent ="game over";
            document.querySelector(".chance").textContent =0;
            document.querySelector('body').style.backgroundColor="red";
        }
       
    }
    else if(guessNumber<random)
    {
        
        if(chances>1)
        {
            document.querySelector(".message").textContent ="To Low 👆";
            chances--
            document.querySelector(".chance").textContent =chances;
        }
        else
        {
            document.querySelector(".message").textContent ="game over";
            document.querySelector(".chance").textContent =0;
            document.querySelector('body').style.backgroundColor="red";
        }
       
    }
});

document.querySelector(".restart").addEventListener(
    'click',()=>{
        chances=20;
        document.querySelector(".chance").textContent =chances;
        document.querySelector(".message").textContent ="Game Status";
        document.querySelector('body').style.backgroundColor="black";
        document.querySelector(".number").textContent ="?";
        random=Math.trunc(Math.random()*20+1);
        console.log(random);


    }
)