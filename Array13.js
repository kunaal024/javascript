let employee = [
    {
     firstn: "kunaal",
     desgn:" ceo",
     skills : ["leadership","crtical thinking","leadership","excel"],
     city: "nagpur"
    },

    
    {
     firstn:"rachana",
     desgn: "MD",
     skills:["leadership"," risk raking","excel","product manager"],
     city:"nagpur",
    },

    {
        firstn:"harshita",
        desgn:"cfo",
        skills:["excel"," finacial","anaylsis","data Anaylatic"],
        city:"indore"
    },
    
    {
        firstn:"Golu",
        desgn:"consultant",
        skills:["data Anaylatic","finaical"],
        city:"banaglore"
    }
]

console.log(employee[[0]].city)

console.log("---------------------------")
employee.forEach(function(el){
    console.log(el.firstn)
})

console.log("---------------------------")


employee.forEach(function(el){
    console.log(el.city)
})

console.log("---------------------------")

employee.forEach(function(el){
    if(el.skills.includes("data Anaylatic")){
        console.log(el.firstn)
    }
})


console.log("---------------------------")



employee.forEach(function(el){
    console.log(el.firstn +":"+el.skills.length)
})

console.log("---------------------------")


employee.forEach(function(el){
    if(el.skills.includes("leadership") && el.city == "nagpur"){
        console.log(el.firstn)
    }
})

console.log("---------------------------")

employee.forEach(function(el){
    el.skills.push("communicator")
})
console.log(employee)