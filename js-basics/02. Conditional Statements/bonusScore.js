function bonusScore(number){
    number = Number(number);
    
    let bonusPoints = 0;

    if(number <= 100){
        bonusPoints += 5;
    } else if(number > 1000){
        bonusPoints += number * 0.1;
    } else {
        bonusPoints += number * 0.2;
    }

    if(number % 2 === 0){
        bonusPoints += 1;
    } else if(number % 10 === 5){
            bonusPoints += 2;
    }

    console.log(bonusPoints);
    console.log(number + bonusPoints);
}

bonusScore("20");
