var data = {
    Email: self.registerEmail(),
    Password: self.registerPassword(),
    ConfirmPassword: self.registerPassword2(),
    FirstName: self.FirstName,
    LastName: self.LastName,
    Address1: self.Address1,
    Address2: self.Address2,
    City: self.City,
    State: self.State,
    ZipCode: self.Zipcode
};

$.ajax({
    type: 'POST',
    url: '/api/Account/Register',
    contentType: 'application/json; charset=utf-8',
    data: JSON.stringify(data)
}).done(function (data) {
    self.result("Done!");
}).fail(showError);

var loginData = {
    grant_type: 'password',
    username: self.loginEmail(),
    password: self.loginPassword()
};

$.ajax({
    type: 'POST',
    url: '/Token',
    data: loginData
}).done(function (data) {
    self.user(data.userName);
    //Cache the access token in session storage.
    sessionStorage.setItem(tokenKey, data.access_token);
}).fail(showError);