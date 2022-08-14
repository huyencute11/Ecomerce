var dem=0;
function kiemTraEmail(){
    var email = document.getElementById("email").value;
    const regexEmail = new RegExp(/^[a-zA-Z]+@[a-zA-Z]+.[a-z]{3}$/);
   if (!regexEmail.test(email)) {
    document.getElementById("kt4").name="close-outline";
    document.getElementById("kt4").style.color="red"
    dem++;
}
   else{ 
       document.getElementById("kt4").name="checkmark-outline";
       document.getElementById("kt4").style.color="green"
      
   }
}
function thongbao(){
    if(dem==0)
    {
        alert("Thành công")
    }
    dem=0;
}
