hscoreEl=document.getElementById("hscore-el")
gscoreEl=document.getElementById("gscore-el")

let count=0
let ncount=0

function add1h(){
    count+=1
    hscoreEl.textContent=count
    
}

function add2h(){
    count+=2
    hscoreEl.textContent=count
}

function add3h(){
    count+=3
    hscoreEl.textContent=count
}

function add1g(){
    ncount+=1
    gscoreEl.textContent=ncount
}

function add2g(){
    ncount+=2
    gscoreEl.textContent=ncount
}

function add3g(){
    ncount+=3
    gscoreEl.textContent=ncount
}

function reset(){
    gscoreEl.textContent=0
     hscoreEl.textContent=0
     count=0
     ncount=0
}
