// DARK MODE
const body = document.querySelector('body'),
    sidebar = body.querySelector('.sidebar'),
    toggle = body.querySelector('.toggle'),
    modeSwitch = body.querySelector('.toggle-switch'),
    modeText = body.querySelector('.mode-text');

toggle.addEventListener('click', () => {
    sidebar.classList.toggle('close')
})

modeSwitch.addEventListener('click', () => {
    body.classList.toggle('dark');

    if (body.classList.contains('dark')) {
        modeText.innerText = "Light Mode"
    } else {
        modeText.innerText = "Dark Mode"
    }
})

// CONTACT MAIL
const fullname = document.getElementById('name');
const email = document.getElementById('email');
const subject = document.getElementById('subject');
const message = document.getElementById('message');

sendMail = () => {
    const link = `mailto:calvinkim1230@gmail.com?subject=${fullname.value} (${email.value}): "${subject.value}"&body=${message.value}`;
    window.location.href = link;
}