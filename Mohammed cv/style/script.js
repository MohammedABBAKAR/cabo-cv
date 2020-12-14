function scrollAppear (){
    var mohammedAhmed =document.querySelector('mohammed-ahmed');
    var mohammedPosition = mohammedAhmed.getBoundingClientRect().top;
    var screenPosition = window.innerHeight /2;
if(mohammedPosition < screenPosition){
    mohammedAhmed.classList.add('mohammed-appear');
}
}
window.addEventListener('scroll',scrollAppear);