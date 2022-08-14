$(document).ready(function () {
  $("#eye").click(function () {
    if (document.getElementById("open").name == "eye-off-outline") {
      document.getElementById("open").name = "eye-outline";
      document.getElementById("pw").type = "text";
    } else if (document.getElementById("open").name != "eye-off-outline") {
      document.getElementById("open").name = "eye-off-outline";
      document.getElementById("pw").type = "password";
    }
  });
});

function checkUser(name) {
  const regexUser = new RegExp(/[A-Za-z_]+(\w|\.|_){8,32}$/);

  if (!regexUser.test(name)) {
    document.getElementById("kt1").innerHTML = "Name not valid";
    document.getElementById("kt1").style.color = "red";
    return false;
  } else {
    document.getElementById("kt1").innerHTML = "done";
    document.getElementById("kt1").style.color = "green";
    return true;
  }
}

function checkPW(passWord) {
  const regexPW = new RegExp(/[A-z_0-9]{8,32}$/);

  if (!regexPW.test(passWord)) {
    document.getElementById("kt2").innerHTML = "Password not valid";
    document.getElementById("kt2").style.color = "red";
    return false;
  } else {
    document.getElementById("kt2").innerHTML = "done";
    document.getElementById("kt2").style.color = "green";
    return true;
  }
}

//-----------
const checkLogin = () => {
  let Users = JSON.parse(localStorage.getItem("Users"));
  Users != null ? (Users = Users) : (Users = []);
  console.log(Users);
  const submit = $(".inputSignIn button#submit");
  console.log(submit);

  submit.click(function (e) {
    let pw = document.getElementById("pw").value;
    let name = document.getElementById("user").value;
    e.preventDefault();
    console.log(pw, pw);
    Users.forEach((e) => {
      if (name === e.name && pw === e.pass) {
        localStorage.setItem("user", JSON.stringify(e));
        window.location = "../../home.html";
        document.getElementById("kt2").style.display = "none";
        return true;
      } else {
        document.getElementById("kt2").innerHTML = "incorrect password";
        document.getElementById("kt2").style.color = "red";
        document.getElementById("pw").value = "";
        document.getElementById("pw").focus();
        return false;
      }
    });
  });
};
checkLogin();
