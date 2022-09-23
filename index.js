let countEl = document.getElementById("count-el")
let incrementBtn = document.getElementById("increment-btn")
let saveBtn = document.getElementById("save-btn")
let prevEl = document.getElementById("previous-el")
let totalEl = document.getElementById("total-el")
let count = 0;
let total = 0;

function increment() {
    count += 1;
    countEl.textContent = count;
    console.log(count)

}


function save(){
    let countStr = count + " - ";
    // console.log(countStr)
    let prev = prevEl.textContent += countStr;
    countEl.textContent = 0;
    
    total += count
    totalEl.textContent = total;
    count = 0
}
