
exports.formToArr = function(obj) {
    var arr = []
    for ( var k in obj ) {
        arr.push(obj[k])
    }
    return arr
}