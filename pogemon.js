function pogemon(inputTable) {
    let len = inputTable[0]
    let sacha = inputTable[1].split(" ")
    let mine = inputTable[2].split(" ")

    // brute forcing all possibilities
    const minePermuted = permutator(mine)
    for (const minePermutedElement of minePermuted) {
        if (winner(sacha, minePermutedElement) === 1)
            return minePermutedElement.join(" ")
    }
    return "-1"
}
function rules(type1, type2) {
//type1 & type2 are strings
    const data = {
        //case plante
        'plante': {"poison": 'plante', 'sol': 'sol', 'vol': 'vol', 'plante': 'n'},
        //case eau
        'eau': {"plante": 'plante', 'sol': 'sol', 'eau': 'n'},
        //case feu
        'feu': {"eau": 'eau', 'plante': 'feu', 'feu': 'n',}
    }
    const listType = ['feu', 'eau', 'plante', 'glace', 'poison', 'sol', 'vol']
    let dataout;

    if (!listType.includes(type1) || !listType.includes(type2))
        dataout = 'n'
    else if (typeof data[type1] != 'undefined') {
        if (typeof data[type1][type2] == "undefined" && Object.keys(data).includes(type2))
            dataout = data[type2][type1]
        else
            dataout = data[type1][type2]

    } else if (typeof data[type1] == "undefined")
        dataout = data[type2][type1]

    return (typeof dataout == "undefined") ? 'n' : dataout;
}

const permutator = (inputArr) => {
    let result = [];

    const permute = (arr, m = []) => {
        if (arr.length === 0) {
            result.push(m)
        } else {
            for (let i = 0; i < arr.length; i++) {
                let curr = arr.slice();
                let next = curr.splice(i, 1);
                permute(curr.slice(), m.concat(next))
            }
        }
    }

    permute(inputArr)

    return result;
}

function winner([...sacha], [...mine]) {
//take parameter as table of data
    while (true) {
        if (sacha.length === 0 || mine.length === 0)
            break
        //if I win
        // remove sacha's thirst element
        let ruleResult = rules(sacha[0], mine[0]);
        if (ruleResult === mine[0]) {
            sacha.shift()
        }
        //both has the same type
        else if (ruleResult === 'n') {
            sacha.shift()
            mine.shift()
        }
        //sacha win
        else
            mine.shift()
    }
    if (sacha.length < mine.length)
        return 1
    if (sacha.length === mine.length)
        return 0
    if (sacha.length > mine.length)
        return -1
}
