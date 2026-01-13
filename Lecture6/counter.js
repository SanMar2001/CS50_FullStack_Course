if (!localStorage.getItem('counter')) {
    localStorage.setItem('counter', 0)
}

function count() {
    let counter = Number(localStorage.getItem('counter'));
    counter += 1;
    let header = document.querySelector('h1');
    header.innerHTML = counter;
    localStorage.setItem('counter', counter)
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('h1').innerHTML = localStorage.getItem('counter');
    document.querySelector('button').addEventListener('click', count)
});