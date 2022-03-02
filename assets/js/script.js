// CONTACT MAIL
const fullname = document.getElementById('name');
const email = document.getElementById('email');
const subject = document.getElementById('subject');
const message = document.getElementById('message');
const body = document.querySelector('body');
const checkbox = document.querySelector('.checkbtn')

sendMail = () => {
    const link = `mailto:calvinkim1230@gmail.com?subject=${fullname.value} (${email.value}): "${subject.value}"&body=${message.value}`;
    window.location.href = link;
}