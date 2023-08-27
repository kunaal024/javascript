
//concat

let column =["water", "air", "sand","earth"]
let column1 =["space", "loop"]
let column3 =column.concat(column1)
console.log(column3)

let diff = [[11,22,33],[44,55,66],[77,88,99]]
console.log(diff[0][0])
let diff1 =diff.flat()
console.log(diff1)



//join


let add = ["kunaal","rachana",55555]
let add1 = add.join('with')
console.log(add1)



//slice 

let veg = ["tomato", "ladyfinger", "brinjal","potato"]
console.log(veg.slice(2))
console.log(veg.slice(2,3))
console.log(veg.slice(-3,-1))
console.log(veg.slice(1,-1))

//at

let city = ["NAgpur","pune","mumbai"]
let city1 = city.at(1)
console.log(city1)


//splice

let food = ["apple","mango","sweet","onoin"]
food.splice(0,1)
console.log(food)



let 