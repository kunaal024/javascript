let a1 =20
let b1 =10
a1 > b1?console.log("a1 is greater"):console.log("b1  is greater")

let food ="misla pav"
switch(food){
    case"misla pav":
    console.log("pune")
    case"tari poha":
    console.log("nagpur")
    case"dhokla":
    console.log("gujrart")
}


let food1 ="tari poha"
switch(food1){
    case"misla pav":
    console.log("pune")
    break
    case"tari poha":
    console.log("nagpur")
    break
    case"dhokla":
    console.log("gujrart")
}

let a = 100
let b = 200
let c = 300
let flag = true
switch(flag){
    case a > b && a > c:
    console.log("a is greater")
    break
    case b > c && b >a:
        console.log("b is greater")
    break
    case c > b && c > a:
        console.log("c is greater")
    default:
        console.log("no none")

}

let city = "nagpur"
switch(city){
    case"nagpur":
    case"pune":
    console.log("mh")
    break
    case"jaipur":
    case"udipur":
    console.log("Rj")
    break
    case"indore":
    case"bhopal":
    console.log("Mp")
    break
    default:
        console.log("no city")
}

 


let city1 = "nagpur"
switch(city1){
    case"nagpur":
    case"pune":
        console.log("mh")
    case"jaipur":
    case"udipur":
         console.log("Rj")
    case"indore":
    case"bhopal":
        console.log("Mp")
    default:
        console.log("no city")
}






