const textArea = document.getElementById("text-area");
const totalCounter = document.getElementById("total-counter");
const remainingCounter = document.getElementById("Remaining-counter");


textArea.addEventListener("keyup",(e)=>{
    counter();
})

function counter(){
    totalCounter.innerText = textArea.value.length;
    remainingCounter.innerText = textArea.getAttribute("maxlength")-textArea.value.length
}

counter();