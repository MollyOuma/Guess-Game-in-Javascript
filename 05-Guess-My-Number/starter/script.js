'use strict';


//DOM AND DOM manipulation
/*document.querySelector('.message').textContent = 'Correct Number!';
document.querySelector('.number'). textContent =13;
document.querySelector('.score').textContent =20;
document.querySelector('.guess').value = 13;
console.log(document.querySelector('.select').value) = 'just my name'
document.querySelector('.select').value;*/

//building the game

const number = Math.trunc(Math.random() *20) +1;
let score = 20;
let highscore = 0;
document.querySelector('.check ').addEventListener('click',function(){
  const guess=Number(document.querySelector('.guess').value);
  console.log(guess, typeof(guess));

if(!guess)
  {
      document.querySelector('.message').textContent = '⛔No number';
  }
  else if(guess !== number)
  {
      if(score > 1){
      document.querySelector('.message').textContent = guess > number ? 'Too high':'Too low';
      score--;
      document.querySelector('.score').textContent = score;
      }else{
          document.querySelector('.message').textContent = 'you lodt the game';
          document.querySelector('.score').textContent = 0;
      }
  }
/*else if(guess === number)
  {
    document.querySelector('.message').textContent = 'Correct number';
    document.querySelector('.number').textContent = number;
     
     document.querySelector('.number').style.width = '30rem';
    document.querySelector('body').style.backgroundColor ='#60b347';
    if(score > highscore)
    {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
    }
    
}
else if(guess > number)
//guess too high
  {
      if(score > 1){
      document.querySelector('.message').textContent = 'Too High';
      score --;
      document.querySelector('.score').textContent =score;
    
      }else{
          document.querySelector('.message').textContent = '💥 You lost the game';
          document.querySelector('.score').textContent = 0;
      }
  }
else if(guess < number)
  {
      //when guess is too low
      if(score > 1){
      document.querySelector('.message').textContent = 'Too low';
      score--;
      document.querySelector('.score').textContent = score;
      }else{
          document.querySelector('.message').textContent = '💥 You lost the game'
          document.querySelector('.score').textContent = 0;
      }
  }*/
});

//game functionality
document.querySelector('.again').addEventListener('click', function(){
const number = Math.trunc(Math.random() *20)+1; 
score =20;
    document.querySelector('.score').textContent = '20';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.message').textContent = 'Guess my number...'
    document.querySelector('.guess').value = '';
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = 'rgb(37, 2, 37)';
    
    

});





//UI COMPONENT-modal window
