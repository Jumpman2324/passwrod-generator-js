const generatebtn = document.querySelector(".generate-btn")
const letters = ["QWERTYUIOPASDFGHJKLZXCVBNM"]
const nums = ["1234567890"]
const symbols = ["!@#$%^&*()"]
const PasswordEl = document.getElementById("Password")
const length = 10
const allChars = letters + symbols + nums 




generatebtn.addEventListener("click", function( ) {
    let password = ""
    password += [Math.floor(Math.random() * letters.length)]
    password += [Math.floor(Math.random() * nums.length)]
    password += [Math.floor(Math.random() * symbols.length)]

    while (length > password.length) {
        password += allChars[Math.floor(Math.random() * allChars.length)]
    }
    PasswordEl.value = password
   


})