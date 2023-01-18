/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {

    let prev = -1
    let curr = 0
    let maxRows = numRows -1

    let getNextRow = function(curr, prev, maxRows){
        if(curr == 0) return curr + 1
        else if(curr == prev) return curr - 1
        else if(curr == maxRows) return curr
        else if(curr < prev) return curr - 1
        else if(curr > prev) return curr + 1
    }

    let getNextChar = function(){
        let nextChar = s.substring(0,1)
        s = s.slice(1, s.length)
        return nextChar
    }

    let rows = []
    while(s.length != 0){

        if(!rows[curr]) rows[curr] = []
            
        if(curr == prev){
            rows[curr].push("")
        } else if(prev < curr){
            let char = getNextChar()
            rows[curr].push(char)
        } else {
            let char = getNextChar()
            rows[curr].push(char)
        }

        let previous = curr
        curr = getNextRow(curr, prev, maxRows)
        prev = previous
    }
    
    let word = ""
    for(let row of rows){
        word = word + row.join("")
    }
    
    return word
};