var ninput = "";

function input(vinput){
    ninput += vinput;
    document.getElementById("input").value = ninput;
}

function calcular(){
    if(ninput === ""){
        return;
    }

    try {
        let resultado = eval(ninput);

        if (!isFinite(resultado)) {
            alert("Cálculo inválido\nLimpando entrada");
            ninput = "";
        
        }else{
            resultado = Number(resultado.toFixed(2));
            ninput = resultado;
        }

    }catch (error) {
        alert("Expressão inválida");
        ninput = "";
    }

    document.getElementById("input").value = ninput;
}

function clearInput(){
    ninput == "";
    document.getElementById("input").value = ninput;
}

