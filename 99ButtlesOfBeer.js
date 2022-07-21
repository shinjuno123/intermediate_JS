function song99ButtlesOfBeer(){
    var beer = 99;
    while(beer > 0){
        var currentButtleWord = 'bottles';
        var nextButtonWord = 'bottles';
        var nextNumberOfBeer = beer - 1;
        if(beer === 2){
            nextButtonWord = "bottle";
        }
        if (beer === 1){
            currentButtleWord = 'bottle';
        }
        if(nextNumberOfBeer === 0){
            nextNumberOfBeer = 'no more';
        }
        
        
        console.log(`${beer} ${currentButtleWord} of beer on the wall, ${beer} ${currentButtleWord} of beer. Take one down and pass it around, ${nextNumberOfBeer} ${nextButtonWord} of beer on the wall.`);
        

        beer--;
    }
    console.log(`No more bottles of beer on the wall, no more bottles of beer.
    Go to the store and buy some more, 99 bottles of beer on the wall.`)     
}

song99ButtlesOfBeer();