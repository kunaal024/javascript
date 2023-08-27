let firstname ="kunaal"
console.log(firstname)


let lastname = "kanoje"
console.log(lastname)

console.log(typeof firstname)
console.log(typeof lastname)


let firstN = "kunaal"
let lastN = "kanoje"
console.log("my first name is  "  +firstN+   "    and  lastname is "  +lastN)


// interpolation

console.log(`my first name is  ${firstN} and lastname is ${lastN}`)



//string + string = string
// string + number = string
// number + string = string
// number + number = number

//program call by leftside

let a = 40
let b = 55
let c = " kunaal"

console.log(a+b+c)
console.log(b+c+a)
console.log(c+a+b)

//loopping over string

let city = "Nagpur"
console.log(city[3])
console.log(city[4])




for( i = 0; i < 6; i++){
    console.log(city[i])
    console.log(city)
}

for(i = city.length-1 ; i>=0 ; i--){
     console.log(i)
     console.log(city[i])
}

//string object


let colour = "Green"
console.log(colour.length)

let k =colour.toLowerCase()
console.log(k)


let k1 =colour.toUpperCase()
console.log(k1)