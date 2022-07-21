function fibonacciGenerator (n) {
    //Do NOT change any of the code above 👆
        var result = [];
        //Write your code here:
        for(var i=0;i<n;i++){
            if(i == 0 || i == 1){
                result.push(i);
            }else{
                var number = result[i-1] + result[i-2]
                result.push(number);
            }
        }
        
        return result;
        
        
        //Return an array of fibonacci numbers starting from 0.
        
    //Do NOT change any of the code below 👇
    }
    
    console.log(fibonacciGenerator(10));