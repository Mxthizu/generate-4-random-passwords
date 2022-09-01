let characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@?!-_()";
let passwordNumber = 4
const passwordEl = document.querySelectorAll(".password-el")
let passwords = []

function generatePassword() {
    document.getElementById("passwords").style.display = "initial"
    let newPassword = ""
    for (let i = 0; i < 12; i++) {
        let generate = characters[Math.floor(Math.random() * characters.length)]
        newPassword += generate
    }
    passwords.push(newPassword)
}

function generateMultiplePasswords() {
    while (passwords.length < passwordNumber - 2) {
        for (let i = 0; i < passwordNumber; i++) {
            generatePassword()
            passwordEl[i].textContent = passwords[i]
        }   
    }
    passwords = []
}