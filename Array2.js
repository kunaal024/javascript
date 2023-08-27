let birthyear = [1989, 1990, 1991, 1992]
let ages = []
for (let i =0 ; i <birthyear.length ; i++){
let c1 = 2023 - birthyear[i]
ages.push(c1)
}
console.log(ages)

let marks = [22,33,55,22,33,44,55,67,78]
let above50 = []

for (let i = 0; i <marks.length ; i++){
    if(marks[i] > 50){
        above50.push(marks[i])
    }
}
console.log(above50)

let number = [11,22,33]
let sum = 0
for(let i = 0 ; i < number.length ; i++){
    sum = sum + number[i]
}
console.log(sum)

let city = ['pune', "banglore", "kolkate", "chennai"]
for (let i =0 ; i < city.length ; i++){
    console.log("welcome" + city[i])
}

