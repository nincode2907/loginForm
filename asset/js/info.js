const username = document.getElementById('username');
const password = document.getElementById('password');

const userInfo = JSON.parse(window.localStorage.getItem("user"))
username.innerHTML = userInfo.name;
password.innerHTML = userInfo.pass;