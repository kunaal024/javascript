let colour = [2001, 2002, 2003, 2004]
let no = []
for(i = 0 ; i< colour.length;i++){
   // console.log(i)
  //  console.log(colour[i])
    let q1 = 2000 - colour[i]
    no.push(q1)
}
console.log(no)

///MAP()
let q2 = colour.map(function(el, index, arr){
    return 2000 - el
})
console.log(q2)



let table = [10, 20, 30, 40, 50, 60, 70]
let q3 = table.map(function(el, index, arr){
    return  el / 10
})
console.log(q3)


let sum = [9, 8,  7, 6, 5, 4, 3, 2, 1]
let add = 0
for(i= 0 ; i<sum.length; i++){
    add = add + sum[i]
}
console.log(add)

//reduce()
let q6 = sum.reduce(function(acc, el ,index, arr){
    return acc + el
},0)
console.log(q6)

//filter
let value = [11,22,22, 30, -33, 66, -66, -99]
let find = []
for(i= 0; i<value.length;i++){
    if(value[i]>10){
        find.push(value[i])
    }
    
}
console.log(find)

let q5 = value.filter(function(el){
    return el <10
})
console.log(q5)



let q4 = value.filter(function(el){
    return el >10
})
console.log(q4)


