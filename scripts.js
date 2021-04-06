let btnTrigger = document.getElementsByClassName('btn__feedback');
let modalFeedback = document.getElementById('modal');
let btnSend = document.getElementById('send');
let btnClose = document.getElementById('close');

const values = Object.values(btnTrigger);
values.forEach(element => {
    element.addEventListener('click', () => {
        modalFeedback.classList.toggle("opened");
        document.body.style.overflow = "hidden";
        document.body.style.background = "#E8EFF2";
    });
});

let mailformat = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
let email = document.getElementById('e-mail');
let name = document.getElementById('name');

btnSend.onclick = function(e) {
    e.preventDefault();

    if(!mailformat.test(email.value)) {
       alert('Please, enter your e-mail');
    } 
    else if (name.value == '') {
        alert('Please, enter your name');
    }
    else {
        modalFeedback.classList.remove("opened");
        document.body.style.overflow = "";
        document.body.style.background = "";
        setTimeout(() => alert("Your feedback is sent!"), 100);   
    }
};

btnClose.addEventListener('click', () => {
    modalFeedback.classList.remove("opened");
    document.body.style.overflow = ""; 
    document.body.style.background = "";
});

