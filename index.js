// code your solution here
// declares function SaturdayFun
//activity defaulted to 'roller-skate
//${activity} gives permission for override
function saturdayFun (activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`; 
}

function mondayWork (activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
}

function wrapAdjective (symbol) {
    if (symbol === "*") {
    return function(adjective) {
         return(`You are ${symbol}${adjective}${symbol}!`)
        }
    } else if (symbol === "||") {
    return function(adjective) {
        return(`You are ${symbol}${adjective}${symbol}!`)
    }
    }
}
const starSymbol = wrapAdjective("*");
console.log(starSymbol("a hard worker"));
//output: 'You are *a hard worker*!'

const pipeSymbol = wrapAdjective("||");
console.log(pipeSymbol("a dedicated programmer"));
//output: 'You are ||a dedicated programmer||!'