// function calcAverage(n1,n2,n3) {
//     return (n1 + n2 + n3) / 3
// }

// function checkWinner() {
//     const avgDolhins = calcAverage(85,54,41);
//     const avgKoalas = calcAverage(23,34,27)
//     console.log(avgDolhins)
//     console.log(avgKoalas)
//     //const winner = avgDolhins > avgKoalas
//     return avgDolhins > avgKoalas
// }

// console.log(checkWinner())


const arr = [1,2,3,4,5];
const [a,,b,...c] = arr;
console.log(a,b,c)
// console.log(...arr)

const obj = {
    name: 'anas',
    age : 244,
    school: 'redsea',
    skills: {
        'html': '50%',
        'css': '70%',
        'js': '100%'
    }
}

console.log(obj)
const {name, age} = obj;
console.log(name,age);
const {school:sc} = obj;
console.log(sc);

