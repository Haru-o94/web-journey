
let secertNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;

// show the number
// document.querySelector(".number").textContent = secertNumber;

// reset all to default value
document.querySelector('.again').addEventListener('click', function() {

    score = 20;
    secertNumber = Math.trunc(Math.random() * 20 + 1);

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.guess').value = ' ';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.score').textContent = score;
    document.querySelector(".number").style.width = '15rem';
    document.querySelector('.message').textContent = 'Start guessing...';
    document

});

document.querySelector('.check').addEventListener('click', function(){

    const guess = Number(document.querySelector('.guess').value);

        // check if the guess input is empty
    if(!guess) {
        document.querySelector('.message').textContent = '⛔ No Number';
        
        // check if guess is equal to secertNumber
    } else if(guess == secertNumber) {
        console.log("hello");
        document.querySelector('.message').textContent = '🎉Correct Answer'

        // change the style page if correct
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector(".number").style.width = '30rem';
        document.querySelector('.number').textContent = secertNumber;
        
        if(score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore
        }


        // if the guess greater than secertNumber print meassge
    } else if (guess > secertNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'Number To High'
        score--;
        document.querySelector('.score').textContent = score
        } else {
            document.querySelector('.message').textContent = '🔴 You Lost The Game'
            document.querySelector('.score').textContent = 0
        }
        
        // if the guess less than secertNumber print meassge
    } else if (guess < secertNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'Number To low'
        score--;
        document.querySelector('.score').textContent = score
        } else {
            document.querySelector('.message').textContent = '🔴 You Lost The Game'
            document.querySelector('.score').textContent = 0
        }
    }
})








