// the department they work in as values.
//
//     Each department has a different boredom assessment score, as follows:
//
//     accounts = 1
// finance = 2
// canteen = 10
// regulation = 3
// trading = 6
// change = 6
// IS = 8
// retail = 5
// cleaning = 4
// pissing about = 25
//
// Depending on the cumulative score of the team, return the appropriate sentiment:
//
//     <=80: 'kill me now'
// < 100 & > 80: 'i can handle this'
// 100 or over: 'party time!!'
//
// The Office I - Outed
// The Office III - Broken Photocopier
// The Office IV - Find a Meeting Room
// The Office V - Find a Chair

function boredom(staff){
    let s = Object.values(staff)
    let a =0
    for(let i = 0; i < s.length; i++){
        if(s[i]=== "accounts")a =  a+1
        if(s[i]=== "finance") a = a+2
        if(s[i]=== "canteen") a = a+10
        if(s[i]=== "regulation") a = a+3
        if(s[i]=== "trading"|| s[i]=== "change" ) a = a+6
        if(s[i]=== "IS") a = a+8
        if(s[i]=== "retail") a = a+5
        if(s[i]=== "cleaning") a = a+4
        if(s[i]=== "pissing about") a = a+ 25
    }
    if(a<=80) return 'kill me now'
    if(a<100) return 'i can handle this'
    return 'party time!!'
}