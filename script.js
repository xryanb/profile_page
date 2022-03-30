var editPro=document.querySelector('edit');


function nameChange(element){
    editPro=document.querySelector('.doe');
    editPro.innerText="Insert Name";
}



/* connection requests*/

let cr=2;
var requests=document.querySelector('id');



function disappear(id){
    var element=document.querySelector(id);
    element.remove();
cr--;
requests=document.querySelector('.crtwo');
requests.innerText= cr;


}