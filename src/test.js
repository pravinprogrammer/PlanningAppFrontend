
// function sum(a,b){
//     return a+b;
// }  

//     var a = [5,6];

//     console.log(sum(...a));

function sumTwo(a,b,...args){
    console.log(args);
    let sum = 0;
    let multi = a*b;
    for (const arg of args) {

        sum += arg;
        
    }

    return [multi,sum];
}

console.log(sumTwo(4,5,1,1,1));



