const date = document.getElementsByClassName('date')

// show Date
setTimeout(function(){
    for (var i = 0; i < date.length;i++){
        var d = new Date()
        date[i].innerHTML = d.getDate() + '/' + (d.getMonth()+1)
    }
},0)

// love active 
const love = document.querySelectorAll('.icon-heart')
for (const loveList of love){
    loveList.addEventListener('click', function() {
        loveList.classList.toggle('active')
    })
}

// show user 
const userNames = document.getElementsByClassName('name-user')
for (var i = 0; i < userNames.length; i++){
    userNames[i].innerHTML = "User" + " " + (i + 1)
}
// show Group
const groupNames = document.getElementsByClassName('name-group')
for (var i = 0; i < groupNames.length; i++){
    groupNames[i].innerHTML = "Group" + " " + (i + 1)
}

// Mode

const dark = document.querySelector('.dark')
const light = document.querySelector('.light')
const all = document.querySelector('*')
const div = document.querySelectorAll('div')
    dark.addEventListener ('click', function() {
        // all.classList.add('active-mode')
        for(const d of div){
            d.classList.add ('active-mode')
        }
    }) 
    
    light.addEventListener('click', function(){
        all.classList.remove('active-mode')
        for(const d of div){
            d.classList.remove('active-mode')
        }

    })

//username
const username = document.getElementById('username');

const userInfo = JSON.parse(window.localStorage.getItem("user"))
username.innerHTML = userInfo.name;