'use script'
var score ;

function main() {
   var mainElement = document.querySelector('#site-main')
   function buildDom(html){
    mainElement.innerHTML = html;  
   return mainElement;
 };

  
  function createSplashScreen(){
  var splashScreen = buildDom(`
     <section>
     <h1>Hello, surviver!</h1>
     <button>Start Game</button>
     </section>
  `);
   var startButton = document.querySelector('button');
   startButton.addEventListener('click', createGameScreen);
   
  };
  //createSplashScreen()

  function createGameScreen(){
    var createGameScreen = buildDom(`
    <section class = "gameScreen"> 
    <canvas width ="500px" height="500px"></canvas>
    <p id = "score">Score:0</p> 
    <p id = "lives">Lives:</p>
    <section>
    `);
    
    var canvas = document.querySelector('canvas');
    var game = new Game(canvas);
    game.gameOverCallBack(createGameOverScreen, setScore, setLives);
    game.startGame();
   
    document.addEventListener('keydown', function(event){
      if(event.key === 'ArrowLeft'){
        game.player.setDirection(-1); 
     } else if (event.key === 'ArrowRight'){
        game.player.setDirection(1);
     }
    });
    
    
    //setTimeout(createGameOverScreen, 3000)
  }
  function setScore(gameScore){
    score = document.querySelector('#score');
    score.innerHTML = "Score:" + gameScore;
  }

  function setLives(gameLives){
    lives = document.querySelector('#lives');
    lives.innerHTML = "Lives:" + gameLives;
  }
  //createGameScreen()
  
  function createGameOverScreen(){
    var gameOverScreen = buildDom(`
    <section>
    <h1>GameOver!</h1>
    <button>Restart</button>
    `)
    var restartButton = document.querySelector('button')
    restartButton.addEventListener('click', createGameScreen)
  }

  createSplashScreen()
}



window.addEventListener('load', main)