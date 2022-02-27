// the main wrapper function
export function pogemon(inputTable) {
    let sacha = inputTable[1].split(" ")
    let mine = inputTable[2].split(" ")

    // brute forcing all possibilities
    const minePermuted = permutator(mine, sacha)
    for (const minePermutedElement of minePermuted) {
        if (Iwin(sacha, minePermutedElement))
            return minePermutedElement.join(" ")
    }
    return -1
}

//type1 & type2 are strings
export function rules(type1, type2) {
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

    // skip if at least one type is invalid (not in the listType)
    if (!listType.includes(type1) || !listType.includes(type2)) {
        dataout = 'n'
    } else {
        if (Object.keys(data).includes(type1) && typeof data[type1][type2] !== "undefined")
            dataout = data[type1][type2]
        else if (Object.keys(data).includes(type2) && typeof data[type2][type1] !== "undefined")
            dataout = data[type2][type1]
        else dataout = 'n'
    }

    //replace all undefined result to "n"
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

//take parameter as table of data
export function Iwin([...sacha], [...mine]) {
    while (true) {
        if (sacha.length === 0 || mine.length === 0)
            break
        //if I win remove sacha's thirst element
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
        return true
    if (sacha.length >= mine.length)
        return false
}

//todo: fix timeout issue

