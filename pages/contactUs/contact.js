function kiemTraForm(IDname, reg){
    var name = document.getElementById(IDname).value;
    const regKT = new RegExp(reg);
    if(regKT.test(name)){
        document.getElementById("ic"+IDname).innerHTML =  "<i class='fa-solid fa-circle-check text-success'></i>"
    }
    else{
        document.getElementById("ic"+IDname).innerHTML = "*"; 
   }
}
function kiemTraAllForm(){
    var ktName = document.getElementById("icname").textContent;
    var ktEmail = document.getElementById("icemail").textContent;
    var thongBao="";
    if(ktName=="*"){
        thongBao+="Name không hợp lệ!";
    }
    if(ktEmail=="*"){
        thongBao+="\n"+"Email không hợp lệ!";
    }
    if(thongBao!=""){
        alert(thongBao);
    }
}