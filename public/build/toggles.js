function toggleMenu() {
    let menu = document.getElementById('menu');
    let burgerIcon = document.getElementById('burger-icon');
    let xIcon = document.getElementById('x-icon');
    menu.classList.toggle('hidden');
    burgerIcon.classList.toggle('hidden');
    xIcon.classList.toggle('hidden');
}

function toggleSchedule() {
    let adultsLink = document.getElementById('adults-link');
    let kidsLink = document.getElementById('kids-link');
    let adultSchedule = document.getElementById('adults-schedule');
    let kidsSchedule = document.getElementById('kids-schedule');
    adultSchedule.classList.toggle('hidden');
    kidsSchedule.classList.toggle('hidden');
    adultsLink.classList.toggle('text-yellow-700');
    kidsLink.classList.toggle('text-yellow-700');
}

function toggleForm() {
    let form = document.getElementById('form-popup');
    form.classList.toggle('hidden');
}