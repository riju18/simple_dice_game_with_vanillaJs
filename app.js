var scores, roundScore, activePlayer, dice;
scores = [0, 0]; // both players score
roundScore = 0;
activePlayer = 0;

alert('winning point is 20');

document.getElementById('score-0').textContent = 0;
document.getElementById('score-1').textContent = 0;
document.getElementById('current-0').textContent = 0;
document.getElementById('current-1').textContent = 0;

// hide the dice image initially
document.querySelector('.dice').style.display = 'none';

// roll btn triggered
document.querySelector('.btn-roll').addEventListener('click', () => {

    var dice = Math.ceil(Math.random() * 6);

    var WhichDice = document.querySelector('.dice');
    WhichDice.src = 'dice-' + dice + '.png';
    WhichDice.style.display = 'block';

    if (dice > 1) {
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {
        alert('player-' + (activePlayer + 1) + ' got ' + dice);
        switchNextPlayer();
    }

});

document.querySelector('.btn-hold').addEventListener('click', () => {
    scores[activePlayer] += roundScore;
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

    if (scores[activePlayer] >= 20) {
        document.querySelector('#name-' + activePlayer).textContent = 'WINNER';
        document.querySelector('.dice').style.display = 'none';
        setTimeout(function () { 
            var permission = prompt('want to play again? (y/n)');
            if (permission == 'y') {
                location.reload();
            }
        }, 2000);
    } else {
        switchNextPlayer();
    }
});



function switchNextPlayer() {
    if (activePlayer == 0) {
        activePlayer = 1;
    } else {
        activePlayer = 0;
    }
    roundScore = 0;

    // document.querySelector('.player-0-panel').classList.remove('active');
    // document.querySelector('.player-1-panel').classList.add('active');

    // or,
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display = 'none';
}
