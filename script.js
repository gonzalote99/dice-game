const place__1 = document.querySelector('.place-1');
const place__2 = document.querySelector('.place-2');
const result = document.querySelector('.result');
const btn = document.querySelector('button');
const p_1 = document.querySelector('#p1');
const p_2 = document.querySelector('#p2');

place__1.innerHTML = 'player 1 here';
place__2.innerHTML = 'player 2 here';
result.innerHTML = 'get ready';


btn.onclick = () => {
  const player_1 = Math.floor(Math.random() * 6);
  const player_2 = Math.floor(Math.random() * 6);

  if (player_1 > player_2 && player_2 < player_1) {
    result.innerHTML = 'play1 win';
    p_1.style.color = "#9C060C";
    p_1.transition = "all 0.5s";
    p_2.style.color = "white";
    p_2.transition = "all 0.5s";

  }
  else if (player_1 < player_2 && player_2 > player_1) {
    result.innerHTML = 'play2 win';
    p_2.style.color = "#9C060C";
    p_2.style.transition = "all 0.5s";
    p_1.style.color = "white";
    p_1.transition = "all 0.5s";
  }
  else if (player_1 == player_2 && player_2 == player_1) {
    result.innerHTML = 'draw';
    p_1.style.color = "#9C060C";
    p_1.transition = "all 0.5s";
    p_2.style.color = "#9C060C";
    p_2.transition = "all 0.5s";
  }

  if (player_1 == 0) {
    place__1.style.backgroundImage = "url('https://raw.githubusercontent.com/alitahir4024/Dice-game-Project/master/img/dice1.png')";
    place__1.backgroundSize = "100% 100%";
    player_1.innerHTML = '';
  }
   else if (player_1 == 1) {
    place__1.style.backgroundImage = "url('https://raw.githubusercontent.com/alitahir4024/Dice-game-Project/master/img/dice2.png')";
    place__1.backgroundSize = "100% 100%";
    player_1.innerHTML = '';
  }
  else if (player_1 == 2) {
    place__1.style.backgroundImage = "url('https://raw.githubusercontent.com/alitahir4024/Dice-game-Project/master/img/dice3.png')";
    place__1.backgroundSize = "100% 100%";
    player_1.innerHTML = '';
  }
  else if (player_1 == 3) {
    place__1.style.backgroundImage = "url('https://raw.githubusercontent.com/alitahir4024/Dice-game-Project/master/img/dice4.png')";
    place__1.backgroundSize = "100% 100%";
    player_1.innerHTML = '';
  }
  else if (player_1 == 4) {
    place__1.style.backgroundImage = "url('https://raw.githubusercontent.com/alitahir4024/Dice-game-Project/master/img/dice5.png')";
    place__1.backgroundSize = "100% 100%";
    player_1.innerHTML = '';
  }
  else if (player_1 == 5) {
    place__1.style.backgroundImage = "url('https://raw.githubusercontent.com/alitahir4024/Dice-game-Project/master/img/dice6.png')";
    place__1.backgroundSize = "100% 100%";
    player_1.innerHTML = '';
  }
   if (player_2 == 0) {
    place__1.style.backgroundImage = "url('https://raw.githubusercontent.com/alitahir4024/Dice-game-Project/master/img/dice1.png')";
    place__1.backgroundSize = "100% 100%";
    player_1.innerHTML = '';
  }
  else if (player_2 == 1) {
    place__1.style.backgroundImage = "url('https://raw.githubusercontent.com/alitahir4024/Dice-game-Project/master/img/dice2.png')";
    place__1.backgroundSize = "100% 100%";
    player_1.innerHTML = '';
  }
  else if (player_2 == 2) {
    place__1.style.backgroundImage = "url('https://raw.githubusercontent.com/alitahir4024/Dice-game-Project/master/img/dice3.png')";
    place__1.backgroundSize = "100% 100%";
    player_1.innerHTML = '';
  }
  else if (player_2 == 3) {
    place__1.style.backgroundImage = "url('https://raw.githubusercontent.com/alitahir4024/Dice-game-Project/master/img/dice4.png')";
    place__1.backgroundSize = "100% 100%";
    player_1.innerHTML = '';
  }
  else if (player_2 == 4) {
    place__1.style.backgroundImage = "url('https://raw.githubusercontent.com/alitahir4024/Dice-game-Project/master/img/dice5.png')";
    place__1.backgroundSize = "100% 100%";
    player_1.innerHTML = '';
  }
  else if (player_2 == 5) {
    place__1.style.backgroundImage = "url('https://raw.githubusercontent.com/alitahir4024/Dice-game-Project/master/img/dice6.png')";
    place__1.backgroundSize = "100% 100%";
    player_1.innerHTML = '';
  }
}

