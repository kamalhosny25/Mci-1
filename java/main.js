let toggleBtn = document.querySelector(".toggle_btn");
let toggleBtnIcon = document.querySelector(".toggle_btn i");
let tropdownMenu = document.querySelector(".dropdown_menu");

toggleBtn.onclick = function (){
    tropdownMenu.classList.toggle('open')
    let isopen = tropdownMenu.classList.contains('open')
    
    toggleBtnIcon.classList = isopen 
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'
}


// 
let A1 = 95 ;
let A2 = 745 ;

let hh = A1 - A2 ;

console.log(hh)``