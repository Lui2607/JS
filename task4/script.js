let link = document.querySelector ('a');
link.addEventListener ('click', (event)=>{
   const pr = prompt('Ты не получишь эту ссылку!');
   const userTextField = document.querySelector('a')
userTextField.textContent = pr;
    event.preventDefault() ;
})
