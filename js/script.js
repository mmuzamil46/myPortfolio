// let drop = document.getElementById("drop");

// function dropdown(){
//     drop.('drop');
// }
let hcj = document.getElementById("hcj");
let desc = document.getElementById("desc");

function showDesc(element){
    // console.log(element);
// element.children[0].classList.toggle('d-none');
element.children[1].classList.remove('d-none');
}
 function hideDesc(element){
    element.children[1].classList.add('d-none');
 }
// hcj.classList.toggle('d-none');
// desc.classList.toggle('d-none');
// }