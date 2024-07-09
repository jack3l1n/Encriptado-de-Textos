
///a = ai 
///e = enter
///i = imes
///o = ober
///u = ufat

function encriptar() {
var texto = document.getElementById(id="InputTexto").value.toLowerCase();
///i es es para que afecte tanto mayusculas como minisculas
///g es para toda la linea u variacion
///m es para que afecte a multiples parrafos

    var txtCrifrado = texto.replace(/e/igm,"enter");
    var txtCrifrado = txtCrifrado.replace(/o/igm,"ober");
    var txtCrifrado = txtCrifrado.replace(/i/igm,"imes");
    var txtCrifrado = txtCrifrado.replace(/a/igm,"ai");
    var txtCrifrado = txtCrifrado.replace(/u/igm,"ufat");

    document.getElementById(id="imagDer").style.display = "none";
    document.getElementById(id="texto").style.display = "none";
    document.getElementById(id="texto2").innerHTML = txtCrifrado;
    document.getElementById(id="copiar").style.display = "show";
    document.getElementById(id="copiar").style.display = "inherit";

}

function desencriptar() {
    var texto = document.getElementById(id="InputTexto").value.toLowerCase();
    ///i es es para que afecte tanto mayusculas como minisculas
    ///g es para toda la linea u variacion
    ///m es para que afecte a multiples parrafos
    
        var txtCrifrado = texto.replace(/enter/igm,"e");
        var txtCrifrado = txtCrifrado.replace(/ober/igm,"o");
        var txtCrifrado = txtCrifrado.replace(/imes/igm,"i");
        var txtCrifrado = txtCrifrado.replace(/ai/igm,"a");
        var txtCrifrado = txtCrifrado.replace(/ufat/igm,"u");
    
        document.getElementById(id="imagDer").style.display = "none";
        document.getElementById(id="texto").style.display = "none";
        document.getElementById(id="texto2").innerHTML = txtCrifrado;
        document.getElementById(id="copiar").style.display = "show";
        document.getElementById(id="copiar").style.display = "inherit";
    
    }

    function copy(){
        var contenido = document.querySelector("#texto2");
        contenido.select();
        document.execCommand("copy");
        alert("!Se copio¡");
    }