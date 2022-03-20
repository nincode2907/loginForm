// const usernameSignUp = document.getElementById("username_signup")
// const passwordSignUp = document.getElementById("password_signup")
// const passwordConfirmSignUp = document.getElementById("password_confirm_signup")
// const signUp = document.getElementById("sign_up")

const users = []
if(JSON.parse(window.localStorage.getItem("users")) !== null) {
    const oldUsers = JSON.parse(window.localStorage.getItem("users"));
    users.push(...oldUsers);
}

export default function addUser(user) {
    users.push(user);
    console.log(users);
    window.localStorage.setItem("users", JSON.stringify(users))
}

function checkHaveAcc(userInfo) {
    const users = JSON.parse(window.localStorage.getItem("users"))
    if(users) {
        if(users.find((user) => user.name === userInfo.name)) return false
    }
    return true;
}

function checkLogInRight(userInfo) {
    const users = JSON.parse(window.localStorage.getItem("users"))
    if(users) {
        if(users.find((user) => (user.name === userInfo.name) && user.pass === userInfo.pass)) return true
    }
    console.log(false);
    return false;
}

function addUserSignIn(userInfo) {
    window.localStorage.setItem("user", JSON.stringify(userInfo))
}

export {checkHaveAcc, checkLogInRight, addUserSignIn}