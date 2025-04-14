'use strict';
console.log(document.querySelector('.right').textContent) 

let number = Math.trunc(Math.random() * 20) + 1;
let highScore = document.querySelector('.highscore');
const checkBtn = document.querySelector('.check')
  checkBtn.addEventListener('click', guessCheck)
/**
 * 初始化函数
 * 开始/成功后调用
 */
function init(){
  document.querySelector('.score').textContent = 20
  number = Math.trunc(Math.random() * 20) + 1;
  console.log(`number: ${number}`)
  document.querySelector('.left').style.color =  'red'
}

function guessCheck() {
  console.log(("check"))
  let score = document.querySelector('.score')
  const guessNum = Number(document.querySelector('.guess').value) 
  let message = document.querySelector('.message')
  if(!guessNum){
    message.textContent = "no number!"
    return
  }
  if(guessNum === number){
    message.textContent = "yes!"
    if(score.textContent > highScore.textContent){
      highScore.textContent = score.textContent
    }
    init()
    return 
  }
  if(guessNum < number){
    message.textContent = "too low"
    score.textContent -=1
  } else {
    message.textContent = "too high"
    score.textContent -=1
  }
}
init()