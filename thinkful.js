function updateLight(current) {
    return current === "green"? "yeelow": current === "yeelow"? "red": "green"
    //your code here!
//   if(current === "green"){
//    return "yellow"
//   }
//   if(current === "yellow"){
//     return "red"
//   } else {
//     return "green"
//   }

}

console.log(updateLight("green"))