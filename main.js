function diceGame(){
    let number1 = Math.ceil(Math.random() * 6);
    let number2 = Math.ceil(Math.random() * 6)
    document.querySelector('.img1').setAttribute('src',`./images/dice${number1}.png`);
    document.querySelector('.img2').setAttribute('src',`./images/dice${number2}.png`);
    
}
