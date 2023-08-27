let kunaal = ["u" ,"n" ,"a" ,"a","l"]
let names = kunaal.unshift("k")
//console.log(names) 
/console.log(kunaal)



let number = [10,20,12,10,20,12,3]
let add = 0
let k = number.reduce(function(acc,el ,index, arr){
    return acc +el
} )
console.log(k)
for(i = 0 ; i<number.length ; i++){
    add = add + number[i]
}
console.log(add)







