let practices = ["nagpur" , "pune", "bombay", "mumbai", "banglore"]
//console.log(practices.length())
let q1 =practices.push("kolkata")
console.log(q1)
console.log(practices)
practices.unshift("chennai")
console.log(practices)

practices.pop()
console.log(practices)


practices.shift()
console.log(practices)

practices.includes("pune")
console.log(practices)

practices.indexOf("pune")
console.log("pune")




let year = [2002,2001, 2003, 2004]
let k = year.map(function(el){
    return 2023-el
})
console.log(k)
let k1 =year.filter(function(el){
    return el >2001
})
console.log(k1)
let k2 = year.reduce(function(acc, el , index, arr){
    return acc + el
},0)
console.log(k2)
let k3 =year.every(function(el){
    return el >2000
})
console.log(k3)

let k4 = year.some(function(el ){
    return el >2002
})
console.log(k4)


let k5 = year.forEach(function(el){
    return el >2001
})
console.log(k5)

let k6 = year.find(function(el){
    return el < 2001 
})
console.log(k5)


let k7 = year.findIndex(function(el){
    return el <2000
})
console.log(k7)