let array = ['apple','banana','orange','watermelon','pineapple'];
console.log(array)
array.push('grapes')
console.log(array)
array.pop()
console.log(array)
array.shift()
console.log(array)
array.unshift('apple','muskmelon')
console.log(array)
array.splice(0,3)
console.log(array)
let array2 = ['dog','cat','fish']
let newArray = array.concat(array2)
console.log(newArray)
console.log(newArray.indexOf('dog'))
console.log(newArray.includes('watermelon'))
console.log(newArray.sort())
console.log(newArray.sort().reverse())

let a = [10,30,40,20,50];

console.log(a.map(x => x + 10))