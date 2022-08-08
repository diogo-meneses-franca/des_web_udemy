var newArray = [];
var contador = 1;
function addNewArray() {
    if (contador % 3 === 0 && contador % 5 === 0){
        newArray.push("FizzBuzz");
        contador += 1;
        console.log(newArray);
    }else if(contador % 3 === 0){
        newArray.push("Fizz");
        contador += 1;
        console.log(newArray);
    }else if(contador % 5 === 0){
        newArray.push("Buzz");
        contador += 1;
        console.log(newArray);
    }else{
        newArray.push(contador);
        contador += 1;
        console.log(newArray);
    }
}
