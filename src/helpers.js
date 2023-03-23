function choice(fruits){
    let num = Math.floow(Math.random() * fruits.length);
    return fruits[num]
}

function random(fruit,fruits){
    for(let i=0; i < fruits.length; i++){
        if(fruit===fruits[i]){
            return([...fruits.slice(0,i),...fruits.slice(i+1)])
        }
    }
}

export {choice, random}