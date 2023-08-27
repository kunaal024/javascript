for (let i = 1 ; i<=3 ; i++){
    console.log(i)
}
for (let i = 10 ; i>=4; i--){
    console.log(i)
}

for(let i = 2 ; i<=20; i = i + 2){
    console.log(i)

}//2<=20

for(let i = 5 ; i<=50 ; i = i+5){
    console.log(i)
}//5<=50

for (let i = 50 ; i>=5 ; i= i-5){
    console.log(i)
    if(i == 35){
        break
    }
}


// 
for(let i = 50 ; i>=5 ; i = i-5){
    console.log(i)
    if(i ==25){
        continue
    }
    
}


for(let i = 30 ; i>=3 ; i = i-3){
    
    if(i ==15){
        continue
    }
    console.log(i)
}

for(let i = 20 ; i>=2 ; i = i-2){
    
    if(i ==15){
        break
    }
    console.log(i)
}
