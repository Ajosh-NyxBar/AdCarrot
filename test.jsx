const names = "akbar, ajosh, rifky"

let totalNames = 1

for (let i = 0; i<names.length; i++){
    if(names[i] === ","){
        totalNames = totalNames +1
    }
}

console.log (totalNames)