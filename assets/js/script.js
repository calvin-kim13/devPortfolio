const fullname = document.getElementById('name');
const email = document.getElementById('email');
const subject = document.getElementById('subject');
const message = document.getElementById('message');

sendMail = () => {
    const link = `mailto:calvinkim1230@gmail.com?subject=${fullname.value} (${email.value}): "${subject.value}"&body=${message.value}`;
    window.location.href = link;
}