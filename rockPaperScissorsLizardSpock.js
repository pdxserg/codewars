// In this kata, your task is to implement an extended version of the famous rock-paper-scissors game. The rules are as follows:
//
//     Scissors cuts Paper
// Paper covers Rock
// Rock crushes Lizard
// Lizard poisons Spock
// Spock smashes Scissors
// Scissors decapitates Lizard
// Lizard eats Paper
// Paper disproves Spock
// Spock vaporizes Rock
// Rock crushes Scissors
// Task:
//     Given two values from the above game, return the Player result as "Player 1 Won!", "Player 2 Won!", or "Draw!".
//
//     Inputs
// Values will be given as one of "rock", "paper", "scissors", "lizard", "spock".


function rpsls(pl1, pl2) {
    if (pl1 === pl2) return 'Draw!'
    let rules = {
        'paper': ['rock', 'spock'],
        'rock': ['lizard', 'scissors'],
        'lizard': ['spock', 'paper'],
        'spock': ['scissors', 'rock'],
        'scissors': ['lizard', 'paper']
    }
    if (rules[pl1].includes(pl2))
        return 'Player 1 Won!'
    else
        return 'Player 2 Won!'



}

const assert=require('chai').assert

describe('rock paper scissors lizard spock', function() {

    it('player 1 Wins', function() {
        assert.strictEqual(rpsls('rock', 'lizard'), 'Player 1 Won!');
        assert.strictEqual(rpsls('paper', 'rock'), 'Player 1 Won!');
        assert.strictEqual(rpsls('scissors', 'lizard'), 'Player 1 Won!');
        assert.strictEqual(rpsls('lizard', 'paper'), 'Player 1 Won!');
        assert.strictEqual(rpsls('spock', 'rock'), 'Player 1 Won!');
    });

    it('player 2 wins', function() {
        assert.strictEqual(rpsls('lizard','scissors'), 'Player 2 Won!');
        assert.strictEqual(rpsls('spock','lizard'), 'Player 2 Won!');
        assert.strictEqual(rpsls('paper','lizard'), 'Player 2 Won!');
        assert.strictEqual(rpsls('scissors','spock'), 'Player 2 Won!');
        assert.strictEqual(rpsls('rock','spock'), 'Player 2 Won!');

    });

    it('draw', function() {
        assert.strictEqual(rpsls('rock', 'rock'), 'Draw!');
        assert.strictEqual(rpsls('spock', 'spock'), 'Draw!');
    });
});