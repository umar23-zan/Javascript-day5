function toggleButton(buttonSelector){
  const js=document.querySelector(buttonSelector);
  if(!js.classList.contains('is-toggled')){
    offButton();
    js.classList.add('is-toggled');
  }
  else{
    js.classList.remove('is-toggled');
  }
}
function offButton(){
  const prev=document.querySelector('.is-toggled');
  if(prev){
    prev.classList.remove('is-toggled')
  }
}