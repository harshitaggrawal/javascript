const showmodal=document.querySelectorAll(".show-modal");  //? it takes all the elment of .show-modal class in an array of showmodal variable we can access by the help of index element 
const closemodal=document.querySelector(".close-modal");
const modal=document.querySelector(".modal");
const overlay=document.querySelector(".overlay");



for(let i=0;i<showmodal.length;i++)
{
    console.log(showmodal[i].textContent);
    showmodal[i].addEventListener("click",()=>
    {
        console.log('button clicked');
    
    console.log(modal.classList); // it will  give all the class of an element 
    modal.classList.remove("hidden"); //  it remove the class from the elemnt
    
    overlay.classList.remove("hidden");
    })
}

closemodal.addEventListener("click",()=>{
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
    
});
overlay.addEventListener("click",()=>{
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
});