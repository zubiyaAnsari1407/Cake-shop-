// const toggle= document.getElementById('toggleDark');
// const body = document.querySelector('body');
// toggle.addEventListener('click',function(){
//     this.classList.toggle('bi-moon');
//     if(this.classList.toggle(' bi-brightness-high-fill')){
//         body.style.backgroundColor='white';
//         body.style.color = 'black';
//         body.style.transition = '2s' ;
//     } else{
//         body.style.backgroundColor='black';
//         body.style.color = 'white';
//         body.style.transition = '2s' ;
//     }
// })
// const toggle = document.getElementById('toggleDark');
//     const body = document.querySelector('body');

//     toggle.addEventListener('click', function() {
//         this.classList.toggle('bi-moon');
//         if (this.classList.contains('bi-moon')) {
//             body.style.backgroundColor = 'white';
//             body.style.color = 'black';
//             body.style.transition = '2s';
//         } else {
//             body.style.backgroundColor = 'black';
//             body.style.color = 'white';
//             body.style.transition = '2s';
//         }
//     });

// document.addEventListener('DOMContentLoaded', (event) => {
//     const toggle = document.getElementById('toggleDark');
//     const body = document.querySelector('body');

//     toggle.addEventListener('click', function() {
//         console.log('Icon clicked'); // Check if the event listener is triggered
//         this.classList.toggle('bi-moon');
//         if (this.classList.contains('bi-moon')) {
//             console.log('Switching to light mode'); // Debugging statement
//             body.style.backgroundColor = 'white';
//             body.style.color = 'black';
//             body.style.transition = '2s';
//         } else {
//             console.log('Switching to dark mode'); // Debugging statement
//             body.style.backgroundColor = 'black';
//             body.style.color = 'white';
//             body.style.transition = '2s';
//         }
//     });
// });
// let defaultMode = "dark";
// let heroCaption = document.querySelectorAll('.text-bloxk');
// let color = document.querySelector(':root');
// let orderBtn = document.querySelector('.btn-1');
// function changeTextColor(tag, color){
//     tag.style.color = color;
// }
// function toggleMode(){
//     let btn = document.querySelector('#toggle-mode');
//     if(defaultMode == "dark"){
//         btn.innerHTML = "<i class=\"fa-solid fa-moon\"></i>";
//         defaultMode="light";
//         color.style.setProperty('--dark','#f7f7f7');
//         color.style.setProperty('--light','#e5bf4a');
//         color.style.setProperty('--golden','#070707');
//         heroCaption[0].style.color = "white";
//         btn-1. style.border = "1px solid var(--dark)";
//     }
//     else{
//         btn.innerHTML = "<i class=\"fa-solid fa-sun\"></i>";
//         defaultMode = "dark";
//         color.style.setProperty('--dark','#070707');
//         color.style.setProperty('--light','#f7f7f7');
//         color.style.setProperty('--golden','#e5bf4a');
//         btn-1.style.border = "1px solid var(--golden)";
//     }
// }
document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById("toggle-mode");
    const body = document.body;

    // Check localStorage for theme preference
    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark-mode");
        toggleButton.innerHTML = '<i class="fa-solid fa-moon"></i>';
    } else {
        body.classList.remove("dark-mode");
        toggleButton.innerHTML = '<i class="fa-solid fa-sun"></i>';
    }

    toggleButton.addEventListener("click", function() {
        body.classList.toggle("dark-mode");

        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
            toggleButton.innerHTML = '<i class="fa-solid fa-moon"></i>';
        } else {
            localStorage.setItem("theme", "light");
            toggleButton.innerHTML = '<i class="fa-solid fa-sun"></i>';
        }
    });
});
