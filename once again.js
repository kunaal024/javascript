let a = 10
console.log(a)

// arthmatic problem

let a1 = 10
let b = 20
console.log(a1+b)
console.log(a1-b)
console.log(a1/b)
console.log(a1*b)
console.log(a1%b)


// arthmatic problem function 

function game(c,d){
    console.log(c+d)
    console.log(c-d)
    console.log(c/d)
    console.log(c*d)
    console.log(c%d)
}
game(10,20)



// arthmatic problem function with parameter


function game1(){
    console.log(4+4)
}
game1()


// arthmatic problem fucntion with return type

function game3(i,j){
        return i + j
}
game3(10,10)
let g = game3(10,10)
console.log(g)



// comparison operator


function game4(k,l){
    console.log(k<l)
    console.log(k>l)
    console.log(k<=l)
    console.log(k>=l)
    console.log(k===l)
    console.log(k!==l)

    
}
game4(12,10)

//logical operator


function game5(o,p){
    console.log(o==p && o==p)
    console.log(o==p && o!=p)
    console.log(o!=p && o==p)
    console.log(o!=p && o!=p)

}
game5(8,9)


function game6(o1,p1){
    console.log(o1==p1 || o1==p1)
    console.log(o1!=p1 || o1==p1)
    console.log(o1==p1 || o1!=p1)
    console.log(o1!=p1 || o1!=p1)
    
}
game6(6,6)

//if , else statement
 

let age = 17
if (age >20){
    console.log("adult")
}
if(age>=18){
    console.log("teenager")
}
if(age<=18){
    console.log("bacha")
}



let age1 = 17
if (age1 >20){
    console.log("adult")
}
else if(age1=18){
    console.log("teenager")
}
else if(age1=17){
    console.log("bacha")
}
else{
    console.log("not born")
}

//swtich statement


let lanaguage = "marathi"
switch(lanaguage){
    case"hindi":
    console.log("hinde sider")
    break
    case"marathi":
    console.log("maharashtraian")
    break
    case"Gujarati":
    console.log("gujrart")
    break
    case"punjabi":
    console.log("punjab")
}

