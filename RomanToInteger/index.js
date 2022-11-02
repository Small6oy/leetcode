/**
 * @param {string} s
 * @return {number}
 */
 let romanToInt = function(s) {

    const romanNumerals = {'I': 1, 'V': 5, 'X': 10, 'L': 50 ,'C': 100, 'D': 500, 'M': 1000}

    let total = 0;
    let previous;
    for(let symbol of s){
        let value = romanNumerals[symbol];
        if(!!previous){
            if((previous == 'I' && (symbol == 'V' || symbol == 'X'))
            || (previous == 'X' && (symbol == 'L' || symbol == 'C'))
            || (previous == 'C' && (symbol == 'D' || symbol == 'M'))
            ){
                value = value - romanNumerals[previous] - romanNumerals[previous]
            }
        }

        total += value
        previous = symbol
    }

    return total;
};