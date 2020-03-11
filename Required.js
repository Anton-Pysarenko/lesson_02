function cut (someStr) {
    let letters = []
    let arr = someStr.split(' ')
    for (value of arr) {
        letters.push(value[0])
    }
    let newStr = letters.join('')
    return newStr
}
var str = "Backend As A Service"
cut(str)