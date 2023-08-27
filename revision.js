let a = 10
console.log(a)

console.log(8+9)
console.log(8-9)
console.log(8/9)
console.log(8*9)
console.log(8%9)



function game(x,y){
    console.log(x+y)
}
game(10,20)

function game(m,n){
    return m + n
}
let i = game(10,20)
console.log(i)
console.log(i+10)



function game3(){
    console.log(10+10)
}
game3()




function game4(j,k){
    console.log(j==k && j==k) 
    console.log(j!=k && j==k)
    console.log(j==k && j!=k)
    console.log(j!=k && j!=k)

}
game4(12,12)


function game5(j,k){
    console.log(j==k || j==k) 
    console.log(j!=k || j==k)
    console.log(j==k || j!=k)
    console.log(j!=k || j!=k)

}
game5(12,12)



let o = 90
if(o>90){
    console.log("grade a")
}
else if(o>80){
    console.log("gradeb")
}