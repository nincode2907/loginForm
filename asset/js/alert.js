const alertList = document.querySelector(".main_alert_list")
const signIn = document.getElementById("sign_in")
const signUp = document.getElementById("sign_up")
import addUser, {checkHaveAcc,checkLogInRight, addUserSignIn} from "./addUser.js"

const messageList = []

function alertNotification(notification, description, messageList) {
    let iconName = (notification == "error") ? "exclamation" : "check";

    messageList.push(`<li class="main_alert_item main_alert_item--${notification} alert_fade_in">
        <i class="fa-solid fa-circle-exclamation main_alert_item_icon_noti"></i>
        <div class="main_alert_item_content">
            <h3 class="main_alert_item_content_notification">${notification}!</h3>
            <p class="main_alert_item_content_description">${description}!</p>
        </div>
        <i class="fa-solid fa-xmark main_alert_item_icon_close"></i>
    </li>`)
    
    alertList.innerHTML = messageList.join("");
    messageList[messageList.length - 1] = messageList[messageList.length - 1].replace("alert_fade_in","")

    setTimeout(() => {
        let messageFirst = document.querySelector(".main_alert_item")
        messageFirst.classList.add("alert_fade_out")
    },4000)

    setTimeout(() => {
        messageList.shift();
        alertList.innerHTML = messageList.join("");
    },5000)
}

signIn.onclick = () => {
    const user = document.getElementById("username_login");
    const pass = document.getElementById("password_login");

    if((user.value === "") || (pass.value === "")) {
        alertNotification("error", "Please enter all fields", messageList);
        
        if(pass.value === "")  pass.focus()
        if(user.value === "")  user.focus()
    } else {

        const userInfo = {
            name: user.value,
            pass: pass.value
        }
        if(checkLogInRight(userInfo)) {
            addUserSignIn(userInfo);
            window.location = "./main.html"
        } else {
            alertNotification("error", "Username not exists", messageList);
        }
    }
}



signUp.onclick = () => {
    const user = document.getElementById("username_signup");
    const pass = document.getElementById("password_signup");
    const confirmPass = document.getElementById("password_confirm_signup");

    if((user.value === "") || (pass.value === "") || (confirmPass.value === "")) {
        alertNotification("error", "Please enter all fields", messageList);
        
        if(confirmPass.value === "")  pass.focus()
        if(pass.value === "")  pass.focus()
        if(user.value === "")  user.focus()
    } else {
        if(pass.value !== confirmPass.value) alertNotification("error", "Confirm password not match", messageList);
        else {
            const userInfo = {
                name: user.value,
                pass: pass.value
            }

            if(checkHaveAcc(userInfo)) {
                addUser(userInfo);
                
                alertNotification("success", "Successful account registration", messageList);
                user.value = ""
                pass.value = ""
                confirmPass.value = ""
                
                const formInputs = document.querySelectorAll(".form_content_input_group_input")
                classOuter.classList.remove("change")
            }
            else alertNotification("error", "Username already exists", messageList);
        }
    }
}