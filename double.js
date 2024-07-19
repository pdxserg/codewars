function doubleChar(str) {
    // Your code here
    let double= ""
    for(let i = 0; i<str.length; i++){
        double = double+str[i]+str[i]
    }return double
}

console.log(doubleChar("dd"))