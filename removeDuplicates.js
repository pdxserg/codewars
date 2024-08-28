// Define a function that removes duplicates from an array of non negative numbers and returns it as a result.
//
//     The order of the sequence has to stay the same.
//
//     Examples:
//
// Input -> Output
//     [1, 1, 2] -> [1, 2]
//     [1, 2, 1, 1, 3, 2] -> [1, 2, 3]

function distinct(a) {
    let b=a[0]
    let c=[]
    for(let i = 0; i<a.length; i++){
        if(b!==a[i+1]){
            c.push(a[i])
            b=a[i+1]
        }
    }
    return c;
}