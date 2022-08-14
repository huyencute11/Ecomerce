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

  $("#eye1").click(function () {
    if (document.getElementById("open1").name == "eye-off-outline") {
      document.getElementById("open1").name = "eye-outline";
      document.getElementById("pw1").type = "text";
    } else if (document.getElementById("open1").name != "eye-off-outline") {
      document.getElementById("open1").name = "eye-off-outline";
      document.getElementById("pw1").type = "password";
    }
  });
});

//check user
const checkUser = (name) => {
  const regexUser = new RegExp(/^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$/);
  if (!regexUser.test(name)) {
    document.getElementById("kt1").innerHTML = "Name not valid, not space";
    document.getElementById("kt1").style.color = "red";
    return false;
  } else {
    document.getElementById("kt1").innerHTML = "done";
    document.getElementById("kt1").style.color = "green";
    return true;
  }
};
document.getElementById("user").onblur = () => {
  checkUser(document.getElementById("user").value);
};
//check pass
const checkPW = (passWord) => {
  const regexPW = new RegExp(/[A-z_0-9]{8,32}$/);

  if (!regexPW.test(passWord)) {
    document.getElementById("kt2").innerHTML =
      "Password not valid, have include digit, checracter from 8-32";
    document.getElementById("kt2").style.color = "red";
    return false;
  } else {
    document.getElementById("kt2").innerHTML = "done";
    document.getElementById("kt2").style.color = "green";
    return true;
  }
};
document.getElementById("pw").onblur = () => {
  checkPW(document.getElementById("pw").value);
};

//check pass again
const checkRPW = (passW) => {
  var rpw = document.getElementById("pw1").value;

  if (rpw != passW || rpw == "") {
    document.getElementById("kt3").innerHTML =
      "re-authentication password is not correct";
    document.getElementById("kt3").style.color = "red";
    document.getElementById("kt3").style.fontSize = "1.2 rem";
    return false;
  } else {
    document.getElementById("kt3").innerHTML = "done";
    document.getElementById("kt3").style.color = "green";
    return true;
  }
};
document.getElementById("pw1").onblur = () => {
  checkRPW(document.getElementById("pw1").value);
};

//check email
const checkEmail = (email) => {
  const regexEmail = new RegExp(/^[a-zA-Z0-9_]+@[a-zA-Z_0-9]+\.[a-z]{3}$/);
  if (!regexEmail.test(email)) {
    document.getElementById("kt4").innerHTML = "Email address not valid";
    document.getElementById("kt4").style.color = "red";
    document.getElementById("kt4").style.fontSize = "1.2 rem";
    return false;
  } else {
    document.getElementById("kt4").innerHTML = "done";
    document.getElementById("kt4").style.color = "green";
    return true;
  }
};
document.getElementById("email").onblur = () => {
  checkEmail(document.getElementById("email").value);
};

//get user into localstorage
var Users = JSON.parse(localStorage.getItem("Users"));
Users != null ? (Users = Users) : (Users = []);
console.log(Users);
//arrow function
const checkExits = () => {
  let name = document.getElementById("user").value;
  Users.forEach((e) => {
    if (name == e.name) {
      document.getElementById("kt1").innerHTML =
        "Name has exits, please enter again";
      document.getElementById("kt1").style.color = "red";
      setTimeout(() => {
        document.getElementById("user").value = "";
        document.getElementById("user").focus();
        document.getElementById("kt1").innerHTML = "";
      }, 1500);
      return false;
    }
  });
};

const createUser = () => {
  const submit = $(".inputSignUp button");
  console.log(submit);
  // var Users = [];
  function User(name, passWord, email) {
    this.name = name;
    this.pass = passWord;
    this.email = email;
  }
  submit.click(function (e) {
    let pw = document.getElementById("pw").value;
    let name = document.getElementById("user").value;
    let email = document.getElementById("email").value;
    e.preventDefault();
    if (checkUser(name) && checkPW(pw) && checkEmail(email) && checkRPW(pw)) {
      let userLogin = new User(name, pw, email);
      console.log(userLogin);

      Users.push(userLogin);
      localStorage.setItem("Users", JSON.stringify(Users));
      window.location = "../SignIn/login.html";
    }
    if (!checkPW(pw)) {
      e.preventDefault();
    }
    if (!checkUser(name)) {
      e.preventDefault();
    }
    if (!checkRPW(pw)) {
      e.preventDefault();
    }
    if (!checkEmail(email)) {
      e.preventDefault();
    }
    return true;
  });
};

createUser();
