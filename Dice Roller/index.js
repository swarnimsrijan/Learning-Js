function rollDice(){
    const numofdice = document.getElementById("val").value;
    const result = document.getElementById("result");
    const images = document.getElementById("images");
    const values = []
    const images_ = [] 

    for(let i = 0; i < numofdice; i++){
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images_.push(`<img src = "dice_images/${value}.png" alt = "Dice ${value}">`);
    }
    result.textContent = `dice: ${values.join(', ')}`;
    images.innerHTML = images_.join('');



}