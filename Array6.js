let k = ["kunaal", "rachnan",24,25]
let obj ={
    firstName:"kunaal",
    lastName:"rachnan",
    age:24,
    age:25,    
}
console.log(obj[0])


let k1 =["golu","harshita",24,21]
console.log(k1[1])

//update

k1[0] = "kunaaal"
console.log(k1)

// add

k1.push("harshu")
k1.unshift("kuku")


// delete

k1.pop()
k1.unshift()

let G = {
    firstname:" kunaal ",
    lastname:"kanoje",
    city:"nagpur",
    language:"hindi",
    age:24
}





// dot notation and bracket notation


//retrive

console.log(G.firstname)
console.log(G['firstname'])

//update


G.firstname = "golu"
G['firstname'] = 'kuki'
console.log(G)

G.skills = "manipulation"
G['address'] = 444444
console.log(G)



//delete

delete G.firstname
delete G['firstname']
console.log(G)



