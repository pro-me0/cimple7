sp = document.querySelectorAll('span')

let color = () => {
    for (let i = 0; i < sp.length; i++){
    sp[i].style.color = 'white';sp[i].style.borderBottom= 'initial';
}
}

let cap = () => {for (let i = 0; i < sp.length; i++){
    sp[i].innerText = sp[i].innerText.toLowerCase()
}
}