// let drop = document.getElementById("drop");

// function dropdown(){
//     drop.('drop');
// }
let hcj = document.getElementById("hcj");
let desc = document.getElementById("desc");
const drop = document.getElementById("drop");
const buton = document.getElementById("buton");
function showDesc(element){
    // console.log(element);
// element.children[0].classList.toggle('d-none');
element.children[1].classList.remove('d-none');
}
 function hideDesc(element){
    element.children[1].classList.add('d-none');
 }
function dropdown(){
    drop.classList.toggle('d-none');
if(buton.classList.contains('fa-ellipsis')){
    buton.classList.remove('fa-ellipsis');
    buton.classList.add('fa-x');
    drop.style.opacity = 1;
}else{
    buton.classList.remove('fa-x');
    buton.classList.add('fa-ellipsis');
    drop.style.opacity = 0;
}
}