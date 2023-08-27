let bike =["yamaha","suzuki","honda","hero"]
let [a,b,c] = bike
console.log(a)
console.log(b)
console.log(c)


let colour = [["blue","red"],["orange","purple"],["green","white"]]
let k = colour.flat()
console.log(k)
let [[q,w],[r,t],[p,u]] = colour
console.log(q)
console.log(p)



let J ={
    size: 32,
    lenght:44,
    weight:75
}

console.log(J.size)
console.log(J.lenght)
console.log(J.weight)


let {size,lenght,weigth} = J
console.log(size)
console.log(lenght)
console.log(weigth)




let i = ["boo","bee","foole","huh"]

//retrive
console.log(i[0])

//update
i[0] ="heheheh"
console.log(i)

//Add

i.push("ji")
i.unshift("okay")
console.log(i)

//delete

i.pop(0)
i.shift(1)
console.log(i)

let bike1 ={
    model:"suv",
    colure: "red"
}



//retrive
console.log(bike1.model)
console.log(bike1['colure'])

//update
bike1.model = "uv"
console.log(bike1)
bike1['colure'] = "blue"
console.log(bike1)

//add

bike1['average'] = 100
console.log(bike1)

bike1.skills = "speed"
console.log(bike1)

//delete

delete bike1.average
delete bike1['speed']
console.log(bike1)
