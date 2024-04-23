const consoleLog = document.querySelector ('#consoleLog');
consoleLog.addEventListener( 'click', (event) => {
    alert('Служит для вывода информации в консоль');
})
const alertP = document.querySelector ('#alertP');
alertP.addEventListener ( 'click', (event) => {
    alert('Служит для вывода сообщения пользователю');
})
const promptP = document.querySelector ('#promptP');
promptP.addEventListener( 'click', (event) => {
    prompt ('Служит для вывода окна ввода', 'вот так');
})