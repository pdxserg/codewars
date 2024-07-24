// Given an array with exactly 5 strings "a", "b" or "c" (chars in Java, characters in Fortran), check if the array contains three and two of the same values.
//
//     Examples
//     ["a", "a", "a", "b", "b"] ==> true  // 3x "a" and 2x "b"
//     ["a", "b", "c", "b", "c"] ==> false // 1x "a", 2x "b" and 2x "c"
//     ["a", "a", "a", "a", "a"] ==> false // 5x "a"



function checkThreeAndTwo(array) {

    //your code here
    let a= array.filter(el => el === "a")
    let b= array.filter(el => el === "b")
    let c= array.filter(el => el === "c")
    return (a.length !==5 && b.length !==1 && c.length !==1
        &&a.length !==1 && b.length !==1 && c.length !==1
        &&a.length+b.length+c.length === 5   )

}

console.log(checkThreeAndTwo(["a", "a", "a", "b", "b"]))
console.log(a.length+b.length+c.length )
console.log(a.length)
console.log(b.length)
console.log(c.length)