let names = ["kunaal", "rachana", "kuki", "Golu"]
console.log(names)
console.log(names[0])


let food = ["pav bhaji","pani puri", "samosa"]
console.log(food)
console.log(food[2])


let state = ["mh", "delhi" , "mp", "gj", "RJ"]
for(i = 0 ; i < state.length ; i++){
     console.log(i)
     console.log(state[1])

}


// push()  using to add element in end of array

let games = ["volleyball", "baseketball", "cricket", "badmintel"]
let k1 = games.push("handball")
console.log(k1)
//console.log(games)



// unshift 
//  using to add element in starting
let vegetable = [" califlower", "tomato", "onion", "potato"]
let k2 = vegetable.unshift("ladyfinger")
console.log(k2)
console.log(vegetable)

// pop()
// using to print last element of Array


let colour = ["blue","orange","red ", "pink" ]
let k3 = colour.pop()
console.log(k3)
console.log(colour)

//shift()
// using to print first element of array

let cars = ["BMW", "porche", "mercedes","audi"]
let k4 = cars.shift()
console.log(k4)

// includes()
// using to check element present in array or not?
let bike = ["Rx100"," kawasaki", "hero ", "honda"]
let k5 = bike.includes("Rx100")
let k6 = bike.indexOf("yamaha")
console.log(k5)
console.log(k6)


