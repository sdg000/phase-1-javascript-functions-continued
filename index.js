function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(toDo = "go to the office"){
    return `This Monday, I will ${toDo}.`

}

function wrapAdjective(string = "*"){

    return function (inner = "special"){
        return `You are ${string}${inner}${string}!`
    }

    //console.log()
    //return `function (${string}${inner}${string})`

}