function rollDice () {
    const die1 = document.getElementById("die1");
    const die2 = document.getElementById("die2");
    const status = document.getElementById("status");
    const d1 = Math.floor(Math.random() * 6) + 1;
    const d2 = Math.floor(Math.random() * 6) + 1;
    const diceTotal = d1 + d2;
    die1.innerHTML = d1;
    die2.innerHTML = d2;
    status.innerHTML = "You rolled a "+diceTotal+".";

    if (d1 == d2) {
        status.innerHTML += " Doubles! You get a free turn!"
    }
}