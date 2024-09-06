// You need to write a function that reverses the words in a given string. Words are always separated by a single space.
//
//     As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.
//
// Example (Input --> Output)
//
// "Hello World" --> "World Hello"
// "Hi There." --> "There. Hi"
// Happy coding!

function reverse(string){
    //your code herefunction reverse(string){
    //your code here
    let arr = string.split(' ')
    let newRow=[]
    for (let i =arr.length-1; i>=0; i--){
        newRow.push(arr[i])
    }
    return newRow.join(' ')

}

