let header = document.querySelector('.header-main');
let navbar = document.querySelector('.navbar');
let modal = document.getElementById("modal");

document.querySelector('#menu').onclick = () =>{
    navbar.classList.toggle('active');
}

window.onscroll = () =>{

    if (!isModalOpen()){
        if(window.scrollY > 120){
            header.classList.add('active');
        } else{
            header.classList.remove('active');
            navbar.classList.remove('active');

        }
    }
}

setTimeout(() =>{
    showModal();
}, 5000);

function showModal(){
    modal.style.display = "block";
    header.classList.remove('active');
}

function closeModal(){
    modal.style.display = "none";
}

function isModalOpen(){
    return modal.style.display === "block";
}

function sendEmail() {
            const Name = document.getElementById('Full Name:').value;
            const number = document.getElementById('phone number:').value;
            const Email = document.getElementById('Email:').value;
            const quantity = document.getElementById('quantity:').value;
            const payment = document.getElementById('Payment Method:').value;
            const address = document.getElementById('shipping address:').value;
            const request = document.getElementById('special requests:').value;
        
        
        
            const mailtoLink = `mailto:adebomiadeniyan@gmail.com?subject=${encodeURIComponent(subject)}&body=Name: ${encodeURIComponent(name)}%0D%0AEmail: ${encodeURIComponent(email)}%0D%0APhone: ${encodeURIComponent(phone)}%0D%0AMessage: ${encodeURIComponent(message)}`;
        
            window.location.href = mailtoLink; // Opens the user's email client with the populated fields
        }
        