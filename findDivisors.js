function divisors(integer) {
    let array=[]

    for (let i = 2; i<=integer-1; i++){
        let a = integer / i
        if(a === Math.floor(a)){
            array.push(i)
        }

    }return array.length === 0 ? integer+" is prime" : array
}