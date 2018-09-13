module.exports = function getZerosCount(number) {
    let countOfZeros = 0;
    let counter = 5;
    while(counter <= number){
        countOfZeros += Math.trunc(number / counter);
        counter *= 5;
    }
    return countOfZeros;
}
