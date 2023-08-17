function hitungLuas(){
    var Tinggi, Alas, Luas;
    Tinggi = parseInt(document.getElementById("tinggi").value);
    Alas = parseInt(document.getElementById("alas").value);
    Luas = 0.5 * Tinggi * Alas;
    document.write(Luas)
}

function hitungKeliling(){
    var A, B, C, Keliling;
    A = parseInt(document.getElementById("sisia").value);
    B = parseInt(document.getElementById("sisib").value);
    C = parseInt(document.getElementById("sisic").value);
    Keliling = A + B + C;
    document.write(Keliling)
}

function reset(){
    var tinggi = document.getElementById("tinggi")
    var alas = document.getElementById("alas")
    var A = document.getElementById("sisia")
    var B = document.getElementById("sisic")
    var C = document.getElementById("sisib")
    tinggi.value = ""
    alas.value = ""
    A.value = ""
    B.value = ""
    C.value = ""
}