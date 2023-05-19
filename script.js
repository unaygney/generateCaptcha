const captchaTextBox = document.querySelector('.captch_box input');
const captchaInput = document.querySelector('.captch_input input');
const message = document.getElementById('messageLog');
const sendBtn = document.getElementById('sendButton');
const repBtn = document.getElementById('btnRef')
let captcha = generateCaptcha();


function generateCaptcha() {
    var captcha = "";
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 5; i++) {
        var randomIdx = Math.floor(Math.random() * characters.length)
        captcha += characters.charAt(randomIdx)

    }
    return captcha;

}



    



    repBtn.addEventListener('click', () => {
        console.log('tiklandi')
        captcha = generateCaptcha();
        captchaTextBox.value = captcha

    })




sendBtn.addEventListener('click', () => {
    if (captchaInput.value === captchaTextBox.value) {
        message.style.display = 'block'
    } 
    else {
        message.style.display = 'block'
        message.style.color = 'red'
        message.textContent = 'Entered captcha is false.'

    }
})