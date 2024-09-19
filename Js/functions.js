const diceElement = document.getElementById('dice')

diceElement.addEventListener('click', function(){

    const randomNumber = Math.floor(Math.random() * 6) + 1;
    const dicelmage = diceElement.querySelector('img')
    dicelmage.src=`./kuvat/${randomNumber}.png`
})