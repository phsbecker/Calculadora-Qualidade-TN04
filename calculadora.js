var ninput = "";

function input(vinput){
    ninput += vinput;
    document.getElementById("input").value = ninput;
}

function calcular(){
    if(ninput == ""){
        ninput == ""
    }else{
        ninput = eval(ninput);
    }
    document.getElementById("input").value = ninput;

    if(ninput =="Infinity"){
        alert("evita dog");
        ninput == "";
    }
}

function clearInput(){
    ninput = "";
    document.getElementById("input").value = ninput;
}

