$("#registerBtn").click(function() {
    var registerData = {
        Email: $("#registerEmail").val(),
        Password: $("#registerPassword").val(),
        ConfirmPassword: $("#confirmPassword").val(),
        FirstName: $("#registerFirstName").val(),
        LastName: $("#registerLastName").val(),
        Address1: $("#registerAddress1").val(),
        Address2: $("#registerAddress2").val(),
        City: $("#registerCity").val(),
        State: $("#registerState").val(),
        ZipCode: $("#registerZipCode").val(),
        DOB: $("#registerDOB").val(),
        PhoneNumber: $("#registerPhoneNumber").val()
    };
    console.log("registerData", registerData);
    console.log("data-stringify", JSON.stringify(registerData));
    $.ajax({
        type: 'POST',
        url: '/api/Account/Register',
        contentType: 'application/json; charset=utf-8',
        data: JSON.stringify(registerData)
    }).done(function (data) {
        console.log("Done!");
    }).fail(function (error) {
        console.log('error', error);
    })
});


$("#loginBtn").click(function () {
    var loginData = {
        grant_type: 'password',
        username: $("#loginEmail").val(),
        password: $("#loginPassword").val()
    };
    console.log("Clicked");
    console.log("loginData",loginData);
    $.ajax({
        type: 'POST',
        url: '/Token',
        data: loginData
    }).done(function (data) {
        console.log("sessionStorage", sessionStorage);
        console.log("data", data);
        console.log("self", self);
        //self.user(data.userName);
        //Cache the access token in session storage.
        sessionStorage.setItem('tokenKey', data.access_token);
        console.log("sessionStorage", sessionStorage);
        console.log('tokenKey', sessionStorage.tokenKey);
    }).fail(function (error) {
        console.log('error', error);
    })
});
