 let bornyear = [1997,1998,1999,2000]
 let q1 = bornyear.map(function(el,index,arr){
    return 2023 - el
 })
 console.log(q1)

let number = [22, 22 ,33 ,66 ,55 ,88]
let q2 =number.filter(function(el){
    return el>50
})
console.log(q2)

let sum = [6,9,1,9,9,9]
let q3 =sum.reduce(function(acc,el){
    return acc + el
})
console.log(q3)

let city = ['pune', "banglore", "kolkate", "chennai"]
city.forEach(function(el){
    console.log("welcome "  + el)
})



let form = [11, 22,33,55,44,88]
let q4 =form.every(function(el){
    return 10 < el
})
console.log(q4)


let form2 = [55,66,88,99]
let q5 =form.some(function(el){
    return 100 < el
})
console.log(q5)


let form3 = [11 ,55, 8 ,9]
let q6 = form3.find(function(el){
    return el >0
})
console.log(q6)

let form4 = [55,88,66,5]
let q7 = form3.findIndex(function(el){
    return el >50
})
console.log(q7)




let pp = ["onion","brinjal","potato","tomato"]
let ppp = pp.slice(0,4)
console.log(ppp)


let pppp = pp.splice(0,1)
console.log(pppp)


let r = pp.substr(1)



let k = [[11,12,12],[13,14,15],[16,27]]
let k1 = console.log(diff([]))