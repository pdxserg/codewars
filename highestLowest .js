function highAndLow(numbers) {
    // ...log

    let n = numbers.split(' ').map(Number)
    let a = n[0]
    let b = n[0]
    for (let i = 1; i < n.length; i++) {
        if (n[i] > a) {
            a = n[i]
        }
        if (n[i] < b) {
            b = n[i]
        }

    }return a+" "+b
}