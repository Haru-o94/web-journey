function calcAverage(n1,n2,n3) {
    return (n1 + n2 + n3) / 3
}

function checkWinner() {
    const avgDolhins = calcAverage(85,54,41);
    const avgKoalas = calcAverage(23,34,27)
    console.log(avgDolhins)
    console.log(avgKoalas)
    //const winner = avgDolhins > avgKoalas
    return avgDolhins > avgKoalas
}

console.log(checkWinner())