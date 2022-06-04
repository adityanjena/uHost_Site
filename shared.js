var backdrop = document.querySelector('.backdrop');
//console.dir(backdrop);
var modal = document.querySelector('.modal');
var selectPlanButton= document.querySelectorAll('.plan button');
//console.dir(selectPlanButton);
var modalNoButton=document.querySelector('.modal__action--negative');
var toggleButton=document.querySelector('.toggle-button');
var mobileNav=document.querySelector('.mobile-nav');
//to open modal and backdrop
for(var i=0;i<selectPlanButton.length;i++){
    selectPlanButton[i].addEventListener('click',function(){
        modal.style.display= 'block';
        backdrop.style.display= 'block';
    });
}
//to close modal and backdrop
backdrop.addEventListener('click',function(){
    modal.style.display= 'none';
    backdrop.style.display= 'none';
})

if(modalNoButton){modalNoButton.addEventListener('click',function(){
    modal.style.display= 'none';
    backdrop.style.display= 'none';
})}
//to close 
mobileNav.addEventListener('click',function(){
    mobileNav.style.display= 'none';
    backdrop.style.display= 'none';
})
//to open
toggleButton.addEventListener('click',function(){
    mobileNav.style.display= 'block';
    backdrop.style.display= 'block';
})



