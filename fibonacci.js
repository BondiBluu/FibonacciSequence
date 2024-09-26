function fibonacciGenerator (n) {
        var firstNum = 0;
        var previousNum = 1;
        var solution;
        var theArray = [];
        
        if(n === 1){
            theArray = [0];
            return theArray;
        }
        else if (n === 2){
            theArray = [0, 1];
            return theArray;
        }
        else{
            theArray.push(firstNum);
            theArray.push(previousNum);
            for(var i = 2; i < n; i++){
                solution = firstNum + previousNum;
                theArray.push(solution);
                firstNum = previousNum;
                previousNum = solution;
                
            }
            return theArray;
        }
}



