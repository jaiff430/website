const input = document.getElementById("Name")
const pathan = document.getElementById("submit")
const h2s = document.getElementById("h2s")
CB = document.getElementById("Alive")

pathan.onclick = function(){
    if(input.value == 'BOSS'){
        const pr = prompt("Enter Password!")
        if (pr == "bala"){
            if(CB.checked){
                window.location.href = "Boss.html"
            }
            else{
                alert("Boss Is Human")  
            }
        }
        else{
            alert("Access Denied To Boss")
        }
    }else{
        h2s.textContent = `Vanakkam ${input.value}`
    }
}


