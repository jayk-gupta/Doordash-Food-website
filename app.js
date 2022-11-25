const signIn =document.querySelector('.btn-signIn');
const signUp =document.querySelector('.btn-signUp');
const popUpBox = document.querySelector('.sign-box');
// cross
const closeWindow =document.querySelector('.cross');
// overlay
const overlay = document.querySelector(".overlay");

signIn.addEventListener('click',function(){
  popUpBox.classList.remove('hidden');
  overlay.classList.remove('hidden');
  document.body.classList.add('disable-scroll');
});

signUp.addEventListener('click',function(){
  popUpBox.classList.remove('hidden');
  overlay.classList.remove('hidden');
  document.body.classList.add('disable-scroll');

});

closeWindow.addEventListener('click',function(){
  popUpBox.classList.add('hidden');
  overlay.classList.add('hidden');
  document.body.classList.remove('disable-scroll');

});
