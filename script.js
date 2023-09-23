// Get references to the elements
const stars = document.getElementById('stars');
const moon = document.getElementById('moon');
const mountains_behind = document.getElementById('mountains_behind');
const text = document.getElementById('text');
const btn = document.getElementById('btn');
const mountains_front = document.getElementById('mountains_front');
const header = document.querySelector('header');

// Add scroll event listener
window.addEventListener('scroll', function() {
  // Get the current scroll position
  let value = window.scrollY;
  
  // Update element styles based on scroll position
  stars.style.left = value * 0.25 + 'px';
  moon.style.top = value * 1.05 + 'px';
  mountains_behind.style.top = value * 0.5 + 'px';
  mountains_front.style.top = value * 0 + 'px';
  text.style.marginRight = value * 4 + 'px';
  text.style.marginTop = value * 1.5 + 'px';
  btn.style.marginTop = value * 1.5 + 'px';
  header.style.top = value * 0.5 + 'px';
});

const taskEl = document.getElementById("task");
const listsEl = document.querySelector(".lists");


function clicked(){
    if(taskEl.value===""){
        alert("Task should not be empty")
    }else{
        let li = document.createElement("li");
        li.innerHTML = taskEl.value;
        listsEl.appendChild(li);
        taskEl.value = "";
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    saveData();
}

listsEl.addEventListener("click",(e)=>{
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
    saveData();
})

function saveData(){
    localStorage.setItem("data",listsEl.innerHTML);
}

function getData(){
    listsEl.innerHTML = localStorage.getItem("data");
}

getData();


const taskE2 = document.getElementById("taskE2");
const listsE2 = document.querySelector(".listsE2");


function clicked1(){
    if(taskE2.value===""){
        alert("Task should not be empty")
    }else{
        let li = document.createElement("li");
        li.innerHTML = taskE2.value;
        listsE2.appendChild(li);
        taskE2.value = "";
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    saveData();
}

listsE2.addEventListener("click",(e)=>{
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
    saveData();
})

function saveData(){
    localStorage.setItem("data",listsEl.innerHTML);
}

function getData(){
    listsEl.innerHTML = localStorage.getItem("data");
}
getData();

const taskE3 = document.getElementById("taskE3");
const listsE3 = document.querySelector(".listsE3");


function clicked2(){
    if(taskE3.value===""){
        alert("Task should not be empty")
    }else{
        let li = document.createElement("li");
        li.innerHTML = taskE3.value;
        listsE3.appendChild(li);
        taskE3.value = "";
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    saveData();
}

listsE3.addEventListener("click",(e)=>{
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
    saveData();
})

function saveData(){
    localStorage.setItem("data",listsEl.innerHTML);
}

function getData(){
    listsEl.innerHTML = localStorage.getItem("data");
}
getData();

const taskE4 = document.getElementById("taskE4");
const listsE4 = document.querySelector(".listsE4");


function clicked3(){
    if(taskE4.value===""){
        alert("Task should not be empty")
    }else{
        let li = document.createElement("li");
        li.innerHTML = taskE4.value;
        listsE4.appendChild(li);
        taskE4.value = "";
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    saveData();
}

listsE4.addEventListener("click",(e)=>{
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
    saveData();
})

function saveData(){
    localStorage.setItem("data",listsEl.innerHTML);
}

function getData(){
    listsEl.innerHTML = localStorage.getItem("data");
}
getData();



