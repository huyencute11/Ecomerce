$(document).ready(function() {
    var user = JSON.parse(localStorage.getItem("user"));
    console.log(user);
    $('#name').html(user.name);
    $('#email').html(user.email);
    $('#phone').html(user.phone);
    $('#address').html(user.address);

    $('#user-update').click(function() {
        $('#user-update-name').attr("value", user.name);
        $('#user-update-email').attr("value", user.email);
        $('#user-update-phone').attr("value", user.phone);
        $('#user-update-address').attr("value", user.address);
    });
    $('#done-update').click(function() {
        var userUpdate = {
            name: $('#user-update-name').val(),
            email: $('#user-update-email').val(),
            phone: $('#user-update-phone').val(),
            address: $('#user-update-address').val(),
            pass: user.pass
        }
        user = userUpdate;
        var users = JSON.parse(localStorage.getItem("Users"));
        users.forEach((e, i) => {
            if (e.name === user.name) {
                users[i] = user;
                localStorage.setItem("Users", JSON.stringify(users));
            }
        });
        localStorage.setItem("user", JSON.stringify(user));
        $('#name').html(user.name);
        $('#email').html(user.email);
        $('#phone').html(user.phone);
        $('#address').html(user.address);
        $('#user-update-modal').modal('hide');
    });
    $('#user-pass-update').click(function() {

    });
    $('#done-pass-update').click(function() {
        var oldPass = $('#old-pass').val();
        var newPass = $('#new-pass').val();
        var rePass = $('#re-pass').val();
        if (oldPass == user.pass) {
            if (newPass === rePass && newPass != "") {
                user.pass = newPass;
                var users = JSON.parse(localStorage.getItem("Users"));
                users.forEach((e, i) => {
                    if (e.name === user.name) {
                        users[i] = user;
                        localStorage.setItem("Users", JSON.stringify(users));
                    }
                });
                localStorage.setItem("user", JSON.stringify(user));
                $('#user-update-pass-modal').modal('hide');
                alert("Update success");
            } else {
                alert("Mật khẩu mới không khớp");
            }
        } else {
            alert("Mật khẩu cũ không đúng");
        }
    });
    $('#log-out').click(function() {
        localStorage.removeItem("user");
        window.location = "../../home.html";
    });
});