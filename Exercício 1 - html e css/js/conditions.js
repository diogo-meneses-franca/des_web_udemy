function isLeap(year) {
    var result = ""  
    if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0){
            result = "Leap";
    }else {
        result = "Not leap";
    }
    return result;
    
        
    }
    console.log(isLeap(2100));